import React from 'react'
import { useState } from 'react';
import axios from "axios"
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter()
    
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const LoginUser = () =>
    {
        const loginObj = 
        {
            email,
            password
        }
        axios
          .post("http://localhost:7000/customer/addCustomer", loginObj)
          .then((response) => 
            {
                console.log(response)
                if(response.status)
                {
                    router.push('/Dashboard')
                }
            });
    }
  return (
    <div>
      <div className="col-5 border rounded-3 my-5 p-3 shadow-lg mx-auto ">
        <h3 className="text-center text-primary border-bottom p-3">Sign In</h3>
       
        <div className="p-3">
          
          <div className="">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Phone No"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="">
            <label className="form-label">Password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="p-3">
          <button className="btn btn-primary form-control" onClick={LoginUser}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Login