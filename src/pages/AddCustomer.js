import React from 'react'
import { useState } from 'react';
import axios from "axios"
import { useRouter } from 'next/router';

const AddCustomer = () => 
{
  const router = useRouter();
  const [firstname, setFirstName] = useState("");
  const [middlename, setMiddleName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Register = () =>
  {
    router.push("/Login")
    // const userObj = {
    //   firstname,
    //   middlename,
    //   lastname,
    //   phoneNo,
    //   email,
    //   password,
    //   role: "Customer",
    // };
    // console.log(userObj);
    // axios
    //   .post("http://localhost:7000/customer/addCustomer", userObj)
    //   .then((response) => {
    //     console.log(response);
    //     if (response.status) {
    //       router.push("/Login");
    //     }
    //   });
  }
  return (
    <div>
      <div className="col-8 border rounded-3 my-5 p-3 shadow-lg mx-auto ">
        <h3 className="text-center text-primary border-bottom p-3">Sign Up</h3>
        <div className="row p-3">
          <div className="col-4">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="col-4">
            <label className="form-label">Middle Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Middle Name"
              onChange={(e) => {
                setMiddleName(e.target.value);
              }}
            />
          </div>
          <div className="col-4">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row p-3">
          <div className="col-4">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="col-4">
            <label className="form-label">Phone No</label>
            <input
              type="text"
              className="form-control"
              placeholder="Phone No"
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }}
            />
          </div>
          <div className="col-4">
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
          <button className="btn btn-primary form-control" onClick={Register}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCustomer