import React from 'react';
import axios from 'axios';
import baseurl from '../API/BootAPI';
import {useParams} from 'react-router-dom';

function Cust( {customers,update} ) {
 

    return(
      <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
            <tr>
            <td>{customers.cust_Id}</td>
              <td>{customers.name}</td>
              <td>{customers.email}</td>
              <td>{customers.cur_bal}</td>
              <td><button class="submit" type="submit">
              <td>Pay Contacts</td>
 </button></td>
            </tr>
            </tbody>
            </table>
            
          
    );
}
export default Cust;




