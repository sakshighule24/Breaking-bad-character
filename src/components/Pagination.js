import React from 'react';

const  Pagination = ({ itemPerPage, totalItems, paginate}) =>{
    const pageNumber=[];
    
    for(let i=1; i<= Math.ceil(totalItems / itemPerPage); i++){
        pageNumber.push(i);
    }
    
    return (
        <nav>
            <ul className="paginationcss">
                {pageNumber.map(number =>(
                <li key={number} className="pageitem">
                <a onClick={()=> paginate(number)} href='#' className="pagelink">
                {number}</a>
                </li>
                ))}
            </ul>
         </nav>
    
    );
};

export default Pagination;