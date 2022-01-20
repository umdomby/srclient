import React, {useContext, useEffect, useRef, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Link, useHistory} from 'react-router-dom'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import {
    NAVIGATION_FOUR,
    NAVIGATION_ONE,
    NAVIGATION_THREE,
    NAVIGATION_TWO,
    OPTION_1,
    OPTION_2,
    OPTION_3,
    OPTION_4, OPTION_5, OPTION_6, OPTION_7
} from "../utils/consts";
const { SubMenu } = Menu;
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const NavBarTop = observer(() => {

    const {device} = useContext(Context)
    const history = useHistory()
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const [navigationOld, setNavigationOld] = useState(NAVIGATION_ONE);

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
        switch (latestOpenKey) {
            case 'sub1' :
                history.push(NAVIGATION_ONE)
                setNavigationOld(NAVIGATION_ONE)
                break;
            case 'sub2' :
                history.push(NAVIGATION_TWO)
                setNavigationOld(NAVIGATION_TWO)
                break;
            case 'sub3' :
                history.push(NAVIGATION_THREE)
                setNavigationOld(NAVIGATION_THREE)
                break;
            case 'sub4' :
                history.push(NAVIGATION_FOUR)
                setNavigationOld(NAVIGATION_FOUR)
                break;
            default:
                history.push(navigationOld)
                break;
        }
    };

    return (
        <div>
            <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }}>
                <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                    <Menu.Item key="1"><Link to={OPTION_1}>Option 1</Link></Menu.Item>
                    <Menu.Item key="2"><Link to={OPTION_2}>Option 2</Link></Menu.Item>
                    <Menu.Item key="3"><Link to={OPTION_3}>Option 3</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Use control">
                    <Menu.Item key="4"><Link to={OPTION_4}>Servo</Link></Menu.Item>
                    <Menu.Item key="5"><Link to={OPTION_5}>Option 5</Link></Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="8">Option 8</Menu.Item>
                        <Menu.Item key="9">Option 9</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Four">
                    <Menu.Item key="6"><Link to={OPTION_6}>Option 6</Link></Menu.Item>
                    <Menu.Item key="7"><Link to={OPTION_7}>Option 7</Link></Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    );

})

export default NavBarTop;
