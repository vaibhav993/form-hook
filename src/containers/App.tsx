import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "../containers/Routes/ProtectedRoute";
import LoginPage from "../containers/Routes/LoginPage";
import HomePage from "../containers/Routes/HomePage";
import Logout from "../containers/Routes/Logout"
import { useLogin } from "../hooks/useLogin"


const App: React.FC = () => {
    const { isAuthenticated, authenticate, signout } = useLogin(false);
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/login">
                        <LoginPage login={authenticate}/>
                    </Route>
                    <ProtectedRoute path="/" isAuthenticated={isAuthenticated} >
                        <HomePage />
                    </ProtectedRoute>
                </Switch>
                <Logout isAuthenticated={isAuthenticated} signOut={signout}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
