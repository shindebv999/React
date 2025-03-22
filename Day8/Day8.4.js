
import { Form, Formik ,Field, ErrorMessage} from "formik";
import React from "react";
import * as Yup from "yup";
import styles from './form.module.css';
export default function RegisterForm2 () {

    return (
        <>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    state:''
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
                {( { handleChange , dirty} ) => (
                    <Form>
                        
                        <div id={styles.Fdiv}> 
                        <label id={styles.lbl1}>FirstName:</label>
                        <Field type="text" placeholder="enter username" name="firstName" onChange={handleChange} /><br /> <br />
                        <ErrorMessage  name="firstName" Component="div" className="Invalid_data"  ></ErrorMessage>
                        
                        <label id={styles.lbl2}>LastName:</label>
                        <Field type="text" placeholder="enter password" name="lastName" onChange={handleChange} /><br /> <br />
                        <ErrorMessage name="lastName" Component="div" className="Invalid_data"  ></ErrorMessage>
                        
                        <label id={styles.lbl3}>State:</label>
                        <Field as="select" name="state" onChange={handleChange} /><br /> <br />
                        <option>select State</option>
                        <option>select State</option>
                        <option>select State</option>
                       
                        <input type="submit" value="Add" disabled={!dirty} id={styles.btn}/>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}