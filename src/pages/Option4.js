import React, {useContext, useEffect, useRef, useState} from 'react';
import {observer} from "mobx-react";
import {Context} from "../index";
import {Button, Col, Row} from "antd";
import NavBarLeft from "../components/NavBarLeft";
import {
    UpDown,
    Stop,
    LeftRight,
    DegreeGoBack,
    DegreeLeftRight,
    daleyCommand,
    accelF, langF
} from '../Control/controlVoceButton'
import WebSocketProject from "../components/WebSocketProject";


const Option4 = observer(() => {
    const {device} = useContext(Context)

    const timerControlUp = useRef(null)
    const timerControlDown = useRef(null);
    const timerControlLeft = useRef(null);
    const timerControlRight = useRef(null);



    const controlUp = () => {
        timerControlUp.current = setTimeout(() => {
            UpDown(device.webSocket, -1 + device.degreegoback/10, device.accel)
        }, device.delaycommand * 1000);
    }
    const controlDown = () => {
        timerControlDown.current = setTimeout(() => {
            UpDown(device.webSocket, 1 - device.degreegoback/10, device.accel)
        }, device.delaycommand * 1000);
    }
    const controlLeft = () => {
        timerControlLeft.current = setTimeout(() => {
            LeftRight(device.webSocket, -1 + device.degreeleftright/10, device.accel)
            //LeftRight(device.webSocket, -1 + device.speedLR/10, device.accel)
        }, device.delaycommand * 1000);
    }
    const controlRight = () => {
        timerControlRight.current = setTimeout(() => {
            LeftRight(device.webSocket, 1 - device.degreeleftright/10, device.accel)
            //LeftRight(device.webSocket, 1 - device.speedLR/10, device.accel)
        }, device.delaycommand * 1000);
    }
    const controlStop = () => {
        clearTimeout(timerControlUp.current)
        clearTimeout(timerControlDown.current)
        clearTimeout(timerControlLeft.current)
        clearTimeout(timerControlRight.current)
        Stop(device.webSocket, 1)
    }


    return (
        <div>
            <WebSocketProject/>
            Control servo
            <div style={{marginTop: '10px'}}>
                <Button onClick={controlUp}>GO</Button>
                <Button onClick={controlDown}>BACK</Button>
                <Button onClick={controlLeft}>LEFT</Button>
                <Button onClick={controlRight}>RIGHT</Button>
                <Button onClick={controlStop}>STOP</Button>
            </div>

        </div>
    );
});

export default Option4;
