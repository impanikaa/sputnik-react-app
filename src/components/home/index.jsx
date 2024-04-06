import styles from './style.module.css'
import Picture_1 from '../../data/home/Picture_1.png'
import Book from '../../data/home/book.png'

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
            <img src={Picture_1}></img>
        </div>
        <div className={styles.container_oge}>
            <img src={Book}></img>
            <div className={styles.oge_text}>
                <h2>Что из себя представляет ОГЭ?</h2>
                <div>
                    <p> <b>Основной государственный экзамен (ОГЭ)</b> - форма государственной итоговой аттестации (ГИА),
                        проводимой для 9 классов с целью выявления знаний по предмету за курс основной школы. 
                        Ученик в обязательном порядке сдает русский язык и математику, а остальные 2 предмета выбирает 
                        на свое усмотрение. Одним из возможных предметов является физика. </p>
                    <p>На выполнение экзаменационной работы по физике отводится 3 часа (180 минут). 
                        Экзаменационная работа включает в себя 25 заданий.</p>
                </div>
            </div>
        </div>
        <div className={styles.break}>
            <br></br>
        </div>
    </div>
    );
}


export default Home;