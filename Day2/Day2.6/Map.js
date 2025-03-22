import React from "react";


class Map extends React.Component
{
    
        constructor(){
            super();
            this.state={
                Student:["Bhagyashri","Snehal","Shrutika"]
          }
        }
        render(){

        return(
            
                <ul>
                    {
                    this.state.Student.map(
                    function(item){
                        return <li>{item}</li>
                    }
                    )
                }
                    
                 </ul>
                
                
            
        )
    }
}
 
export default Map;