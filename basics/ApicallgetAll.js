import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ApiCallGetAll(){
 const[data,setData]=useState([]);
 const[loading,setLoading]=useState(false);

  useEffect(()=>{
  axios.get('https://dummyjson.com/users',data)
  .then(res=>{
    console.log(res.data.users);
    setData(res.data.users);
  }).catch(err=>{
    console.log("error" ,err);
  }).finally(()=>{
  setLoading(false);
  })
 },[]);

return(
    <>
    <div>
     {loading?(<p>loading..</p>):(
        <table>
            <thead>
                <tr>
                    <td>firstName</td>
                    <td>lastName</td>
                    <td>gender</td>
                    <td>username</td>
                    <td>password</td>
                </tr>
            </thead>
            <tbody>
                {data.length>0?data.map((user,index)=>(
                    <tr key={index}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.gender}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                    </tr>
                    )):(
                    <tr>
                        <td>data is not available...</td>
                    </tr>
                    )}
            </tbody>
        </table>
     )}
    </div>
    </>
)
}

 