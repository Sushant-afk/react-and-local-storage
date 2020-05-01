import React from 'react';
import Movie from './Movie';
import Pagination from './Pagination';
import './Movie.css';
import styled from 'styled-components';
import { ResultFade } from './ResultFadeIn';

const Results = styled.div`
  visibility: hidden;
  position: relative;
  top: 60px;
  animation: ${ResultFade} 0.7s 0.1s forwards;
`;

const Movies = (props) => {

    console.log("Movies function called");
    return(   

       <div className = "movie-container-div">
           <Results>
         {
             props.movies.map(movie => {      
                return <Movie key={movie.id} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} title={movie.title} 
                overview={movie.overview} image={movie.poster_path} date={movie.release_date} storeMovie = {props.storeMovie} added={false}/>

             })
         }
         <Pagination  searchMore = {props.searchMore} pages = {props.totalPages} currentPage = {props.currentPage}/>
         </Results>
        </div>
    );
}

export default Movies;