import React from "react";

export default class PropsMultipleComp extends React.Component{
render()
{
    return(
        <>
        
        
        <h6>Hello   {this.props.msg}</h6>
        </>
    )
}
}