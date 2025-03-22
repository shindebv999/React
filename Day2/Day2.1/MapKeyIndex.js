import React from "react";


class MapkeyIndex extends React.Component
{
    
        constructor(){
            super();
            this.state={
                Student:["Bhagyashri","Shrutika","Sweta","Riya","Siya","Snehal"]
          }
        }
        render(){

        return(
            
                <ul>
                    {
                    this.state.Student.map(
                    (item,index)=>{
                        return <li key={index}>{item}</li>
                    }
                    )
                }
                    
                 </ul>
                
                
            
        )
    }
}
 
export default MapkeyIndex;