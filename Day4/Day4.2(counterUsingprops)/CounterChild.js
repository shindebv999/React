import React from 'react';
export default class CounterChild extends React.Component
{
     render()
    {
        return(
            <>
             <button onClick={this.props.increase}>Counter here</button>
            </>
        )
    
          
  
    }
}