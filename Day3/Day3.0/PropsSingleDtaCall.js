import React from "react";

export default class PropMSG extends React.Component{
render()
{
    return(
        <>
        <h5>Display Component using Props</h5>
        <hr></hr>
        <h6>Hello{this.props.msg}</h6>
        </>
    )
}
}