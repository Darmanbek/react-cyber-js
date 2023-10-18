import React from 'react';
import { Login } from "../../components";

const LoginPage = ({ setIsAdmin, setIsUser }) => {
    return (
        <section className="secion-login">
            <div className="container">
                <div className="login-inner">
                    <Login setIsAdmin={setIsAdmin} setIsUser={setIsUser} />
                </div>
            </div>
        </section>
    )
}

export default LoginPage;

