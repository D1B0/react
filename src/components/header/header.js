import {useHistory} from 'react-router-dom';
import styles from "./header.module.css"

export function Header () {
    const history = useHistory ()
    const handleHistory = (path) => {
        history.push (`${path}`)
    }
    return <div className={styles.head}>
        <div className={styles.header}>Header</div>
        <div
            className={styles.header}
            onClick={() =>
                handleHistory ('/auth')}>Auth
        </div>
        <div
            className={styles.header}
            onClick={() =>
                handleHistory ('/chat')}>Chat
        </div>

    </div>
}
