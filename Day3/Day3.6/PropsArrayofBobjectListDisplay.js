import React from "react";
import PropsArrayofObjectListCall from "./PropsArrayofObjectListCall";
import ArrayToList from "./ArrayToList";
class  PropsArrayofBobjectListDisplay extends React.Component
{
   
    constructor(){
        super();
      
        this.state={
            Student:[
                {
                    id:101,
                    Name:"riya",
                    LastName:"Shinde"

                },
                {
                    id:102,
                    Name:"gita",
                    LastName:"Sharma"

                }
                , {
                    id:103,
                    Name:"siya",
                    LastName:"Shinde"

                }
            ]
        }
       }

 
    render()
    {
        return(
            <>

               <PropsArrayofObjectListCall  Student={this.state.Student} /> 
               <ArrayToList  Girls={this.state.Girls} /> 

           </>
        )
    }
}
 export default PropsArrayofBobjectListDisplay ;