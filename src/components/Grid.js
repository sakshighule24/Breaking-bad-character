import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import EachItem from './Item';

const Grid = ({items, isLoading }) => {
    
    const [quotes, setQuotes]=useState([]);
    
     useEffect(()=>{
      const fetchQuotes = async() =>{
        
          const result1 = await axios.get('https://www.breakingbadapi.com/api/quote?author={item.name}');
    
          setQuotes(result1.data);
          
          
      }
      
      fetchQuotes();
     
  }, []);
    
  return isLoading ?  <h1>Loading....</h1>  : ( <section className='cards'>
       {items.map(item =>(
        <EachItem key={item.char_id} item={item} quotes={quotes}/>
     ))}
   </section> )
}

export default Grid;