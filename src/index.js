import {ThemeProvider, createTheme} from "@material-ui/core"
import React, {useEffect, useState} from "react"
import ReactDOM from "react-dom"
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {PersistGate} from 'redux-persist/integration/react';
import {firebaseApp} from './api/firebase';
import {ChatList, Header, PrivateRoute, PublicRoute} from './components';
import {Auth, Chat, Gist, Login, Registration} from './pages';
import {persistore, store} from './store';
import "./global.css"

const theme = createTheme ({
    dark: {
        color: "#000"
    },
    light: {
        color: "#fff"
    }
})
const App = () => {
    const [session, setSession] = useState (null)
    useEffect (() => {
        firebaseApp.auth ().onAuthStateChanged ((user) => {
            if (user) {
                setSession (user)
            } else {
                setSession (null)
            }
        })
    }, [])
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistore}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <Header isAuth={session}/>
                        <Switch>
                            <PrivateRoute isAuth={session} path="/gist" component={() => <Gist/>}/>
                            <PublicRoute isAuth={session} path="/login" component={() => <Login/>}/>
                            <PublicRoute isAuth={session} path="/registration" component={() => <Registration/>}/>
                            <PrivateRoute isAuth={session} path="/chat" component={() => <Chat/>}/>
                            <PrivateRoute path="*" component={() => <h1>404 page</h1>}/>
                        </Switch>
                    </ThemeProvider>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}
ReactDOM.render (<App/>, document.getElementById ("root"))