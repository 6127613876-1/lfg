import { useState } from "react";
import { auth } from "./firebase";
import {  signInWithEmailAndPassword } from "firebase/auth";
import {Button , Form } from 'react-bootstrap';
import './style.css'


export const Login = () => {
    const[Email,setEmail]=useState("");
    const[Password,setPassword]=useState("");

    const signIn = async (e) =>{
        try{
        await signInWithEmailAndPassword(auth,Email,Password);
       console.log("logged");
        }
        catch(err)
        {
            console.error(err.message)
        }
    };


  return (
    <div className='outer-container '>
     
      <div className="form-container d-flex justify-content-center align-items-center flex-column ">
      <h2 className='p-3'>Fusion Green HealthCare</h2>
        <Form className='rounded p-4 p-sm-3' >
         <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control placeholder='enter your email' name="email" onChange={(e) => setEmail(e.target.value)}/>
          <Form.Text className='text-muted'>we will Never share your email with anyone else</Form.Text>
         </Form.Group>
         <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' name="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
         </Form.Group>
         <Form.Group>
          <Form.Check type='checkbox' label='Remember Me' />
         </Form.Group>
         <Button onClick={signIn}>Sign in</Button>
        </Form>
      </div>
    </div>
      
    
  );
}

export default Login;
