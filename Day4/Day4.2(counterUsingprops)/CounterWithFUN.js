//usng props
import React from 'react';
import CounterChild from './CounterChild';
class CounterWithFUN extends React.Component
{

    constructor()
    {
        super();
       this.state={
        Count:0
       }
       this.increase=this.increase.bind(this);
    }
  
    increase(){

        this.setState(
            {
                Count:this.state.Count+1
            }
        );
    }

render()
{
    return(
        <>
        <h1> {this.state.Count}</h1>
        <CounterChild increase= {this.increase}/>
        {/* don't call function like {this.increase()}  beacause function is call when pade is load(automatically work) */}
        
        </>
    )

      

}
 
}
export default CounterWithFUN;

