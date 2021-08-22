import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getGistsComplete} from '../../store/gists';
import {getGists} from '../../store/gists/thunk';
import styles from './gist.module.css'

export const Gist = () => {
    const dispatch = useDispatch ()
    const {gists, pending, error} = useSelector (getGistsComplete)
    useEffect (() => {
        if (!gists.length) {
            dispatch (getGists ())
        }
    }, [dispatch, gists])
    if (pending) {
        return (<div>Pending...</div>)
    }
    if (error) {
        return (<div>{error}</div>)
    }
    return (<div>
        <h1>Gists</h1>
        <button onClick={() => dispatch (getGists ())}>New image</button>
        <ul className={styles.gallery}>
            {gists.map ((gist, idx) => {
                return (<li
                    className={styles.img}
                    key={idx}
                >
                    <img src={gist} alt="dogee"/></li>)
            })}
        </ul>
    </div>)
}