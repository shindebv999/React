import React  from "react";
import ChildClassObjArr from "./childClassArrObj";


export default function ClassObjArr (){

const[student]=React.useState(
    [
        {
            id:101,
            Name:"riya",
            LastName:"Shinde"

        },
        {
            id:102,
            Name:"gita",
            LastName:"Sharma"

        }
        , {
            id:103,
            Name:"siya",
            LastName:"Shinde"

        }
    ]
)
     const [ firstName, setFirstName ] = React.useState( 'Pranali' );

     const change=()=>{
        setFirstName("sona");
     }
    const [myArr]=React.useState(["riya","siya","Sndhya","Aarti","Priynka"]);
    const [myobject]=React.useState({
        emp_name:'Sndhya',
        job_Profile:'S/W Developer',
        age:21
       }
      
   );
   return(
      <>
      <p>{firstName}</p>
       <button onClick={change}>ChangeName</button>
      <h1>Employee Details....</h1>
      <h5>{myobject.emp_name}</h5>
      <h5>{myobject.job_Profile}</h5>
      <h5>{myobject.age}</h5>
       {
        myArr.map((item,index)=>{
            return <li key={index}>{item}</li>
        })
       }

      <ChildClassObjArr myArr={myArr}  myobj={myobject} student={student}/>


      </>
   )
}