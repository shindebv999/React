import React from "react";

export default class LifeCycleUsingProps extends React.Component
{
    render()
    {
        return(
            <>
             <button onClick={this.props.increase}>incremente counter</button>
            </>
        )
    }
}