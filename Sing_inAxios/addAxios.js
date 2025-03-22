import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";
export default function Sing_inAxios () {

    return (
        <>

            <Formik
                initialValues={
                    {
                        firstName: '',
                        lastName: '',
                        role: '',
                        username: '',
                        password: ''
                    }
                }
                validationSchema={
                    Yup.object().shape( {
                        firstName: Yup.string().trim().required( 'please enter first name here' ),
                        lastName: Yup.string().trim().required( 'please enter last name here' ),
                        role: Yup.string().trim().required( 'please enter role here' ),
                        username: Yup.string().trim().required( 'please username here' ),
                        password: Yup.string().trim().required( 'please password here' )

                    } )
                }
                onSubmit={
                    ( data ) => {
                        const requestHeader = {
                            "method": "POST",
                            "headers": {
                                "Content-Type": "application/json"
                            }
                        }
                        axios.post( 'http://localhost:8080/users/sign-up', data, requestHeader )
                            .then( res => console.log( res ) );
                        
                    }
                }
            >

                {( { handleChange, errors, setFieldValue, values } ) => (
                    <Form>
                        <Field type="text" placeholder="enter firstName" name="firstName" onChange={handleChange} /><br /> <br />
                        <ErrorMessage name="firstName" component="div" style={{ color: 'red' }} /><br /> <br />
                        <Field type="text" placeholder="enter lastname" name="lastName" onChange={handleChange} /><br /> <br />
                        <ErrorMessage name="lastName" component="div" style={{ color: 'red' }} /><br /> <br />
                        <select name="role" onChange={handleChange}>
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                        </select><br /><br />
                        <Field type="text" placeholder="enter username" name="username" onChange={handleChange} /><br /> <br />
                        <ErrorMessage name="username" component="div" style={{ color: 'red' }} /><br /> <br />
                        <Field type="text" placeholder="enter password" name="password" onChange={handleChange} /><br /> <br />
                        <ErrorMessage name="password" component="div" style={{ color: 'red' }} /><br /> <br />

                        <input type="submit" value="Add" />
                    </Form>
                )}

            </Formik>
        </>
    )
}