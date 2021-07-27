import {Message} from './components/Message'
import styles from "./styles/app.module.css";

function App() {
    const message = {name: 'good hacker'}
    return (
        <div className={styles.app} style={{ border: "1px solid red" }}>
            <Message message={message}/>
        </div>
    );
}

export default App;
