import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
 
 export default function AddUser(){
    return(
    <>
    <Formik
    enableReinitialize={true}
    initialValues={{
        firstName:'',
        lastName:''
    }}
    validationSchema={
       Yup.object().shape({
        firstName:Yup.string().trim().min(2,"two requrird").required("req"),
        lastName:Yup.string().trim().min(3,'three reuired').required('reue3')
       })
    }
    onSubmit={(data)=>{
    console.log(data)
    }
    }
    >
        {({ handleChange ,dirty})=>(
            <Form>

                firstName:<Field type="text" name="firstName" onChange={handleChange} />
                <ErrorMessage style={{color:"red"}} name="firstName" component="div"/><br/><br/>
               lastName: <Field type="text" name="lastName" onChange={handleChange} />
               <ErrorMessage style={{color:"red"}} name="lastName" component="div"/><br/><br/>
                <input type="submit" disabled={!dirty} value="Add" />
            </Form>
        )}






    </Formik>
    </>
    )
 }