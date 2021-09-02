import {Link} from 'react-router-dom';
import {firebaseApp} from '../../api/firebase';
import styles from "./header.module.css"

const menu = [
    {id: 1, name: "Auth/Sign-up", path: "/login"},
    {id: 2, name: "Gist", path: "/gist"},
    {id: 3, name: "Chat", path: "/chat"}
]
export const signOut = () => {
    firebaseApp.auth ().signOut ()
}
export function Header ({isAuth}) {
    return <div className={styles.container}>
        <div className={styles.head}>
            <div className={styles.header}>Header</div>
            {menu.map ((link) => {
                return (<Link key={link.id} to={`${link.path}`}
                              className={styles.header}
                >{link.name}
                </Link>)
            })}

        </div>
        {isAuth ? <div className={styles.profile}

        >
            <div className={styles.exit} onClick={signOut}>Выход из {isAuth.email}</div>
        </div> : null}
    < /div>
}
