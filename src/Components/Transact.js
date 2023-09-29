import React from 'react';
import axios from 'axios';
import baseurl from '../API/BootAPI';

function Transact( {transfers,update} ) {

    return(
      <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
            <tr>
              
              
              <td>{transfers.sname}</td>
              <td>{transfers.rname}</td>
              <td>{transfers.amt_trans}</td>
              <td>{transfers.date}</td>
            </tr>
            </tbody>
            </table>
            
          
    );
}
export default Transact;