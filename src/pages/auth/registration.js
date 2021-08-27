import {Link} from 'react-router-dom';
import {firebaseApp} from '../../api/firebase';
import {AuthForm, AuthTemplate} from '../../components';

export function Registration () {
    const onSubmit = (email, password) => {
        return firebaseApp.auth ().createUserWithEmailAndPassword (email, password)
    }
    return (
        <AuthTemplate>
            <AuthForm title="Регистрация" submitButton="Зарегистрироваться" onSubmit={onSubmit}/>
            <Link to="/login">У вас есть аккаунт? Войти</Link>
        </AuthTemplate>
    )
}