import './App.css';
import NavBarLeft from "./components/NavBarLeft";
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {Col, Row} from "antd";
import {useContext, useEffect, useState} from "react";
import {Spinner} from "react-bootstrap";
import {check} from "./http/userAPI";
import {Context} from "./index";


function App() {

    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(data.email)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

  return (
      <BrowserRouter>
          <Header />
          <Row>
              <Col style={{maxWidth: '20%', minWidth: '300px'}}>
                  <NavBarLeft />
              </Col>
              <Col style={{maxWidth: '80%', minWidth: '300px'}}>
                  <AppRouter />
              </Col>

          </Row>
      </BrowserRouter>
  );
}

export default App;
