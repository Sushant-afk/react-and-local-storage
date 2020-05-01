import React from 'react';
//import NoList from './watchlist/NoList';

const tableStyle = {
  "borderCollapse": "collapse",
  "fontFamily": "Trebuchet MS,Arial, Helvetica, sans-serif",
  "width": "80%",
  "margin":"50px auto",
  "transition":"all 0.5s ease-in"
}

const style2 = {"border": "3px solid #ddd","padding": "15px",}
const watchlistStyle = {"textAlign":"center"}
const btnStyle = {"padding":"5px 5px","backgroundColor":"rgb(255, 51, 10)","color":"white","borderRadius":"3px","cursor":"pointer"}
const trhStyle = {"backgroundColor":"rgb(253, 51, 88)","color":"white",}

const Watchlist = (props) => {


    console.log(props.getAddedMovies.length)

    return(
        <div className = "watchlist-div" style = {watchlistStyle}>
            <table style = {tableStyle}>
              <thead>
              <tr style = {trhStyle}>
               <th style = {style2}>Movie name</th>
               <th style = {style2}>Movie Release Date</th>
               <th style = {style2}>Remove from watchlist</th>
             </tr> 
             </thead>
             <tbody>
               {
                 props.getAddedMovies.map((movie) => {
                   return <tr>
                     <td style = {style2}>{movie.title}</td>
                     <td style = {style2}>{movie.releaseDate}</td>
                     <td style = {style2}><button style = {btnStyle} onClick ={(e) => props.deleteFromStorage(e,movie.id)}>Remove</button></td>
                   </tr>
                 })
               }
            </tbody>  
          </table> 
         
          
        </div>
    )
}




export default Watchlist;