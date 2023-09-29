import React from 'react';
import {Button} from 'reactstrap'
import { Link } from 'react-router-dom';


function Body() {
  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40vh',
    
  };

  const buttonStyle = {
    width: '220px',
    height: '50px',
    backgroundColor: 'white',
    border: 'none',
    color: '#555',
    fontSize: '20px',
    fontFamily: 'poppins, sans-serif',
    textTransform: 'uppercase',
    boxShadow: '0px 0px 10px #140B5C',
    marginBottom: '10px',
  };

  return (
   
    <div style={buttonContainerStyle} className="button-container">
      <Button color="primary" outline size="lg" style={buttonStyle} > <Link className='list-group-item list-group-item-action' tag='a' to='/SignIn' action>Add Students</Link></Button>
      <Button color="primary" outline size="lg" style={buttonStyle}><Link className='list-group-item list-group-item-action' tag='a' to='/buy' action>Buy Books</Link></Button>
      <Button color="primary" outline size="lg" style={buttonStyle}><Link className='list-group-item list-group-item-action' tag='a' to='/add-book' action>Sell Books</Link></Button>
      
    </div>
  );
}
export default Body