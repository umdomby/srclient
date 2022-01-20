import React, {useContext, useEffect, useRef, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'

import {Button, Col, PageHeader, Row} from 'antd';
import {ADMIN_ROUTE, LOGIN_ROUTE, NAVIGATION_ONE} from "../utils/consts";


const Header = observer(() => {

    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (

        <Row>
            <Col span={6} order={1}>
                <PageHeader
                    className="site-page-header"
                    onBack={() => history.push(NAVIGATION_ONE)}
                    title="ServiceRobot"
                    // subTitle="Create project prototype"
                />
            </Col>
            <Col span={6} order={2} style={{marginTop: '22px'}} >

            </Col>
            <Col span={6} order={3} style={{marginTop: '22px'}} >

            </Col>
            <Col span={6} order={4} >
                {user.isAuth ?
                    <div style={{color: 'white', marginTop: '15px'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Выйти
                        </Button>
                    </div>
                    :
                    <div style={{color: 'white', marginTop: '15px'}} >
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </div>
                }
            </Col>
        </Row>




    );

})

export default Header;
