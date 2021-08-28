import {Redirect, Route} from 'react-router-dom';

export function PrivateRoute ({isAuth, ...rest}) {
    return isAuth ? <Route {...rest}/> : <Redirect to="/chat"/>
}
export function PublicRoute ({isAuth, ...rest}) {
    return !isAuth ? <Route {...rest}/> : <Redirect to="/"/>
}