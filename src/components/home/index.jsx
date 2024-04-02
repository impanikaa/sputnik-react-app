import styles from './style.module.css'
import Picture_1 from '../../data/home/Picture_1.png'

const Home = () => {
    return (
    <div className={styles.container}>
        <img src={Picture_1} className={styles.logo}></img>
    </div>
    );
}


export default Home;