import React from 'react';

export default class SetState extends React.Component
{
    constructor()
    {
        super();
        this.state={
            firstName:'Bhagyashri'
        }
        this.changeName=this.changeName.bind(this)
        changeName()
        {
            console.log('Change Name Function');
            //this.state.firstName='Riya';
            this.setState({
                firstName:'Riya'
            })
        }
        console.log(this.state.firstName)
    }
    render(){
        return(
            <>
            <h1>Hello..{this.changeName}!</h1>
            <button  onClick={this.changeName}>Change</button>
            </>
        )
    }
}
