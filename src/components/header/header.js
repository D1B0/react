import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {visibleProfile} from '../../store/profile';
import {Auth} from '../auth';
import styles from "./header.module.css"

function AppWithHook () {
    const profile = useSelector ((state) => state.visibleProfile
    )
    const dispatch = useDispatch ()
    return (<div
        className={styles.header}
        onClick={() => dispatch (visibleProfile ())}
    >Auth {profile}
    </div>)
}
export function Header ({profile}) {
    console.log (profile)
    const history = useHistory ()
    const handleHistory = (path) => {
        history.push (`${path}`)
    }
    return <div className={styles.head}>
        <div className={styles.header}>Header</div>
        <AppWithHook/>
        <Auth/>
        <div
            className={styles.header}
            onClick={() =>
                handleHistory ('/chat')}>Chat
        </div>

    </div>
}
