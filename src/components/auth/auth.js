import {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {visibleProfile} from '../../store/profile';
import styles from "./auth.module.css"

export const Auth = () => {
    const profile = useSelector ((state) => state.visibleProfile)
    const [login, setLogin] = useState ('')
    const dispatch = useDispatch ()
    const sendLogin = useCallback (() => {
        if (login) {
            if (localStorage.getItem ('login')) {
                localStorage.removeItem ('login')
            }
            localStorage.setItem ('login', login)
            dispatch (visibleProfile ())
        }
    }, [login, dispatch])
    if (profile) {
        return <div className={styles.auth_modal}>
            <div className={styles.auth_body}>
                <div className={styles.close_modal}
                     onClick={() => dispatch (visibleProfile ())}>&#x2715;</div>
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
    return (<div className={styles.empty}>.</div>)
}