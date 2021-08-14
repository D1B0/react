import {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {setNameProfile} from '../../store/profile';
import styles from "./auth.module.css"

export const Auth = () => {
    const {push} = useHistory ()
    const [login, setLogin] = useState ('')
    const dispatch = useDispatch ()
    const sendLogin = useCallback (() => {
        if (login) {
            dispatch (setNameProfile (login))
        }
        push ('/chat')
    }, [login, dispatch, push])
    return <div className={styles.auth_modal}>
        <div className={styles.auth_body}>
            <h2 className={styles.head}>Auth</h2>
            <input
                className={styles.input_login}
                type="text"
                placeholder="User name"
                value={login}
                onChange={(e) => setLogin (e.target.value)}/>
            <button
                className={styles.button_login}
                type="button"
                onClick={sendLogin}>login
            </button>
        </div>
    </div>
}