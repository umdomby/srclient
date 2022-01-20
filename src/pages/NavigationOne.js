import React, {useContext, useEffect, useRef, useState} from 'react';
import {observer} from "mobx-react";
import {Context} from "../index";
import NavBarLeft from "../components/NavBarLeft";
import {Col, Row} from "antd";



const NavigationOne = observer(() => {
    const {device} = useContext(Context)

    return (
        <div>
            Navigation 1
        </div>
    );
});

export default NavigationOne;
