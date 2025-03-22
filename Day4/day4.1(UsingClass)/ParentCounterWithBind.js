import React from 'react';
class ParentCounter extends React.Component
{
    constructor()
        {
            super();
           this.state={
            Count:0
           }
           this.increase=this.increase.bind(this)
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
            <h1>Conter is incremented  <br></br> {this.state.Count}</h1>
            <button onClick={this.increase}>Counter here</button>
            </>
        )
    
          
  
    }
}
export default ParentCounter;