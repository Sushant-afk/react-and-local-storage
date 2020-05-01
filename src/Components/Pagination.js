import React from 'react';

const buttonStyle = {
    background:'red',
    padding:'10px',
    color:'white',
    margin:'0px 15px',
    cursor:'pointer'
}
  
const divStyle = { textAlign:'center' }
const disabled = {  background:'gray',padding:'10px',color:'white',margin:'0px 15px',cursor:'none'}

const  Pagination = (props) => {

 // console.log("Pagination called");

    return(
      <div style = {divStyle} className = "pagination-div">
        {props.currentPage > 1 ? <button style = {buttonStyle} onClick = {props.searchMore} data-task = 'previous'> &larr; </button> :  <button style = {disabled} disabled> &larr; </button>}
        {props.currentPage < props.pages ? <button style = {buttonStyle} onClick = {props.searchMore} data-task = 'next'> &rarr; </button> : <button style = {disabled} disabled> &rarr; </button>}
      </div>
    );
}

export default  Pagination;