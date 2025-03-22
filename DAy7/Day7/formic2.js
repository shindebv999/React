import React from "react";
import { Form, Formik } from "formik";
import *as  Yup from 'yup';

export default function Formikjs ()
{
    return(
        <>
        <Formik
        initialValues={{
        firstName:'',
        lastName:''
        }}
        validationSchema={
            Yup.object().shape({
                email: Yup.string().trim().required('Need to Assign'),
                password: Yup.string().trim().required('Need to required here'),
                address: Yup.string().trim().required('Need to required here'),
                address2: Yup.string().trim().required('Need to required here'),
                city: Yup.string().trim().required('Need to required here'),
                state: Yup.string().trim().required('Need to required here'),
                zip: Yup.string().trim().required('Need to required here')
            })
        }
        onSubmit={(data)=>{
            console.log(data);
        }}
        >

        {({handleChange})=>(
            <div className="col-md-6 border border-info p-5  mx-auto">
                <Form className="row g-3">
                    <h1 className="text-info ">Sign-in Form</h1>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label" >Email</label>
                  <input type="email" className="form-control border border-info" id="inputEmail4" name="email" onChange={handleChange}></input>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label">Password</label>
                  <input type="password" className="form-control border border-info" id="inputPassword4" name="password" onChange={handleChange}></input>
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">Address</label>
                  <input type="text" className="form-control border border-info" id="inputAddress" placeholder="1234 Main St"name="address" onChange={handleChange}></input>
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                  <input type="text" className="form-control border border-info" id="inputAddress2" placeholder="Apartment, studio, or floor" name="address2" onChange={handleChange}></input>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">City</label>
                  <input type="text" className="form-control border border-info" id="inputCity"name="city" onChange={handleChange}></input>
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">State</label>
                  
                 <select  id="inputState" className="form-select border border-info" defaultValue={'DEFAULT'} name="state" onChange={handleChange} >
                    <option value="DEFAULT" disabled>Choose a state ...</option>
                    <option value="1">Maharasrta</option>
                    <option value="2">Karnataka</option>
                    <option value="3">Gujrat</option>
                    <option value="4">Telangana</option>
                    <option value="5">Chandigad</option>
             </select>

                </div>
                <div className="col-md-2">
                  <label htmlFor="inputZip" className="form-label">Zip</label>
                  <input type="text" className="form-control border border-info" id="inputZip" name="zip" onChange={handleChange}></input>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input border border-info" type="checkbox" id="gridCheck" onChange={handleChange}></input>
                    <label className="form-check-label" htmlFor="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-outline-info">Sign in</button>
                </div>
               
              </Form>
              </div>
                     
         )} 
        </Formik>
        </>
    )
        
}