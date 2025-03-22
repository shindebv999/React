import React from "react";


class Object extends React.Component
{
    
        constructor(){
            super();
            this.state={
                Student:{
                firstName:"Bhagyashri ",
                lastName:"Shinde",
                Job_Title:"S/w Developer"
            }
          }
        }
        render(){

        return(
            <>
                <strong> Hey...!{this.state.Student.firstName}  {this.state.Student.lastName}  {this.state.Student.Job_Title}</strong>
                
               
            </>
        )
    }
}

export default Object ;