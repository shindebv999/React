
import { Form, Formik ,Field, ErrorMessage} from "formik";
import React from "react";
import * as Yup from "yup";
import PhoneInput from 'react-phone-input-2';
import styles from './form.module.css';
export default function RegisterForm7 () {

    return (
        <>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: ''
                }}
                validationSchema={
                    Yup.object().shape( {
                        firstName: Yup.string().trim().min(2,"2 required").max(10,' max 10 required').matches('/^[a-zA-Z]+$/',"Special char not allowed").required( 'need to assign' ),
                        lastName: Yup.string().trim().min(2,"2 required").max(10,' max 10 required').matches('/^[a-zA-Z]+$/',"Special char not allowed").required( 'required here' ),
                        contact: Yup.string().trim().required( 'required here' ),
                    } )
                }
                onSubmit={( data ) => {
                    console.log( data )
                }}
            >
                {( { handleChange,setFieldValue , dirty} ) => (
                    <Form>
                        
                        <div id={styles.Fdiv}> 
                        <label id={styles.lbl1}>FirstName:</label>
                        <Field type="text" placeholder="enter username" name="firstName" onChange={handleChange} /><br /> <br />
                        <ErrorMessage  name="firstName" Component="div" className="Invalid_data"  ></ErrorMessage>
                        
                        <label id={styles.lbl2}>LastName:</label>
                        <Field type="text" placeholder="enter password" name="lastName" onChange={handleChange} /><br /> <br />
                        <ErrorMessage name="lastName" Component="div" className="Invalid_data"  ></ErrorMessage>

                        <PhoneInput id="Contac_number"
                         name="contact"
                         country={"in"} 
                         onChange={(e)=>{setFieldValue('contact',e)}}/>
                         <ErrorMessage name="contact" Component="div" className="Invalid_data"  ></ErrorMessage>

                        <input type="submit" value="Add" disabled={!dirty} id={styles.btn}/>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}