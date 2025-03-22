import React from 'react';

class Lifecycle extends React.Component
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
      {console.log('render')}
      <h1>Conter is incremented  <br></br> {this.state.Count}</h1>
        <button onClick={this.increase}>incremente counter</button>
        
        </>
    )

      

}
 
}
export default Lifecycle;