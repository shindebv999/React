import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import axios from "axios";
import *as Yup from "yup";

export default function ApiCallPost(){
    return(
        <>
        <Formik
        enableReinitialize={true}
        initialValues={{
            firstName:'',
            lastName:'',
            gender:'',
            username:'',
            password:''

        }}
        validationSchema={
            Yup.object().shape({
                firstName:Yup.string().trim().min(2,"min firstname ").required("firstname red"),
                lastName:Yup.string().trim().min(2,"min lastName ").required("lastName red"),
                gender:Yup.string().trim().min(2,"min gender ").required("gender red"),
                username:Yup.string().trim().min(2,"min username ").required("username red"),
                password:Yup.string().trim().min(2,"min password ").required("password red")
            })
        }
        onSubmit={(values,{resetForm})=>{
            console.log(values);
            axios.post('https://dummyjson.com/users/add',values,{
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(res=>{
                console.log("res", res);
                alert("data added Sucessfully...")
                resetForm();
            }).catch(err=>{
                console.log("err" ,err);
            })
            
        }}
        >
        {({handleChange, dirty})=>(
            <Form>
                  firstName:<Field type="text" name="firstName" onChange={handleChange}/>
                             <ErrorMessage style={{color:"red"}} component="div" name="firstName"/> <br/><br/>
                             lastName:<Field type="text" name="lastName" onChange={handleChange}/>
                             <ErrorMessage style={{color:"red"}} component="div" name="lastName"/> <br/><br/>
                              <Field as="select" name="gender" >
                               <option value="">select gender</option>
                               <option value="male">Male</option>
                               <option value="female">Female</option>
                              </Field><br/><br/>
                             <ErrorMessage style={{color:"red"}} component="div" name="gender"/> <br/><br/>
                             username:<Field type="text" name="username" onChange={handleChange}/>
                             <ErrorMessage style={{color:"red"}} component="div" name="username"/> <br/><br/>
                             password:<Field type="text" name="password" onChange={handleChange}/>
                             <ErrorMessage style={{color:"red"}} component="div" name="password"/> <br/><br/>
                             <input type="submit" value="Reg" disabled={!dirty}/>
            </Form>
        )}
        
        </Formik>
        </>
    )
}

