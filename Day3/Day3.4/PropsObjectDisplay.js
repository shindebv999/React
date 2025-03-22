import React from "react";
import PropsObjectCall from "./PropsObjectCalll";
class  PropsObjectDisplay extends React.Component
{
   
    constructor(){
        super();
        this.state={
            Student:{
            firstName:"Riya ",
            lastName:"sharma",
            Job_Title:"S/w Developer"
        }
      }
    }
    render()
    {
        return(
            <>
            <h1>this is  Display Propsmsg   Object</h1>
            <PropsObjectCall msg={this.state.Student.firstName} />
            <PropsObjectCall msg={this.state.Student.lastName} />
            <PropsObjectCall msg={this.state.Student.Job_Title} />
           
            
           
            </>
        )
    }
}
 export default PropsObjectDisplay ;
