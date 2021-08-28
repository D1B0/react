import {Link} from 'react-router-dom';
import {firebaseApp} from '../../api/firebase';
import {AuthTemplate, AuthForm} from '../../components';

export function Login () {
    const onSubmit = (email, password) => {
        return firebaseApp.auth ().signInWithEmailAndPassword (email, password)
    }
    return (
        <AuthTemplate>
            <AuthForm title="Авторизация" submitButton="Войти" onSubmit={onSubmit}/>
            <Link to="/registration">У вас нету аккаунта? Зарегистрироваться</Link>
        </AuthTemplate>
    )
}