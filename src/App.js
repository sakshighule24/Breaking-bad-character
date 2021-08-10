import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Grid from './components/Grid';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import './App.css';

const App = () => {

  const [items, setItems]= useState([]); 
  const [isLoading, setIsLoading]= useState(true);
  const [currentPage, setCurrentPage]= useState(1);
  const [itemPerPage]= useState(10);
    
  useEffect(()=>{
      const fetchItems = async() =>{
          setIsLoading(true);
          const result = await axios.get('https://www.breakingbadapi.com/api/characters');
    
          setItems(result.data);
          
          setIsLoading(false);
      }
      
      fetchItems();
     
  }, []);
    
//CurrentPost
    
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItem = items.slice(indexOfFirstItem,indexOfLastItem);
    
    //change page
    
    const paginate=(pageNumber) => setCurrentPage(pageNumber);
    
  return (
    <div >
      <Header />
          <div className="container">
              <Grid isLoading={isLoading} items={currentItem} />
              <Pagination itemPerPage={itemPerPage} totalItems={items.length} paginate={paginate} />
          </div>
        <Footer />
          <h4>@ SAKSHI GHULE,2021</h4>
    </div>
  );
}

export default App;
