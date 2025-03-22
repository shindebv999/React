import React from "react";

export default class PropsArrayCall extends React.Component{
render()
{
    return (
        <>
        <h1> This is Array call From Props</h1>
              
        <ul>
                    {
                    this.props.Student.map(
                    (item,index)=>{
                        return <li key={index}>{item}</li>
                    }
                    )
                }
                    
                 </ul>
        </>
    )
}
}