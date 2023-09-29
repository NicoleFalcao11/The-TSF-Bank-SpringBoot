import React, { useState , useEffect } from 'react';
import Cust from './Cust';
import baseurl from '../API/BootAPI';
import axios from 'axios';

function Demo() {

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

        
    const removeCustById = (id) => {
      setCust( customers.filter ( (c) => c.id!=id ));
    }

    const [customers , setCust] = useState([
      {id:1 ,cname:'Nicole' , email:'nicole@gmail.com',bal:10000 } ,
      {id:2 ,cname:'Neil' , email:'nicole@gmail.com',bal:150000} ,
      {id:3 ,cname:'Rupam' , email:'nicole@gmail.com',bal:30000} ,
      
      
  ])


    return(
        
      <div>
        <section>
  
  <h1>Fixed Table header</h1>
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
          <div key={customers.id}>
          <Cust customers={customers} update={removeCustById} />
          </div>
          ))}
      
    
  </div>
</section>

</div>
       
    
   
    );
}
export default Demo;
{/* </table> {customers.map((customers) => (
          <div key={customers.id}>
          <Cust customers={customers} update={removeCustById} />
          </div>
          ))}*/}