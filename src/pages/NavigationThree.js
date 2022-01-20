import React, {useContext, useEffect, useRef, useState} from 'react';
import {observer} from "mobx-react";
import {Context} from "../index";
import NavBarLeft from "../components/NavBarLeft";
import {Col, Row} from "antd";



const NavigationThree = observer(() => {
    const {device} = useContext(Context)

    return (
        <div>
            Navigation 3
        </div>
    );
});

export default NavigationThree;
