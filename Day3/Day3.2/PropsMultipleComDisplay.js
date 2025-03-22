import React from "react";
import PropsMultipleComp from "./PrpopsMultipleComp";
class  PropsMultipleComDisplay extends React.Component
{
    constructor()
    {
        super();
        this.state={
            Gretting_Msg:"Good Morning..! ",
            Name:"Bhagyashri",
            Msg:"Have Great Day.....!!!"

        }
    }
    render()
    {
        return(
            <>
            <h1>this is  Display Propsmsg Multiple  Component</h1>
            <PropsMultipleComp msg={this.state.Gretting_Msg} />
            <PropsMultipleComp msg={this.state.Name} />
            <PropsMultipleComp msg={this.state.Msg} />
            
           
            </>
        )
    }
}
 export default PropsMultipleComDisplay ;
