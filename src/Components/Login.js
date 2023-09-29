import React from "react";
import { Form,FormGroup,Input,Button,Container } from 'reactstrap';


const Login = () => {









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
    <h1 class="text-center my-3">Enter Details To Sign In</h1> 
           <Form >
        <FormGroup>
            <Input type="text" placeholder="Enter Email" name="name" id="name" /* onChange= { (e)=> {
                setbooks({...book,bkname:e.target.value}); 
            } }                       */
             style={{ width: '100%', height: '60px', marginBottom: '10px',  boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)'}}/> 


            <Input type="text" placeholder="Enter Password" name="roll_no" id="roll_no" /*onChange= { (e)=> {
                setbooks({...book,bkimg:e.target.value}); 
            } } */ style={{ width: '100%', height: '60px', marginBottom: '10px',  boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)'}}/> 


            

            
        </FormGroup>
        <Container>
            <Button color='success' type = "submit">
                Login
            </Button>
            <Button type='reset' color='warning' style={{ marginLeft: '10px' }}
            >
                Reset
            </Button>
        </Container>
    </Form>
    </div> 
    </div>

    );
}

export default Login;