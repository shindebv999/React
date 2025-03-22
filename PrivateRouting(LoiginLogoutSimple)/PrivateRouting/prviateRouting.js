import React from "react";
import { Outlet } from "react-router-dom";
import Login from "./login";

export default function PrivateRouter (  ) {

    return (
        <>
            {localStorage.getItem( 'IN' ) == 'true' ? <Outlet></Outlet> : <Login />}
        </>
    )
}