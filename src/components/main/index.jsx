import { Route, Switch } from 'react-router-dom';
import styles from './style.module.css'
import Home from '../home';
import Fipi from '../fipi';
import Info from '../oge_info';
import Experimental from '../experimental';
import Resources from '../resources';
import About from '../about';
import Lost from '../lost'

const Main = () => {
    return(
        <div className={styles.container}>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/fipi' component={Fipi}/>
                <Route exact path='/info' component={Info}/>
                <Route exact path='/experimental-task' component={Experimental}/>
                <Route exact path='/resources' component={Resources}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/experimental-task/topics' component={Lost}/>
                <Route exact path='/experimental-task/equipment' component={Lost}/>
                <Route exact path='/experimental-task/solves' component={Lost}/>
                <Route exact path='/lost' component={Lost}/>
            </Switch>
        </div>
    )
}


export default Main;