import React from "react";


class Emp_details extends React.Component
{
    
        constructor(){
            super();
            this.state={
                firstName:"Bhagyashri ",
                lastName:"Shinde",
                Job_Title:"S/w Developer"
            }
        }
        render(){

        return(
            <>
                <strong>{this.state.firstName}<br></br></strong>
                <strong>{this.state.lastName}<br></br></strong>
                <strong>{this.state.Job_Title}<br></br></strong>
            </>
        )
    }
}

export default Emp_details ;