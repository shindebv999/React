import React, { useEffect, useState } from "react";
import axios from "axios";
export default function ApiGetAll(){
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(false);

    useEffect(()=>{
         axios.get('https://dummyjson.com/users',data)
         .then(res=>{
            console.log(res.data.users); 
            setData(res.data.users);
         }).catch(err=>{
            console.log(err);
            
         }).finally(()=>{
            setLoading(false);
         })

    },[]);


    return(
        <>
       <div>
        {loading?(<p>loading....</p>):(
            <table>
                <thead>
                    <tr>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>gender</th>
                        <th>username</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length>0?data.map((user,index)=>(
                        <tr key={index}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.gender}</td>
                            <td>{user.username}</td>
                            <td>{user.Password}</td>
                            
                        </tr>
                        )):(
                        <tr>
                            <td>not available data....</td>
                        </tr>
                    )}
                </tbody>
            </table>
            )}
       </div>
        </>
    )
}