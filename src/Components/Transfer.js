/*To Transfer Money */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form,FormGroup,Input,Button,Container, FormFeedback } from 'reactstrap';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import baseurl from '../API/BootAPI';

function Transfer() {

  const { cust_Id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [error , setError] = useState({
    errors:{},
    isError:false,
  });

  useEffect(() => {
    document.title = "Single Customer";
    getCustomer();
  }, [cust_Id]);
  const send_id = parseInt(cust_Id, 10);
  const dt = typeof send_id;


  const getCustomer = () => {
    axios.get(`${baseurl}/customers/${cust_Id}`).then(
      (response) => {
        console.log(response);
        console.log('custId:'+cust_Id)
        console.log('Done');
        setCustomer(response.data);
        setCustomerName(response.data.name);
      },
      (error) => {
        console.log('error');
        console.log(error);
      }
    );
  }
  const [payment , setpay] = useState ( {} ); 
    //form Handler
    const handleForm = (e) => {
        console.log(payment);
        postData(payment);
        e.preventDefault();
    };
  
    //Post Data To Server

    if(error.isError){
      toast.error("Form Data Is InValid");
    }

    const postData = (data) => {
      console.log("Payment Object:", data);
          axios.post(`${baseurl}/Transfers`, data).then (
            (response) => {
                     console.log(response);
                     console.log("Success")
            } ,
            (error) => {
                      console.log(error);
                      console.log("Fail")
                      //Handling Errors
                      setError({
                        errors:error,
                        isError:true,
                      })

            }
          )

    };

  
    return(
        <div>
             <div className="container">
        <div className="text">
          {customer && (
            <div>
                <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
            <tr>
    
              <td>Welcome , {customerName}</td>
              <td>Account No: {customer.acctno}</td>
              <td>Current Balance: {customer.cur_bal}</td>
              
 
            </tr>
            </tbody>
            </table>
            </div>
          )}
        </div>
      </div>


     <form class="form" onSubmit={handleForm}>
    <p class="form-title">Pay Customers</p>
    <FormFeedback>
             { error?.errors?.response?.data?.message}
             <br></br>
            </FormFeedback>
   
    <div class="input-container">
   
    <input type="text" placeholder="Enter Recipient's Name" name="rname" id="rname" onChange= { (e)=> {
                setpay({...payment,rname:e.target.value});
            } }></input>
            
      
     
     <div class="input-container">       
     <Input type="number" placeholder="Enter Amount To Be Transfered" name="amt_trans" id="amt_trans" onChange= { (e)=> {
                setpay({...payment,amt_trans:e.target.value});
            } } 
            invalid = { error?.errors?.response?.data?.message ? true : false }
            /> 
            {/* <FormFeedback>
             { error?.errors?.response?.data?.message}
             <br></br>
            </FormFeedback> */}
            </div>  

            <div class="input-container">       
     <Input type="text" placeholder="Sender Name" name="sname" id="sname" onChange= { (e)=> {
                setpay({...payment,sname:e.target.value});
            } }
            invalid = { error?.errors?.response?.data?.message? true : false }
            //invalid = { error.errors.response.data.errors ?true:false  }
          //invalid={error.errors && error.errors.response && error.errors.response.data && error.errors.response.data.errors}

            /> 
{/* 
      <FormFeedback>
        { error?.errors?.response?.data?.message }
      </FormFeedback> */}

            </div>

      {/*      <div class="input-container">       
     <input type="number" placeholder="Send ID" name="send_id" id="send_id" onChange= { (e)=> {
                setpay({...payment,send_id:e.target.value});
            } }></input> 
            </div>

               */}  
     
         </div>
              
     
         
    {/*
//    <div class="input-container">
//        <input placeholder="Enter Recipient Account Number" type="number" name="number"></input> 
//    </div> */} 

 

      <button class="submit" type="submit">
     Pay Now
    </button>

  
</form>
 </div>
      
   
    );
}
export default Transfer;

   // useEffect( ()=>{
    //     document.title = "Get CustById";
    //     getCustById();
    //     },[]) 

    //     const getCustById = (cust_id) => {
    //         axios.get(`${baseurl}/Transfers/${cust_id}`).then(
    //           (response) => {
    //             //Success
    //             console.log(response);
    //             setCustById(response.data);
    //           } ,
    //           (error) => {
    //             //For Error
    //             console.log(Error);
    //           }
    //         )
  
    //   }
    //   const removeCustById = (cust_id) => {
    //     setCustById(custbyid.filter((custbyid) => custbyid.cust_id !== cust_id));
    //   };
    //   const [custbyid , setCustById] = useState([
    //     {cust_id:1 ,Sname:'Nicole' ,acctno:'AC100' , cur_bal:5000} ,
        
    // ])


//     import React, { useState , useEffect } from 'react';
// import Transact from './Transact';
// import baseurl from '../API/BootAPI';
// import axios from 'axios';
// import Cinfo from './Cinfo';
// import {useParams} from 'react-router-dom';


// function Transfer() {
 
    
//     return(
//         <div>
//             <div className="container">
//         <div className="text">
//         {/* <p>Customer Name:{custbyid.name}  Customer Account Number:{custbyid.acctno}  Current Balance :{custbyid.cur_bal} </p> */}
//         </div>
//       </div> 
//     <form class="form">
//     <p class="form-title">Pay Customers</p>
//      <div class="input-container">
//        <input placeholder="Enter Recipient Name" type="name" name="rname"></input> 
     
     
//    </div>
//    {/*
//    <div class="input-container">
//        <input placeholder="Enter Recipient Account Number" type="number" name="number"></input> 
//    </div> */} 

//    <div class="input-container">
//        <input placeholder="Enter Amount" type="amount" name="amount"></input> 
//    </div>

//       <button class="submit" type="submit">
//      Pay Now
//    </button>

  
// </form>
// </div>
//     );
// }
// export default Transfer ;
// const { cust_Id } = useParams(); // Use the useParams hook to get the cust_Id

//   useEffect(() => {
//     document.title = "Single Customer";
//     getCustomer();
//   }, [cust_Id]); // Include cust_Id in the dependency array to fetch data when it changes
//   console.log('Cust_Id'+cust_Id)

//   // Function To Call SB Server
//   const getCustomer = () => {
//     axios.get(`${baseurl}/customers/${cust_Id}`).then(
//       (response) => {
//         // Success
//         console.log(response);
//         console.log('Done');
        
//         // Update your state or perform other actions as needed
//       },
//       (error) => {
//         // For Error
//         console.log('error');
//         console.log(Error);
//       }
//     );
//   }
//     const removeCustId = (cust_Id) => {
//       setCustId( customers.filter ( (c) => c.cust_Id!=cust_Id ));
//     }

//     const [customers , setCustId] = useState([
//       {cust_Id:1 ,name:'Nicole' , email:'nicole@gmail.com',mobno:8798096545 ,acctno:'AC100',cur_bal:10000 } ,
    
      
      
//   ])
//   <div className="container">
//   <div className="text">
//   {customers.map((customer) => (
// <div key={customer.cust_Id}>
// <p>Welcome {customer.name}  <br></br>Account Number: {customer.acctno}<br></br>Current Balance: {customer.cur_bal}</p>

// </div>
// ))}
//   </div>
// </div> 

