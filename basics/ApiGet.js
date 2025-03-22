import React,{useState,useEffect} from "react";
import axios from "axios";
export default function ApiGet(){
    const[data, setData]=useState(null);
    const[loading,setLoading]=useState(false);

    useEffect(()=>{
        axios.get('https://dummyjson.com/users/3',data)
        .then(res=>{
            console.log(res.data);
            setData(res.data)
        }).catch(err=>{
            console.log("error" ,err);
        }).finally(()=>{
            setLoading(false);
        })
    },[]);

    return(
        <>
        <div>
        {loading?(<p>loading...</p>):data?(
        <table border="1">
             <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Username</th>
                            <th>Password</th>
                        </tr>
                    </thead>
         <tbody>
            <tr>
            
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.gender}</td>
                        <td>{data.username}</td>
                        <td>{data.password}</td>
                
            </tr>
         </tbody>

        </table>
        ):(<p> not available data...</p>
    )}

        </div>
        </>
    );
}