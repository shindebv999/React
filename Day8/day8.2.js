
import { Form, Formik ,Field, ErrorMessage} from "formik";
import React from "react";
import * as Yup from "yup";
import styles from './form.module.css';
export default function RegisterForm () {

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
                        
                        <div id={styles.Fdiv}> 
                        <label id={styles.lbl1}>FirstName:</label>
                        <Field type="text" placeholder="enter username" name="firstName" onChange={handleChange} /><br /> <br />
                        <ErrorMessage  name="firstName" Component="div" className="Invalid_data"  ></ErrorMessage>
                        
                        <label id={styles.lbl2}>LastName:</label>
                        <Field type="text" placeholder="enter password" name="lastName" onChange={handleChange} /><br /> <br />
                        <ErrorMessage name="lastName" Component="div" className="Invalid_data"  ></ErrorMessage>
                       
                        <input type="submit" value="Add" id={styles.btn}/>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}