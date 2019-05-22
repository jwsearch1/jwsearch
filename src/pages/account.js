import React from 'react'
import { Router } from '@reach/router'
import { login } from '../utils/auth.js'

const Home = () => <p>home</p>
const Settings = () => <p>Settings</p>

const Account = () =>{

    login()

    return(
    <div>
        <p>Let's make this account page protectied.</p>
        <Router>
        <Settings path="/account/settings" />
        <Home path="/account" />
        </Router>
    </div>
    )
}


export default Account