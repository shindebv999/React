import React from "react";


class Name extends React.Component
{
    
        constructor(){
            super();
            this.state={
                name:"Bhagyashri "
            }
        }
        render(){

        return(
            <>
                <strong style={{backgroundColor:"violet",color:"yellow"}}><em>Welcome.....!{this.state.name}</em></strong>
            </>
        )
    }
}

export default Name ;