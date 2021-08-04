import {ChatList, MessageList} from './components';
import {Grid, Paper} from '@material-ui/core';

function App () {
    return <div style={{flexGrow: 1}}>
        <Grid container spacing={6}>
            <Grid item xs={2}><Paper><ChatList/></Paper></Grid>
            <Grid item xs={5}><Paper><MessageList/></Paper></Grid>
        </Grid>
    </div>
}
export default App;
