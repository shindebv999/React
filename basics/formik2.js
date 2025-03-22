import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

export default function Formik2(){
return(
    <>
    <Formik
    enableReinitialize={true}
    initialValues={{
       username:"",
       password:""
    }}
    validationSchema={
        Yup.object().shape({
            username:Yup.string().trim().min(2,"min two char req username").required("username required"),
            password:Yup.string().trim().min(2,"min two char req password").required("password required")
        })
        
    }
    onSubmit={(data,{resetForm})=>{
        console.log(data);
        resetForm();
    }}
    >
     {({handleChange,dirty})=>(
        <Form>
            UserName:<Field type=" text" name="username" onChange={handleChange}/>
            <ErrorMessage style={{color:"red"}} name="username" component="div"/>
            Password:<Field type=" text" name="password" onChange={handleChange}/>
            <ErrorMessage style={{color:"red"}} name="password" component="div"/>
            <input type="submit" value="Login" disabled={!dirty}/>
        </Form>
     )}



    </Formik>
    </>
)
}