import styles from './style.module.css'
import { Link } from 'react-router-dom';
import Picture_1 from '../../data/home/Picture_1.png'
import Picture_2 from '../../data/home/Picture_2.png'
import Book from '../../data/home/book.png'
import Fipi from '../../data/home/fipi.png'
import Resources from '../../data/home/resources.png'
import Solves from '../../data/home/solves.png'
import Organisation from '../../data/home/organisation.png'

function scrollToElement() {
    const element = document.getElementById('target-element');
    element.scrollIntoView({ behavior: 'smooth' });
  }

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
                <button classname={styles.button} onClick={scrollToElement}>Подробнее</button>
            </div>
            <img src={Picture_1}></img>
        </div>
        
        <div className={styles.container_oge}>
            <img src={Book}></img>
            <div className={styles.oge_text}>
                <h2>Что из себя представляет ОГЭ?</h2>
                <div className={styles.oge_text_par}>
                    <p> <b>Основной государственный экзамен (ОГЭ)</b> - форма государственной итоговой аттестации (ГИА),
                        проводимой для <b>9 классов</b> с целью выявления знаний по предмету за курс основной школы. 
                        Ученик в обязательном порядке сдает русский язык и математику, а остальные 2 предмета выбирает 
                        на свое усмотрение. Одним из возможных предметов является <b>физика</b>. </p>
                    <p>На выполнение экзаменационной работы по физике отводится <b>3 часа</b> (180 минут). 
                        Экзаменационная работа включает в себя <b>25 заданий</b>.</p>
                </div>
            </div>
        </div>
        
        <div className={styles.break} id='target-element'></div>
        
        <div className={styles.container_about}>
            <h2>Здесь вы найдете информацию о...</h2>
            <div className={styles.about_block_cards}>
                <div className={styles.pair}>
                <div className={styles.about_card}>
                    <img src={Organisation}></img>
                    <h3>устройстве экзамена</h3>
                    <p>Документы, типы заданий, процесс сдачи и т.д.</p>
                </div>
                <div className={styles.about_card}>
                    <img src={Fipi}></img>
                    <h3>пользе сайта ФИПИ</h3>
                    <p>Открытый банк заданий, документы и т.д.</p>
                </div>

                </div>
                <div className={styles.pair}>
                <div className={styles.about_card}>
                    <img src={Solves}></img>
                    <h3>решении задания №17</h3>
                    <p>Видеоинструкции, общая информация, списки тем</p>
                </div>
                <div className={styles.about_card}>
                    <img src={Resources}></img>
                    <h3>ресурсах для подготовки</h3>
                    <p>Литература, полезные приложения и сайты</p>
                </div>
                </div>
            </div>
        </div>

        <div className={styles.container_lab}>
            <div className={styles.lab_text}>
                <h3>Экспериментальное задание №17</h3>
                <p>Помимо теории, экзамен по физике проверяет и <b>практические</b> навыки учащегося в задании №17. 
                    Для успешного выполнения лабораторной работы мы предлагаем следующие материалы:</p>
                    <Link to='/experimental-task'><button classname={styles.button}>Подробнее</button></Link>
            </div>
            <img src={Picture_2}></img>
            <ul>
                <li>Видеоинструкции по выполнению 19 различных типов практических заданий</li>
                <li>Списки проверяемых тем</li>
                <li>Информация о комплектах оборудования и техника безопасности</li>
                <li>Примеры оформления решений</li>
                <li>Текстовые инструкции и анализ условия к каждому типу задания №17</li>
            </ul>
        </div>

        <div className={styles.container_fipi}>
            <div className={styles.fipi_text}>
                <h3>Что такое “ФИПИ” и зачем он нужен?</h3>
                <p><i>“Федеральное государственное бюджетное научное учреждение <b>«Федеральный институт 
                педагогических измерений»</b> занимается исследованиями в области оценки качества образования. 
                Учредителем института является Федеральная служба по надзору в сфере образования и науки 
                Российской Федерации (Рособрнадзор)”</i></p>
                <p><a href='https://fipi.ru/'><u>ФИПИ</u></a> - ваш главный помощник при подготовке к экзаменам. 
                На нем размещена вся официальная информация и документы, а также есть 
                открытый банк заданий - незаменимый источник для сдающих ОГЭ и ЕГЭ.</p>
            </div>
        </div>

    </div>
    );
}


export default Home;