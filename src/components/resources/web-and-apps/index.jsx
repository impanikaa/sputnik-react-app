import styles from './style.module.css'
import Learning from '../../../data/resources/learning.png'
import Figma from '../../../data/resources/web-and-apps/figma.png'
import Google from '../../../data/resources/web-and-apps/google-academy.jpg'
import Notion from '../../../data/resources/web-and-apps/notion.png'
import Obsidian from '../../../data/resources/web-and-apps/obsidian.png'
import Quizlet from '../../../data/resources/web-and-apps/Quizlet.jpg'
import Sirius from '../../../data/resources/web-and-apps/sirius.png'
import Ypt from '../../../data/resources/web-and-apps/ypt.png'

const WebAndAppsRes = () => {
    return (
    <div className={styles.container}>

        <div className={styles.container_main}>
            <div className={styles.main_text}>
                <h1>Сайты и приложения</h1>
                <h2>для учёбы</h2>
            </div>
            <img src={Learning}></img>
        </div>

        <div className={styles.res_list}>
            
            <div className={styles.res_card_1}>
                <img src={Notion}></img>
                <div className={styles.res_card_text_1}>
                    <h2>Notion</h2>
                    <p>Самый удобный и функциональный планер из всех существующих. Скачать приложение можно на любое устройство. Приятный и интуитивно понятный интерфейс. Широкий набор инструментов: например, создание базы данных в виде таблицы, галереи и т.д. Удобно планировать дела и отслеживать свой прогресс (даже автоматически). Можно создавать отдельные тематические страницы и оформлять на своё усмотрение. </p>
                    <a href='https://www.notion.so/' target="_blank" rel="noopener noreferrer"><button classname={styles.button}>Подробнее</button></a>
                </div>
            </div>

            <div className={styles.res_card_2}>
                <img src={Ypt}></img>
                <div className={styles.res_card_text_2}>
                    <h2>Yeolpumta (ypt)</h2>
                    <p>Идеальный таймер для учебы. Можно отслеживать время в течение дня, потраченное на ту или иную деятельность (например, разные школьные предметы). Если не переусердствовать, то YPT будет дополнительным источником мотивации и напоминанием, что пора поделать что-то полезное. Также можно анализировать свое времяпрепровождение в разделе статистики за разные временные промежутки, чтобы осознавать свой график и не перенапрягаться.</p>
                    <a href='https://www.yeolpumta.com/en/' target="_blank" rel="noopener noreferrer"><button classname={styles.button}>Подробнее</button></a>
                </div>
            </div>
            
            <div className={styles.res_card_1}>
                <img src={Figma}></img>
                <div className={styles.res_card_text_1}>
                    <h2>Figma</h2>
                    <p>Относительно простой векторный редактор с интуитивно понятным интерфейсом. В нем можно сделать что угодно (от таблицы до макета сайта), причем с чистого листа: никаких шаблонов и ограничений. Помимо дизайна, есть раздел FigmaJam, предназначенный для работы над проектами - создание досок для различных схем и идей, над которыми могут работать несколько человек одновременно (как и над дизайном).</p>
                    <a href='https://www.figma.com' target="_blank" rel="noopener noreferrer"><button classname={styles.button}>Подробнее</button></a>
                </div>
            </div>
            
            <div className={styles.res_card_2}>
                <img src={Sirius}></img>
                <div className={styles.res_card_text_2}>
                    <h2>Сириус.Курсы</h2>
                    <p>Сириус.Курсы — это онлайн-школа Образовательного центра «Сириус». Здесь каждый может выбрать один или несколько бесплатных курсов и проходить их в собственном темпе. В онлайн-школе доступны курсы по 7 направлениям: математика, программирование, физика, химия, биология, искусственный интеллект и лингвистика. Авторы Сириус.Курсов работают в ведущих школах, вузах и технологических компаниях страны. Они знают, как увлечь предметом и умеют в коротких видео объяснить даже самый сложный материал.</p>
                    <a href='https://edu.sirius.online/#/' target="_blank" rel="noopener noreferrer"><button classname={styles.button}>Подробнее</button></a>
                </div>
            </div>
            
            <div className={styles.res_card_1}>
                <img src={Quizlet}></img>
                <div className={styles.res_card_text_1}>
                    <h2>Quizlet</h2>
                    <p>Quizlet — это бесплатный сервис, который позволяет легко запоминать любую информацию, которую можно представить в виде учебных карточек. Все что требуется — это найти в базе или создать интерактивный материал — собственные карточки, добавляя к ним картинки и аудиофайлы и затем выполнять упражнения и играть в игры, чтобы запомнить данный материал.</p>
                    <a href='https://quizlet.com' target="_blank" rel="noopener noreferrer"><button classname={styles.button}>Подробнее</button></a>
                </div>
            </div>
            
            <div className={styles.res_card_2}>
                <img src={Obsidian}></img>
                <div className={styles.res_card_text_2}>
                    <h2>Obsidian</h2>
                    <p>Obsidian — это бесплатный текстовый редактор, в котором удобно хранить заметки, каталогизировать их и находить между ними взаимосвязи. Многие считают его особенно удобным для учебы. Лучше всего пользоваться им с планшета.</p>
                    <a href='https://obsidian.md/download' target="_blank" rel="noopener noreferrer"><button classname={styles.button}>Подробнее</button></a>
                </div>
            </div>
            
            <div className={styles.res_card_1}>
                <img src={Google}></img>
                <div className={styles.res_card_text_1}>
                    <h2>Google Академия</h2>
                    <p>«Гугл-академия», или Google Scholar, — бесплатная поисковая система для сбора научных статей, книг, тезисов и других академических материалов. Главное преимущество «Гугл-академии» перед другими ресурсами профессиональной литературы вроде Elibrary — поиск источников на разных языках и по разным индексам. Статью можно найти по любой интересующей теме.</p>
                    <a href='https://scholar.google.ru/' target="_blank" rel="noopener noreferrer"><button classname={styles.button}>Подробнее</button></a>
                </div>
            </div>

        </div>
    </div>
    );
}


export default WebAndAppsRes;