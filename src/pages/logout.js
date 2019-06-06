import React from "react"
import { logout } from "../utils/auth";

const JWLogout = () => {

    logout()
    
    return(
        <p>logout</p>
    )

}

export default JWLogout