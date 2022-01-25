import React, {useContext, useState} from 'react';
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, NAVIGATION_ONE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, Card, Form, Input, Row} from "antd";

const Auth = observer(() => {

    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(NAVIGATION_ONE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div className="site-card-border-less-wrapper">
            <Card title={isLogin ? 'Авторизация' : "Регистрация"} bordered={false} style={{ width: '350px' }}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    >
                        <Input placeholder="email"/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    >
                        <Input.Password placeholder="password"/>
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                        onClick={click}
                    >
                        <Button type="primary" htmlType="submit">
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>

            // <Card style={{width: 600}} className="p-5">
            //     <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
            //     <Form className="d-flex flex-column">
            //         <Form.Control
            //             className="mt-3"
            //             placeholder="Введите ваш email..."
            //             value={email}
            //             onChange={e => setEmail(e.target.value)}
            //         />
            //         <Form.Control
            //             className="mt-3"
            //             placeholder="Введите ваш пароль..."
            //             value={password}
            //             onChange={e => setPassword(e.target.value)}
            //             type="password"
            //         />
            //         <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            //             {isLogin ?
            //                 <div>
            //                     Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
            //                 </div>
            //                 :
            //                 <div>
            //                     Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
            //                 </div>
            //             }
            //             <Button
            //                 variant={"outline-success"}
            //                 onClick={click}
            //             >
            //                 {isLogin ? 'Войти' : 'Регистрация'}
            //             </Button>
            //         </Row>
            //
            //     </Form>
            // </Card>

    );
});

export default Auth;
