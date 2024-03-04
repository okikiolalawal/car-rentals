import React from 'react'
import { useState } from 'react';
import axios from "axios"
import { useRouter } from 'next/router';
import style from '../styles/Home.module.css'
const AddCar = () => 
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
    <div className={`${style.body} bg-primary`}>
      <div className={style.form}>
        <div
          className={`col-8 border rounded-3 p-3 shadow-lg mx-auto bg-white`}
        >
          <h3 className="text-center text-primary border-bottom p-3">
            Add A New Car
          </h3>
          <div className="row p-1">
            <div className="col-4">
              <label className="form-label">Make</label>
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
              <label className="form-label">Model</label>
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
              <label className="form-label">Year</label>
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
          <div className="row p-1">
            <div className="col-6">
              <label className="form-label">Plate No</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="col-6">
              <label className="form-label">Price</label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone No"
                onChange={(e) => {
                  setPhoneNo(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row p-1">
            <div className="col-6">
              <label className="form-label">Plate No</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="col-6">
              <label className="form-label">Price</label>
              <select
                type="text"
                className="form-control"
                placeholder="Phone No"
                onChange={(e) => {
                  setPhoneNo(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row p-1">
            <div className="col-6">
              <label htmlFor="" className="form-label">
                Branch
              </label>
              <select
                className="form-select"
                onChange={(e) => {
                  setBranch(e.target.value);
                }}
              >
                <option value="parent" className="form-control">
                  Asero
                </option>
                <option value="principal" className="form-control">
                  Abiola Way
                </option>
                <option value="teacher" className="form-control">
                  Rounder
                </option>
                <option value="teacher" className="form-control">
                  Oke-Ilewo
                </option>
              </select>
            </div>
            <div className="col-6">
              <label htmlFor="" className="form-label">
                Category
              </label>
              <select
                className="form-select"
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <option value="parent" className="form-control">
                  Compat
                </option>
                <option value="principal" className="form-control">
                  Luxury
                </option>
                <option value="teacher" className="form-control">
                  4X4
                </option>
                <option value="teacher" className="form-control">
                  Convertibles
                </option>
              </select>
            </div>
          </div>
          <div className="p-1">
            <div className="col-12">
              <label className="form-label">Desription</label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Description"
                cols={10}
                rows={5}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="p-3">
            <button className="btn btn-primary form-control" onClick={Register}>
              Add Car
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddCar