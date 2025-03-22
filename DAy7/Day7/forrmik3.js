import React from "react";
import * as Yup from "yup";
import {  Field, Form, Formik } from "formik";
export default function AddUser() {

   return (
       <>
           <h1>Validation with Formik</h1>
           <Formik
               enableReinitialize={true}
               initialValues={{
                   firstName: '',
                   lastName: ''
               }}
               validationSchema={
                   Yup.object().shape({
                       firstName: Yup.string().trim().min(2, 'min required').required('need to assign'),
                       lastName: Yup.string().trim().min(3, 'min add').required('required here')
                   })
               }
               onSubmit={(data) => {
                   console.log(data)
               }}
           >
               {({
               }) => (
                   <Form>
                       <Field type="firstName" name="firstName" placeholder="enter firstname here" />

                       <Field type="lastName" name="lastName" placeholder="enter lastname here" />

                       <input type="submit" value="Add" />
                   </Form>
               )}
           </Formik>
       </>
   )
}
