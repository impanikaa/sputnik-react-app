import { Route, Switch } from 'react-router-dom';
import styles from './style.module.css'
import Home from '../home';
import Resources from '../resources';

const Main = () => {
    return(
        <div className={styles.container}>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/resources' component={Resources}/>
                {/* <Route exact path='/test' component={TestApi}/> */}
            </Switch>
        </div>
    )
}


export default Main;