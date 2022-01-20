import React, {useContext, useEffect, useRef, useState} from 'react';
import {observer} from "mobx-react";
import {Context} from "../index";
import NavBarLeft from "../components/NavBarLeft";
import { Row, Col } from 'antd';


const NavigationFour = observer(() => {

    const {device, userdata, user} = useContext(Context)

    return (
        <div>
            Navigation 4
        </div>
    );
});

export default NavigationFour;
