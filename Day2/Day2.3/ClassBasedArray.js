import React from "react";


class Array extends React.Component
{
    
        constructor(){
            super();
            this.state={
                Student:["komal","pratiksha","Shrutika"]
          }
        }
        render(){

        return(
            <>
                <ul>
                    <li>{this.state.Student[0]} </li>
                    <li>{this.state.Student[1]} </li>
                    <li>{this.state.Student[2]} </li>

                    
                 </ul>
                
               
            </>
        )
    }
}

export default Array ;