import React from "react";

export default function Menu () {
    const logout = () => {
        localStorage.setItem( "IN", 'false' );
    }
    return (
        <>
            <a href="/private/home">Home</a> | <a href="/private/news">News</a> | <a href="/sports">Sports</a> |<button onClick={logout}>Logout</button>
            <br /><br />
        </>
    )
}