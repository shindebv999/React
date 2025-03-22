import React from "react";

export default class PropsArrayofObjectCall extends React.Component{
render()
{
    return(
        <>
        <h1> This is Array call From Props</h1>
                <table>
                    <thead>
                   <tr>
                   <th>ID</th>
                    <th>Name</th>
                    <th>LastName</th>
                   </tr>
                   </thead>
                   <tbody >
                    {
                    this.props.Student.map(
                    (item,index)=>{

                        return( 
                        <>
                        <tr  key={index}>
                            <td > {item.id} </td>
                            <td > {item.Name}</td>
                            <td > {item.LastName}</td>

                         </tr>
                             </>
                        )
                       
                    }
                    )
                }
                 </tbody>
                  
                </table>
                
        </>
    )
}
}