import React, { useState , useEffect } from 'react';
import Book from './Book';
import baseurl from '../API/BootAPI';
import axios from 'axios';

const BookList = () => {


   useEffect( ()=>{
    document.title = "All Books";
    getAllBooks();
    },[]) //Remove [] for update to happen


    //Function To Call SB Server

    const getAllBooks = () => {
          axios.get(`${baseurl}/books`).then(
            (response) => {
              //Success
              console.log(response);
              setBooks(response.data);
            } ,
            (error) => {
              //For Error
              console.log(Error);
            }
          )

    }

    const removeBkById = (id) => {
      setBooks( books.filter ( (b) => b.id!=id ));
    }



    const [books , setBooks] = useState([
        {id:'6',bkname:'GV Kumbhojkar' , price:'100',condi:'Good', avail:'Yes'} ,
        {id:'7',bkname:'GV Kumbhojkar' , price:'100',condi:'Good', avail:'Yes'} ,
        {id:'8',bkname:'GV Kumbhojkar' , price:'100',condi:'Good', avail:'Yes'} ,
        
        
    ])
  
    return (
      <div className="container" style={{ maxHeight: '600px' }}>
      <div className="row justify-content-center">
        {books.map((book) => (
          <div className="col-md-3 my-4" key={book.id} >
            <Book book={book} update={removeBkById}  />
          </div>
        ))}
      </div>
    </div>
      );
    };

  export default BookList