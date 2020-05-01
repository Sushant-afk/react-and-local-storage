import React,{useState} from 'react';

const Search = (props) => {

    const [query,setQuery] = useState('');

   // console.log("search component called");
    return(
       <div className = "search-div"> 
          <form onSubmit = {props.search}> 
               <input name = "queryInput" type = "text" value = {query} onChange = {(e) => {setQuery(e.target.value)}} placeholder = "Search here..."/>
               <button className = "search-btn" type = "submit">Search</button>
          </form>     
       </div>
    );
}

export default Search;