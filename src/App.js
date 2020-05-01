import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Pages/Home';
import Watchlist from './Components/Pages/Watchlist';
import About from './Components/Pages/About';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends React.Component
{
  constructor()
  {
    //console.log("App constructor called");
    super();

    this.state = {
      API_KEY:'297db146109baf07442f37cf19b0f295',
      currentPage:1,
      query:"",
      movies:[],
      totalResults:0,
      totalPages:0,
      searched:false,
      addedMovie:[]
    }
  }

  getMovie = async(e) => {
    e.preventDefault();
   
    const searchTerm = e.target.elements.queryInput.value;
    if(searchTerm !== '')
    {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.state.API_KEY}&query=${searchTerm}&language=en-US&page=${this.state.currentPage}`);
    const json = await response.json();
   
    this.setState({
          query:searchTerm,
          movies:json.results,
          totalResults:json.total_results,
          totalPages:json.total_pages,
          searched:true,
       });
   
      }
 }

 getMoreMovie = async(e) => {

    e.preventDefault();

    if(e.target.getAttribute('data-task') == 'next')
    {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.state.API_KEY}&query=${this.state.query}&language=en-US&page=${this.state.currentPage + 1}`);
      const json = await response.json();
      this.setState({currentPage:this.state.currentPage + 1,movies:json.results})
    }
    
    else if(e.target.getAttribute('data-task') == 'previous')
    {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.state.API_KEY}&query=${this.state.query}&language=en-US&page=${this.state.currentPage - 1}`);
      const json = await response.json();
      this.setState({movies:json.results,currentPage:this.state.currentPage - 1})
      
    }
    
    else{}

 }

 componentDidMount()
 {
    const arr = [];
    for(let i = 0; i<localStorage.length; i++)
    {
      let key = localStorage.key(i);
      arr.push(JSON.parse(localStorage.getItem(key)));
    }
    this.setState({addedMovie:arr});
 }
 deleteFromStorage = (e,id) => {
     localStorage.removeItem(id);
     let removedIndex = this.state.addedMovie.find(movie => movie.id == id);
     this.state.addedMovie.splice(removedIndex,1);
    
     this.state.addedMovie === 0 ? this.setState({addedMovie:[]}) : this.setState({addedMovie:this.state.addedMovie});

  }


  storeMovieInStorage = (e,title,releaseDate,id) => {
     e.preventDefault();
    // console.log(e.target,title,releaseDate);
    const movieObject = {
      title:title,
      releaseDate:releaseDate,
      id:id
    } 
    localStorage.setItem(id,JSON.stringify(movieObject));

    this.setState((prevState) => {

      return{
      addedMovie:prevState.addedMovie.concat(movieObject)
      }

    })

  }

  render()
  {
    console.log("App render called");

    return(
     <div className = "app-div">
     <BrowserRouter>
       <Navbar/>
       <Switch>
         <Route path = "/" exact>
           <Home getMovie = {this.getMovie} getMoreMovie = {this.getMoreMovie} API_KEY = {this.state.API_KEY} currentPage = {this.state.currentPage} query = {this.state.query} movies = 
           {this.state.movies} totalResults = {this.state.totalResults} totalPages = {this.state.totalPages} searched = {this.state.searched} storeMovie = {this.storeMovieInStorage}/>
         </Route>
         <Route path = "/watchlist" >
           <Watchlist getAddedMovies = {this.state.addedMovie} deleteFromStorage ={this.deleteFromStorage}/>
         </Route>
         {/* <Route path = "/about" component = {About}/> */}
       </Switch>
     </BrowserRouter>
     </div>
    );
  }
}

export default App;
