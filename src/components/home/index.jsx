import styles from './style.module.css'
import Picture_1 from '../../data/home/Picture_1.png'

const Home = () => {
    return (
    <div className={styles.container}>
        <div className={styles.container_main}>
            <div className={styles.main_text}>
                <h1>Подготовка к</h1>
                <h1>ОГЭ по физике</h1>
                <h2>2023-2024</h2>
                <p>Здесь собрана вся нужная информация об экзамене и 
                    материалы для подготовки, которые помогут успешно и
                    без лишнего стресса сдать экзамен по одному из самых
                    сложных предметов</p>
                <button classname={styles.button}>Подробнее</button>
            </div>
            <img src={Picture_1} className={styles.picture_1_main}></img>
        </div>
    </div>
    );
}


export default Home;