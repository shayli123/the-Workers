import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import StatusPage from './StatusPage';
import {BrowserRouter as Router,Switch,Route,Link,useParams} from 'react-router-dom';

export default function RouterWorkers() {
    return (
        <>
            <div>
                <Menu />
                <Switch>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/status">
                        <StatusPage />
                    </Route>
                    <Route path="/">
                        <MainPage />
                    </Route>
                </Switch>

            </div>
        </>
    );
}
function Menu() {
    return (
        <nav style={{ textAlign: 'left', display: 'inline' }}>
            <ul>
                <li>
                    <Link to="/login">login Page</Link>
                </li>
                <li>
                    <Link to="/status">status Page</Link>
                </li>
                <li>
                    <Link to="/">Main Page</Link>
                </li>
            </ul>
        </nav>
    );
}