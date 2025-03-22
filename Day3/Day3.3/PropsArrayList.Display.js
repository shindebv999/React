import React from "react";
import PropsArrayofObjectCall from "./PropsArrayofObjectCall";
class  PropsArrayofobjectDisplay extends React.Component
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

               <PropsArrayofObjectCall  Student={this.state.Student} /> 
              
           </>
        )
    }
}
 export default PropsArrayofobjectDisplay ;