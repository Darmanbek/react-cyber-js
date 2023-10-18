import React from "react";
import { Button, Form, Input } from "antd";
import api from "../../api";
import "./login.scss";



const Login = ({ setIsAdmin, setIsUser }) => {

    const loginUser = async (username, password) => {
        try {
            const responce = await api.get(`users?login=${username}&?password=${password}`);
            if(responce.status === 200){
                return responce.data;
            }
        } catch (error) {
            return error.message;
        }
    }

    const onFinish = async (values) => {
        
       
        const login = values["login"]
        const password = values["password"]
    
        const data = await loginUser(login, password)
        if (data && data.length > 0) {
            if (data[0]["isadmin"] && !data[0]["isuser"]) {
                setIsAdmin(true)
                setIsUser(false)
            } 
            if (!data[0]["isadmin"] && data[0]["isuser"]) {
                setIsAdmin(false)
                setIsUser(true)
            } 
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="login-block">
            <div className="login-inner">
                <h1>Авторизация</h1>
                <Form
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 19,
                    }}
                    className="login-form"
                    name="loginForm"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        className="form-item-login"
                        label="Логин"
                        name="login"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста, введите ваш логин!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        className="form-item-password"
                        label="Пароль"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста, введите ваш пароль!",
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item 
                    className="form-item-submit"
                    >
                        <Button type="primary" htmlType="submit" size="large">
                            Войти
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
