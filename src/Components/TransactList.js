import React, { useState , useEffect } from 'react';
import Transact from './Transact';
import baseurl from '../API/BootAPI';
import axios from 'axios';

function TransactList() {

    useEffect( ()=>{
        document.title = "All Transactions";
        getAllTransactions();
        },[]) //Remove [] for update to happen
    
    
        //Function To Call SB Server
    
        const getAllTransactions = () => {
              axios.get(`${baseurl}/Transfers`).then(
                (response) => {
                  //Success
                  console.log(response);
                  setTransact(response.data);
                } ,
                (error) => {
                  //For Error
                  console.log(Error);
                }
              )
    
        }

        
    const removeTranById = (tran_id) => {
      setTransact( transfers.filter ( (t) => t.tran_id!=tran_id ));
    }

    const [transfers , setTransact] = useState([
      {tran_id:1 ,sname:'Nicole' ,rname:'Ben', amt_trans :1000 , date :'2023-09-20 15:12:04.438775'} ,
      {tran_id:2 ,sname:'Ben' ,rname:'Nicole', amt_trans :1000 , date :'2023-08-20 15:12:04.438775'} ,
      {tran_id:3 ,sname:'Rupam' ,rname:'Nicole', amt_trans :1000 , date :'2023-07-20 15:12:04.438775'} ,
      
      
  ])


    return(
        
      <div>
        <section>
  
  <h1>Our customers</h1>
  <div class="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
        
          
          <th>Sender Name</th>
          <th>Receiver Name</th>
          <th>Amount Transfered</th>
          <th>Date</th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="tbl-content">
  
      {transfers.map((transfers) => (
          <div key={transfers.tran_id}>
          <Transact transfers={transfers} update={removeTranById} />
          </div>
          ))}  
      
    
  </div>
</section>

</div>
       
    
   
    );
}
export default TransactList;