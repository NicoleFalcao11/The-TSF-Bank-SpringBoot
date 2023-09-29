import React from 'react';
import { Form,FormGroup,Input,Button,Container } from 'reactstrap';
import { useState , useEffect } from 'react';
import axios from 'axios';
import baseurl from '../API/BootAPI';

//Form
const AddBook=()=> {
        useEffect( ()=>{
            document.title = "Sell Book";
            },[]);
         
    const [book , setbooks] = useState ( {} ); 
    //form Handler
    const handleForm = (e) => {
        console.log(book);
        postData(book);
        e.preventDefault();
    };
     
    
    //Post Data To Server
    const postData = (data) => {
          axios.post(`${baseurl}/books`, data).then (
            (response) => {
                     console.log(response);
                     console.log("Done")
            } ,
            (error) => {
                      console.log(error);
                      console.log("NotDone")
            }
          )

    };







return (
    <div>
    <div class="form-container" className="form-container" style={{
  border: '2px solid #ccc',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)',
  width: '400px',
  margin: '0 auto'
}}>
    <h1 class="text-center my-3">Add Book Here</h1>
    <Form onSubmit={handleForm}>
        <FormGroup>
            <Input type="text" placeholder="Enter Book Name" name="bkname" id="bkname" onChange= { (e)=> {
                setbooks({...book,bkname:e.target.value});
            } }                         style={{ width: '100%', height: '60px', marginBottom: '10px',  boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)'}}/> 
            <Input type="text" placeholder="Enter Book Image" name="bkimg" id="bkimg" onChange= { (e)=> {
                setbooks({...book,bkimg:e.target.value});
            } } style={{ width: '100%', height: '60px', marginBottom: '10px',  boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)'}}/> 
            <Input type="text" placeholder="Enter Book Condition" name="condi" id="bkcondi" onChange= { (e)=> {
                setbooks({...book,condi:e.target.value});
            } } style={{ width: '100%', height: '60px', marginBottom: '10px',boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)', }} />
            <Input type="text" placeholder="Is Book Available?" name="avail" id="avail" onChange= { (e)=> {
                setbooks({...book,avail:e.target.value});
            } } style={{ width: '100%', height: '60px', marginBottom: '10px',boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)' }} />
            <Input type="Int" placeholder="Enter Book Price" name="price" id="price" onChange= { (e)=> {
                setbooks({...book,price:e.target.value});
            } } style={{ width: '100%', height: '60px', marginBottom: '10px',boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)' }} />
            <Input type="Long" placeholder="Enter Your Roll No" name="sid" id="sid" onChange= { (e)=> {
                setbooks({...book,sid:e.target.value});
            } } style={{ width: '100%', height: '60px', marginBottom: '10px', boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)'}} />

            
        </FormGroup>
        <Container>
            <Button color='success' type = "submit">
                Submit
            </Button>
            <Button type='reset' color='warning' style={{ marginLeft: '10px' }}
            onClick = { (e) => {
                setbooks({});
            }}>
                Reset
            </Button>
        </Container>
    </Form>
    </div>
    </div>
    );
}

export default AddBook