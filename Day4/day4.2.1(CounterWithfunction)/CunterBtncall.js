import React from "react";

export default class CountrBtnCall extends React.Component
{
    constructor()
    {
        super();
        this.CheckFun = this.CheckFun.bind( this );
    }
    CheckFun()
    {
        this.props.myFunc();
    }
    render(){
        return(
            <>
            <button onClick={this.CheckFun}>Increment counter</button>
            </>
        )
    }
    
}