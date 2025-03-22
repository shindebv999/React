import React from "react";

export default class PropsArrayCall extends React.Component
{
   render()
   {
    return(
        <>
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