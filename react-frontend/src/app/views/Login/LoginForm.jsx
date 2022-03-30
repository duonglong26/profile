import React, { useEffect, useState } from 'react'
import { login } from './LoginService';
import { toast } from 'react-toastify';
import styles from './_login.module.scss';
import clsx from 'clsx';

toast.configure({
    autoClose: 3000,
    draggable: false,
    limit: 3,
    style: {
        fontSize: '1.5rem'
    }
});

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
        let qs = require('qs');
        let data = qs.stringify({
            'username': username,
            'password': password
        });
        login(data).then((res) => {
            console.log(res);
            if (res?.data) {
                console.log(res.data);
                localStorage.setItem("access_token", res.data.access_token)
                toast.success("Loggin sucess");
                return;
            }
            throw Error(res.status);
        }).catch(function (error) {
            toast.warning("Username or password wrong");
        });
    }

    // const handleLoadUsers = () => {
    //     let axios = require('axios');

    //     let config = {
    //         method: 'get',
    //         url: '/api/users',
    //         headers: {
    //             'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    //         }
    //     };

    //     axios(config)
    //         .then(function (response) {
    //             console.log(JSON.stringify(response.data));
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    const handleLogout = () => {
        localStorage.removeItem("access_token")
        toast.success("Logged out");
    }

    return (
        <div className={styles.login}>
            <div className={styles.form}>
                <h2>FORM LOGIN</h2>
                <div className={styles.username}>
                    <input
                        type="text"
                        name="username"
                        onChange={(input) => handleChange('username', input.target.value)}
                        placeholder={"Username"}
                    />
                </div>
                <div className={styles.password}>
                    <input
                        type="password"
                        name="password"
                        onChange={(input) => handleChange('password', input.target.value)}
                        placeholder={"Password"}
                    />
                </div>
                <div className={styles.submit}>
                    <button
                        className={styles.btn}
                        type="button"
                        onClick={() => handleFormSubmit()}
                    >
                        LOGIN
                    </button>
                    <button
                        className={clsx(styles.btn, styles.logout)}
                        type="button"
                        onClick={() => handleLogout()}
                    >
                        LOGOUT
                    </button>
                </div>
            </div>
        </div>
    )
}
