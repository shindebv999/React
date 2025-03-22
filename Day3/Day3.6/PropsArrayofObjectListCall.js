import React from "react";

export default class PropsArrayofObjectListCall extends React.Component{
render()
{
    return(
        <>
        <h3> This is Array call From Props</h3>
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