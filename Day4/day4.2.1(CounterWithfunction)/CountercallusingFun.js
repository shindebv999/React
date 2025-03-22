import React from "react";
import CountrBtnCall from "./CunterBtncall";
class CounterCallUsingFun extends React.Component
{
    constructor()
    {
        super();
        this.state=
        {
            counter:0
        }
        this.increment=this.increment.bind(this);
      
    }
      
    increment(){
        this.setState({
        counter:this.state.counter+1
        })
       }
    render()
    {
        return(
            <>
            <h3>Counter is increment::{this.state.counter}</h3>
            <CountrBtnCall myFunc={this.increment} />
            </>
        )
    }
}
export default CounterCallUsingFun;