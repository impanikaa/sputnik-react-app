import styles from './style.module.css'
import { Link } from 'react-router-dom';
import Search from '../../data/resources/search.png'
import Document from '../../data/resources/document.png'
import Telescope from '../../data/resources/telescope.png'
import Learning from '../../data/resources/learning.png'
import Planet from '../../data/resources/planet.png'
import Searching from '../../data/resources/searching.png'

const Resources = () => {
    return (
    <div className={styles.container}>
        
        <div className={styles.container_main}>
            <div className={styles.main_text}>
                <h1>Полезные ресурсы</h1>
                <p>Списки источников информации, полезные сайты/приложения и прочие материалы, которые помогут вам с подготовкой к экзаменам - в том числе, к ОГЭ по физике.</p>
            </div>
            <img src={Searching}></img>
        </div>

        <div className={styles.container_task_about}>
            <div className={styles.task_about_all}>
                <div className={styles.task_about_text}>
                    <h2>О ресурсах</h2>
                    <p>К экзаменам (особенно, к ОГЭ) можно подготовиться самостоятельно, если соблюдать дисциплину и знать ряд хороших инструментов. Ниже предложены несколько вариантов источников информации, которые могут помочь в организации учебы в целом, познакомят с самим экзаменом, а также те, что касаются непосредственно физики. Помимо этого, есть раздел с учебниками для углубленного изучения предмета.</p>
                </div>
                <img src={Search}></img>
            </div>
        </div>

        <div className={styles.res_list}>
            <div className={styles.res_card}>
                <img src={Document}></img>
                <div className={styles.res_card_text}>
                    <h3>ОГЭ</h3>
                    <p>Несколько официальных источников, так или иначе связанных с самим экзаменом: информация об ОГЭ и банки заданий с возможностью решения прямо на платформе</p>
                    <Link to='/resources/oge'><button classname={styles.button}>Подробнее</button></Link>
                </div>
            </div>
            <div className={styles.res_card}>
                <img src={Telescope}></img>
                <div className={styles.res_card_text}>
                    <h3>Физика</h3>
                    <p>Полезные сайты, которые помогут в изучении физики и содержат уроки/статьи на самые разные темы разного уровня и формата</p>
                    <Link to='/resources/physics'><button classname={styles.button}>Подробнее</button></Link>
                </div>
            </div>
            <div className={styles.res_card}>
                <img src={Learning}></img>
                <div className={styles.res_card_text}>
                    <h3>Сайты и приложения для учебы</h3>
                    <p>Инструменты, которые помогут самостоятельно организовать учебный процесс и упростить его, сделав более приятным и продуктивным</p>
                    <Link to='/resources/web-and-apps'><button classname={styles.button}>Подробнее</button></Link>
                </div>
            </div>
            <div className={styles.res_card}>
                <img src={Planet}></img>
                <div className={styles.res_card_text}>
                    <h3>Учебники для любознательных</h3>
                    <p>Задачники и учебники, причем почти все - повышенного уровня сложности. Подойдут для начинающих олимпиадников и просто тех, кто хочет знать физику больше, чем дают в школьной программе.</p>
                    <Link to='/resources/books'><button classname={styles.button}>Подробнее</button></Link>
                </div>
            </div>
        </div>

    </div>
    );
}


export default Resources;