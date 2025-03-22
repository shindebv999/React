import React from "react";
import PropsArrayCall from "./PropasArrayCall";
class  PropsArrayDisplay extends React.Component
{
   
    constructor(){
        super();
        this.state = {       
            Student:["komal","pratiksha","Shrutika","Sanika","Chitrika"]
        }
      }
    
    render()
    {
        return(
            <>
           <h1>Hello</h1>
               <PropsArrayCall  Student={this.state.Student} /> 
           </>
        )
    }
}
 export default PropsArrayDisplay ;