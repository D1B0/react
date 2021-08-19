import {Link} from 'react-router-dom';
import styles from "./header.module.css"

export function Header () {
    return <div className={styles.container}>
        <div className={styles.head}>
            <div className={styles.header}>Header</div>
            <Link to={"/auth"}
                  className={styles.header}
            >Auth
            </Link>

            <Link to={"/chat"}
                  className={styles.header}
            >Chat
            </Link>
        </div>
    </div>
}
