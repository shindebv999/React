import React from "react";


class Mapkey extends React.Component
{
    
        constructor(){
            super();
            this.state={
                Student:["Bhagyashri","Snehal","Shrutika","Sweta","Riya","Siya"]
          }
        }
        render(){

        return(
            
                <ul>
                    {
                    this.state.Student.map(
                    (item)=>{
                        return <li key={item}>{item}</li>
                    }
                    )
                }
                    
                 </ul>
                
                
            
        )
    }
}
 
export default Mapkey;