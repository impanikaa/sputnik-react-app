import styles from './style.module.css'
import Telescope from '../../../data/resources/telescope.png'
import Classnaya from '../../../data/resources/physics/classnaya-physics.jpg'
import Phystech from '../../../data/resources/physics/phystech.png'
import Frfsh from '../../../data/resources/physics/frfsh.jpg'
import Getaclass from '../../../data/resources/physics/getaclass.jpg'
import Mathus from '../../../data/resources/physics/mathus.png'
import Pavel from '../../../data/resources/physics/pavel_victor.jpg'
import Walter from '../../../data/resources/physics/walter-fendt.jpg'

const PhysicsRes = () => {
    return (
    <div className={styles.container}>

        <div className={styles.container_main}>
            <div className={styles.main_text}>
                <h1>Ресурсы: Физика</h1>
            </div>
            <img src={Telescope}></img>
        </div>

        <div className={styles.res_list}>
            
            <div className={styles.res_card_1}>
                <img src={Phystech}></img>
                <div className={styles.res_card_text_1}>
                    <h2>Физтех регионам</h2>
                    <p>Это один из лучших источников для подготовки к олимпиадам по физике, но подойдет и тем, кто просто сдает экзамен. Сайт содержит видеолекции от преподавателей МФТИ и разборы базовых задач на самые разные темы, включая практические работы.Помимо физики за 7-11 класс, в Физтех Регионам разбирают подробно астрономию, алгебру и геометрию, поэтому математический аппарат тоже можно подтянуть.</p>
                    <a href='https://os.mipt.ru/#/' target="_blank" rel="noopener noreferrer"><button classname={styles.button}>Подробнее</button></a>
                </div>
            </div>

            <div className={styles.res_card_2}>
                <img src={Frfsh}></img>
                <div className={styles.res_card_text_2}>
                    <h2>Фонд развития Физтех-школ</h2>
                    <p>Фонд развития Физтех-школ транслирует лучший образовательный опыт, применяемый в МФТИ и в Физтех-лицее им П.Л. Капицы. Фонд работает с проектами создания и поддержки классов естественнонаучной направленности, развивает кружковое движение, проводит курсы повышения квалификации для учителей, выпускает методические материалы, видеолекции для подготовки к ЕГЭ, ОГЭ. Среди методических материалов можно найти краткие разборы многих тем из физики, математики и биологии.</p>
                    <a href='https://go2phystech.ru/uchebnye-posobiya-frfsh/' target="_blank" rel="noopener noreferrer"><button classname={styles.button}>Подробнее</button></a>
                </div>
            </div>
            
            <div className={styles.res_card_1}>
                <img src={Pavel}></img>
                <div className={styles.res_card_text_1}>
                    <h2>Павел Виктор (youtube-канал)</h2>
                    <p>Павел Виктор - замечательный преподаватель физики Ришельевского лицея, любящий свою работу. На его канале разобраны абсолютно все темы из школьного курса физики и даже больше: “здесь записи всех уроков физики, от 7 до 11 класса, проведенных с 2014 по 2020 год.” Среди тематических плейлистов вы точно найдете интересующий вас урок, на котором максимально доходчиво объяснена теория, решение простых и сложных задач, а всё это подкрепляется демонстрацией физических экспериментов.</p>
                    <a href='https://www.youtube.com/@pvictor54' target="_blank" rel="noopener noreferrer"><button classname={styles.button}>Подробнее</button></a>
                </div>
            </div>
            
            <div className={styles.res_card_2}>
                <img src={Mathus}></img>
                <div className={styles.res_card_text_2}>
                    <h2>mathus.ru</h2>
                    <p>Изначально сайт создан для подготовки к олимпиадам и ЕГЭ по математике и физике. На нем размещены файлы с огромным количеством задач по самым различным темам высокого уровня сложности. Для практического отрабатывания нужных разделов эти материалы подходят идеально. Если вас интересует конкретная олимпиада, то, скорее всего, для нее вы найдете удобный архив заданий прошлых лет.</p>
                    <a href='https://mathus.ru/phys/index.php' target="_blank" rel="noopener noreferrer"><button classname={styles.button}>Подробнее</button></a>
                </div>
            </div>
            
            <div className={styles.res_card_1}>
                <img src={Walter}></img>
                <div className={styles.res_card_text_1}>
                    <h2>Walter Fendt</h2>
                    <p>Очень полезный сайт с интерактивной лабораторией. Можно выбрать практически любую тему и проводить различные эксперименты с разным оборудованием. Удобно, что характеристики чего-либо (например, длину испускаемой волны в оптике) можно менять и смотреть, что изменится в опыте.</p>
                    <a href='https://www.walter-fendt.de/html5/phru/' target="_blank" rel="noopener noreferrer"><button classname={styles.button}>Подробнее</button></a>
                </div>
            </div>
            
            <div className={styles.res_card_2}>
                <img src={Classnaya}></img>
                <div className={styles.res_card_text_2}>
                    <h2>Класс!ная физика</h2>
                    <p>Веб-сайт со множеством разнообразных материалов, заставляющих посмотреть на физику с более научной точки зрения, но отвечая на, казалось бы, простые вопросы. Есть разделы с задачами (качественные и типовые), видеоуроки, раздел мультимедия (пример: слайд-шоу “Открытие Ньютона”), уроки с огромными списками материалов по всем разделам физики, а также несколько уроков про астрономию и учёных.</p>
                    <a href='http://class-fizika.ru/' target="_blank" rel="noopener noreferrer"><button classname={styles.button}>Подробнее</button></a>
                </div>
            </div>
            
            <div className={styles.res_card_1}>
                <img src={Getaclass}></img>
                <div className={styles.res_card_text_1}>
                    <h2>GetAClass</h2>
                    <p>Уникальный веб-сайт с полностью бесплатными материалами. В него входят такие проекты, как “Физика в опытах и экспериментах”, “Дерево знаний GetAClass” (по всем разделам физики с прикрепленными видеоуроками и конспектами), “GetAClass: Homework”, “GetAClass: Smart” (тренажер для решения задач по физике)</p>
                    <a href='https://www.getaclass.ru/' target="_blank" rel="noopener noreferrer"><button classname={styles.button}>Подробнее</button></a>
                </div>
            </div>

        </div>
    </div>
    );
}


export default PhysicsRes;