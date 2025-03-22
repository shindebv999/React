import React from "react";
import PropsArrayCall from "./PropsArrayCall";

class PropsArrDisplay extends React.Component
{
    
        constructor(){
            super();
            this.state={
                Student:["Sachin","Vijay","Rutik","Abhishek","Siya","Snehal"]
          }
        }
        render(){

        return(
            <PropsArrayCall Student={this.state.Student}/>
             
                
                
            
        )
    }
}
 
export default PropsArrDisplay;