import {useHistory} from 'react-router-dom';
import styles from "./header.module.css"

export function Header () {
    const history = useHistory ()
    return <div className={styles.container}>
        <div className={styles.head}>
            <div className={styles.header}>Header</div>
            <div
                className={styles.header}
                onClick={() => history.push ("/auth")}>Auth
            </div>

            <div
                className={styles.header}
                onClick={() =>
                    history.push ("/chat")}>Chat
            </div>
        </div>
    </div>
}
