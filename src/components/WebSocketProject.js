import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";


const WebSocketProject = () => {

    const {device, user} = useContext(Context)
    const [messagesUpDown, setMessagesUpDown] = useState('');
    const [messagesLeftRight, setMessagesLeftRight] = useState('');
    const [messagesMongo, setMessagesMongo] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState([]);

    useEffect(()=>{
        if (device.webSocket.readyState === device.webSocket.CLOSED || device.webSocket.readyState === device.webSocket.CLOSING) {
            wsConnect(user.user)
            setInterval(() => socketTest(user.user), 5000)
            //setTimeout(()=>{
                console.log("11111111111111111 "+ user.user)
            //},3000)
        }
    },[])

    const wsConnect = (username) => {
        try {
            device.setWebSocket(new WebSocket(process.env.REACT_APP_API_URL_WS))
            device.webSocket.onopen = () => {
                device.webSocket.send(JSON.stringify({
                    username: username,
                    method: "connection",
                }))
            }
            device.webSocket.onmessage = (event) => {
                var s = event.data.replace(/\\n/g, "\\n")
                    .replace(/\\'/g, "\\'")
                    .replace(/\\"/g, '\\"')
                    .replace(/\\&/g, "\\&")
                    .replace(/\\r/g, "\\r")
                    .replace(/\\t/g, "\\t")
                    .replace(/\\b/g, "\\b")
                    .replace(/\\f/g, "\\f");
                // remove non-printable and other non-valid JSON chars
                s = s.replace(/[\u0000-\u0019]+/g,"");
                let msg = JSON.parse(s)

                if(device.webSocket.readyState !== device.webSocket.CLOSED && device.webSocket.readyState !== device.webSocket.CLOSING) {
                    switch (msg.method) {
                        case "connection":
                            console.log(`пользователь ${msg.username} присоединился`)
                            console.log(msg.txt)
                            device.setDegreegoback(msg.degreegoback)
                            device.setDegreeleftright(msg.degreeleftright)
                            device.setDelaycommand(msg.delaycommand)
                            device.setAccel(msg.accel)
                            device.setLang(msg.languages)
                            console.log("device.degreegoback: " + device.degreegoback)
                            console.log("device.degreeleftright: " + device.degreeleftright)
                            console.log("device.delaycommand: " + device.delaycommand)
                            console.log("device.accel: " + device.accel)
                            console.log("device.languages: " + device.lang)
                            break
                        case "online":
                            console.log(`online`)
                            break
                        case "degreegoback":
                            device.setDegreegoback(msg.degreegoback)
                            console.log("msg.degreegoback " + msg.degreegoback)
                            console.log("device.degreegoback " + device.degreegoback)
                            break
                        case "degreeleftright":
                            device.setDegreeleftright(msg.degreeleftright)
                            console.log("msg.degreeleftright " + msg.degreeleftright)
                            console.log("device.degreeleftright " + device.degreeleftright)
                            break
                        case "delaycommand":
                            device.setDelaycommand(msg.delaycommand)
                            console.log("msg.delaycommand " + msg.delaycommand)
                            console.log("device.delaycommand " + device.delaycommand)
                            break
                        case "accel":
                            device.setAccel(msg.accel)
                            console.log("msg.accel " + msg.accel)
                            console.log("device.accel " + device.accel)
                            break
                        case "languages":
                            device.setLang(msg.languages)
                            console.log("msg.languages " + msg.languages)
                            console.log("device.languages " + device.lang)
                            break
                        case "messages":
                            console.log("message "+ msg.message + "  message2 " + msg.message2)
                            setMessagesMongo(msg.messages)
                            // for (var i in msg.clientsNoRepeatUsers){
                            //     console.log(msg.clientsNoRepeatUsers[i])
                            // }
                            break
                        default:
                            console.log('default '+ msg)
                    }
                }
            }
        }catch (e) {
            console.log('WebSocket Error ' + e)
        }
    }

    const socketTest = (username) => {
        if (device.webSocket.readyState === device.webSocket.CLOSED || device.webSocket.readyState === device.webSocket.CLOSING) {
            //if(device.username !== '' && device.connected === true) {
                wsConnect(username)
                console.log('WebSocket reconnected ' + username)
            // }else{
            //     //console.log('WebSocket no connected')
            // }
        } else {
            //console.log('WebSocket connected')
        }
    }

    return (
        <div>
            {/*{device.connected ?*/}
            {/*    <div>*/}
            {/*        <div>*/}
            {/*            {onlineUsers.map((online, index) =>*/}
            {/*                <div key={index}>*/}
            {/*                    {'online user: ' + online}*/}
            {/*                </div>*/}
            {/*            )}*/}
            {/*            {'online pc: ' + onlineUsers.length}*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            {Object.keys(messagesMongo).map((item, index) => (*/}
            {/*                <div key={index}>*/}
            {/*                    {'user: ' + messagesMongo[item].user + ' - ' + messagesMongo[item].messages}*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    :*/}
            {/*    ''*/}
            {/*}*/}
        </div>
    )
}

export default WebSocketProject
