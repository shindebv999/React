import React from 'react';
import MyObjCall from './ObjPropsCallFun';
export default function MyObj(){
    const [myobject]=React.useState({emp_name:'Sndhya', job_Profile:'S/W Developer',age:21});
    return(
       <>
      <h1> This is Parent function</h1>
      <MyObjCall MyObj={myobject} />
       </>
    )
}