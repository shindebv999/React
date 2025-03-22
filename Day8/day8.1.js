
import { Form, Formik ,Field} from "formik";
import React from "react";
import * as Yup from "yup";
import styles from './form.module.css';
export default function LoginForm () {

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
                {( { handleChange,errors } ) => (
                    <Form>
                        
                        <div id={styles.Fdiv}> 
                        <label id={styles.lbl1}>FirstName:</label>
                        <Field type="text" placeholder="enter username" name="firstName" onChange={handleChange} /><br /> <br />
                        <span  style={{color:'red'}}>{errors.firstName}</span>
                        
                        <label id={styles.lbl2}>LastName:</label>
                        <Field type="text" placeholder="enter password" name="lastName" onChange={handleChange} /><br /> <br />
                        <span  style={{color:'red'}}>{errors.firstName}</span>
                       
                        <input type="submit" value="Add" id={styles.btn}/>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}