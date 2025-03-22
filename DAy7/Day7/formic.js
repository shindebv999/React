import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
export default function MyForm () {

    return (
        <>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: ''
                }}
                validationSchema={
                    Yup.object().shape( {
                        firstName: Yup.string().trim().required( 'need to assign' ),
                        lastName: Yup.string().trim().required( 'required here' )
                    } )
                }
                onSubmit={( data ) => {
                    console.log( data )
                }}
            >
                {( { handleChange } ) => (
                    <Form>
                        <input type="text" placeholder="enter username" name="firstName" onChange={handleChange} /><br /> <br />
                        <input type="text" placeholder="enter password" name="lastName" onChange={handleChange} /><br /> <br />

                        <input type="submit" value="Add" />
                    </Form>
                )}
            </Formik>
        </>
    )
}