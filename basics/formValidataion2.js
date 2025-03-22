import React  from "react";

  export default function Formvalidation2(){
const[username,setUserName]=React.useState("");
const[password,setPassword]=React.useState("");
const[usernameError,setUserNameError]=React.useState("");
const[passwordError,setPasswordError]=React.useState("");

const handleSubmit=(e)=>{
    e.preventDefault();
    let valid =true;

    if(username.trim()===""){
        setUserNameError("can't empty username");
        return false;
    }else{
        setUserNameError("");
    }

    if(password.trim()===""){
        setPasswordError("can't empty password");
        return false;
    }
    else{
        setPasswordError("");
    }
    if(valid){
        console.log(username   , password);
        setUserName("");
        setPassword("");

    }
};

return(
    <>
    <form method="#" onSubmit={handleSubmit} >
         <label>UserName</label><br/>
        <input type="text" name="username" id="username"value={username} onChange={(e)=>setUserName(e.target.value)}/><br/>
        <span style={{color:"red"}}>{usernameError}</span><br/>

        <label>Password</label><br/>
        <input type="passord" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
        <span style={{color:"red"}}>{passwordError}</span><br/>
      
        <input type="submit" value="Login"/>

        </form>
    </>
);
}