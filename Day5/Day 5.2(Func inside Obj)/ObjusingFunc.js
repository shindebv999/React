import React from 'react';

export default function MyObj(){
    const [myobject]=React.useState({
         emp_name:'Sndhya',
         job_Profile:'S/W Developer',
         age:21
        }
    );
    return(
       <>
       <h1>Employee Details....</h1>
       <h5>{myobject.emp_name}</h5>
       <h5>{myobject.job_Profile}</h5>
       <h5>{myobject.age}</h5>
       </>
    )
}