import React from "react";
export default function Login () {
    const login = () => {
        //call API and check auth
        localStorage.setItem( 'IN', 'true' );
    }
    const logout = () => {
        localStorage.setItem( "IN", 'false' );
    }
    return (
        <>
            <button onClick={login}>Log IN</button>
            <button onClick={logout}>Log out</button>
        </>
    )
}