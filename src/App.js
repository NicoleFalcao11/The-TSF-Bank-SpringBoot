
import logo from './logo.svg';
import './App.css';
import './NavBar.css';
import NavBar from './Components/NavBar'

import {Button,Jumbotron,Container} from 'reactstrap'

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import {Row, Col } from 'reactstrap';
import Home from './Components/Home';


import Footer from './Components/Footer';
import Stack from 'react-bootstrap/Stack';
import Sell from './Components/Sell'
import Customer from './Components/Customer';
import Transaction from './Components/Transaction';
import Transfer from './Components/Transfer';

function App() {
  return (
    <div>
      <Router>
      <Stack gap={3}>  
      <NavBar />
     
        <Routes>
          <Route path="/" element={<Home/>} />
        
          <Route path="/customers" element={<Customer/>} />
          <Route path="/customers/:cust_Id" element={<Transfer/>} />
          <Route path="/payments" element={<Transaction/>} />
        </Routes>
      
    
       
    <Footer />
    </Stack>
    </Router>
    </div>
  );
}

export default App;
