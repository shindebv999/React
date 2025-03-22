import React from 'react';
import LifeCycleUsingProps from './LifeCycleUsingProps';
class Lifecycle2 extends React.Component
{

    constructor()
    {
        super();
       this.state={
        Count:0
       }
       this.increase=this.increase.bind(this);
    }
    componentWillMount()
    {
        console.log("componentWillMount");

    }
   componentDidMount(){
    console.log('componentDidMount');
   }
    increase=()=>{
        
        this.setState(
            {
                Count:this.state.Count+ 1
            }
        );
    }

render()
{
    return(
        <>
        <h1>Conter is incremented  <br></br> {this.state.Count}</h1>
        <LifeCycleUsingProps increase={this.increase}/>
      {console.log('render')}
      
      
        
        </>
    )

      

}
 
}
export default Lifecycle2;