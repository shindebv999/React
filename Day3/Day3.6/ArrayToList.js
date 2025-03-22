import React from "react";


export default class ArrayToList extends React.Component
{
   constructor(){
       super();
     
   this.state={
       Girls:["Bhagyashri","Shrutika","Sweta","Riya","Siya","Snehal"]
 }
}
render()
{
    return(
        <>
         <h3> This is list call From Props</h3>
         <ul>
               {
                    this.state.Girls.map(
                    (list,index)=>{
                    return <li key={index}>{list}</li>
                    }
                  )
                }
                    
                 </ul>
        </>
    )

 
}
}
