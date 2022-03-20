import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
    }, [])

    const handleChange = (type, value) => {
        switch (type) {
            case 'username':
                console.log("username")
                setUsername(value)
                break;
            case 'password':
                console.log("password")
                setPassword(value)
                break;
            default:
                break;
        }
    }

    const handleFormSubmit = () => {
        var axios = require('axios');
        var qs = require('qs');
        var data = qs.stringify({
            'username': username,
            'password': password
        });
        var config = {
            method: 'post',
            url: '/api/login',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };

        axios(config)
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    console.log(res.data);
                    localStorage.setItem("access_token", res.data.access_token)
                    alert("Thanh cong")
                    return;
                }
                throw Error(res.status);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleLoadUsers = () => {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: '/api/users',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            }
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleLogout = () => {
        localStorage.removeItem("access_token")
        alert("Logged out")
    }

    return (
        <div>
            <div>
                <label>UserName:</label>
                <input
                    type="text"
                    name="username"
                    onChange={(input) => handleChange('username', input.target.value)}
                />
            </div>
            <br />
            <div>
                <label>Password:</label>
                <input
                    type="text"
                    name="password"
                    onChange={(input) => handleChange('password', input.target.value)}
                />
            </div>
            <div>
                <button
                    type="button"
                    onClick={() => handleFormSubmit()}
                >
                    LOGIN
                </button>
            </div>
            <div>
                <button
                    type="button"
                    onClick={() => handleLogout()}
                >
                    LOGOUT
                </button>
            </div>
            <div>
                <button
                    type="button"
                    onClick={() => handleLoadUsers()}
                >
                    Get users
                </button>
            </div>
        </div>
    )
}
