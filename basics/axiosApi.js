import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import *as Yup from "yup";
import axios from "axios";

export default function AxiosApi(){
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
                 firstName:Yup.string().trim().min(3,"minimum three char req in firstName").required("firstName is required"),
                 lastName:Yup.string().trim().min(3,"minimum three char req in lastName").required("lastName is required"),
                 gender:Yup.string().trim().min(3,"minimum three char req in gender").required("gender is required"),
                 username:Yup.string().trim().min(3,"minimum three char req in username").required("username is required"),
                 password:Yup.string().trim().min(3,"minimum three char req in password").required("password is required"),
     
             })
          }
        onSubmit={(values,{ resetForm})=>{
         console.log(values);
         axios.post('https://dummyjson.com/users/add',values,{
             headers:{            
                 "Content-Type":"application/json"
             }
         })
         .then(res=>{
             console.log(res);
             alert(" submit sucessfully");
             resetForm();
         }).catch(err=>{
             console.log("error :",err);
         })
        }}
         >
     {({handleChange,dirty})=>(
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