import React from 'react';
import './Movie.css';

const Movie = (props) => {

    console.log("Movie called");
    return(
       <div className = "movie-card">
           <div className = "card-image">
             {
               props.image == null ? <img className="" src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="Card image cap" style={{ width: "100%",
               height: 360}}/> : <img className="" src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="Card image cap" style={{ width: "100%",
               height: 360}} />
             }
           </div>
            <div className = "card-title"><h2 className = "text">{props.title}</h2></div>
            <div className = "card-text"><p>{props.overview}</p></div>
            <div className = "card-footer">
                <p>Release Date <br/> {props.date}</p>
                <button className = "add-button">More Info</button>
                 <button className = "add-button" onClick = {(e) => props.storeMovie(e,props.title,props.date,props.movieId,props.added)}>Add</button>    
            </div>
       </div>
    );
}

export default Movie;