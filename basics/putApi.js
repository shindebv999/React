import React, {useState,useEffect} from "react";
import axios from "axios";

export default function putApi(){
     const[data,setData]=useState({
        firstName:'',
        lastName:'',
        gender:'',
        username:'',
        password:'',
     });
     const[loading, setLoading]=useState(true);
     const[message,setMessage]=useState("");

     useEffect(()=>{
        axios.get("https://dummyjson.com/users/1",data)
        .then(res=>{
            console.log(res.data);
            setData(res.data)
        }).catch(err=>{
            console.error("error",err)
        }).finally(()=>{
            setLoading(false);
        })
     },[]);

    return(
        <>
        <div>

        </div>
        </>
    )
}

