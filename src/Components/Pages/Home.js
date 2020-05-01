import React from 'react';
import Search from '../Search';
import './Pages.css';
import Movies from '../Movies';
import Intro from '../Intro';

class Home extends React.Component
{
   constructor(props)             
   {super(props);}



    render()
    {
     // console.log("Home Render called");
     

       return(
          <div className = "home-div">
              <Search search = {this.props.getMovie}/>
              {this.props.searched ? <Movies searchMore = {this.props.getMoreMovie} movies = {this.props.movies} currentPage = {this.props.currentPage} totalPages = {this.props.totalPages} storeMovie = {this.props.storeMovie}/>: <Intro/>}
          </div>
       );
    }
}
export default Home;