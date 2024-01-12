import styles from "./Login.module.css";

import {useNavigate} from "react-router-dom"

function Login({setUser}) {
    const navigate = useNavigate();
    const onLogin = (event) => {
        event.preventDefault();
        console.log(JSON.stringify({
            email: event.target[0].value,
            password: event.target[1].value
        }));
        fetch("http://jinichat.kr/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: event.target[0].value,
                password: event.target[1].value
            }),
            withCredentials: true,
            credentials: 'include'
        }).then((response) => response.json()).then((data) => {
            setUser(data);
            navigate("/");
            })
    }

    return (
        <div className={styles.container}>
            <form className={styles.loginForm} onSubmit={onLogin}>
                <h1>Login</h1>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Login;