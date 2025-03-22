import React from "react";
import PropMSG from "./PropsSingleDtaCall";
class  Propsmessages extends React.Component
{
    constructor()
    {
        super();
        this.state={
            Gretting_Msg:"Good Morning..! Have Great Day.....!!!"
        }
    }
    render()
    {
        return(
            <>
            <h3>this is  Display Propsmsg Component</h3>
              <PropMSG msg={this.state.Gretting_Msg} />
            
            </>
        )
    }
}
 export default Propsmessages ;