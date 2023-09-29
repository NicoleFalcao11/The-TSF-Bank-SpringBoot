import React, { useState , useEffect } from 'react';
import Cust from './Cust';
import baseurl from '../API/BootAPI';
import rurl from '../API/BootAPI';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom'; 

function CustList() {

    useEffect( ()=>{
        document.title = "All Customers";
        getAllCustomers();
        },[]) //Remove [] for update to happen
    
    
        //Function To Call SB Server
    
        const getAllCustomers = () => {
              axios.get(`${baseurl}/customers`).then(
                (response) => {
                  //Success
                  console.log(response);
                  setCust(response.data);
                } ,
                (error) => {
                  //For Error
                  console.log(Error);
                }
              )
    
        }
       

        
    const removeCustById = (cust_Id) => {
      setCust( customers.filter ( (c) => c.cust_Id!=cust_Id ));
    }

    const [customers , setCust] = useState([
      {cust_Id:1 ,name:'Nicole' , email:'nicole@gmail.com',cur_bal:10000 } ,
      {cust_Id:2 ,name:'Neil' , email:'nicole@gmail.com',cur_bal:150000} ,
      {cust_Id:3 ,name:'Rupam' , email:'nicole@gmail.com',cur_bal:30000} ,
      
      
  ])


    return(
        
      <div>
        <section>
  
  <h1>Our Customers</h1>
  <div class="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
         <th>Customer ID</th>
          <th>Customer Name</th>
          <th>Email</th>
          <th>Balance</th>
          <th>Action</th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="tbl-content">
  
      {customers.map((customers) => (
          <div key={customers.cust_Id}>
            <Link  style={{textDecoration:'none'}} to = {`/customers/${customers.cust_Id}`}>
          <Cust customers={customers} update={removeCustById} />
          </Link >
          </div>
          ))}  
      
    
  </div>
</section>

</div>
       
    
   
    );
}
export default CustList;