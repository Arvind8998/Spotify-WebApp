import React from 'react'
import './login.css'
import { loginUrl } from './spotify'

export default function Login() {
    return (
        <div className="login">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"/>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}
