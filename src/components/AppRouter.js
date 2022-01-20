import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../utils/routes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {NAVIGATION_ONE} from "../utils/consts";

const AppRouter = observer(() => {

    const {user} = useContext(Context)


    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={NAVIGATION_ONE}/>
        </Switch>
    );

});

export default AppRouter;
