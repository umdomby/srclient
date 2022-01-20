import React, {useContext, useEffect, useRef, useState} from 'react';
import {observer} from "mobx-react";
import {Context} from "../index";
import {Col, Row} from "antd";
import NavBarLeft from "../components/NavBarLeft";



const Option3 = observer(() => {
    const {device} = useContext(Context)

    return (
        <div>
            Option 3
        </div>
    );
});

export default Option3;
