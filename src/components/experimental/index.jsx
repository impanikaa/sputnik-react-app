import styles from './style.module.css'
import Picture_1 from '../../data/experimental/Picture_1.png'
import Picture_2 from '../../data/experimental/Picture_2.png'
import { Link } from 'react-router-dom';
import Lightbulb from '../../data/experimental/lightbulb.png'
import Comment from '../../data/experimental/comment.png'
import Complects from '../../data/experimental/complects.png'
import Warning from '../../data/experimental/warning.png'
import Solves_1 from '../../data/experimental/solves_1.png'
import Solves_2 from '../../data/experimental/solves_2.png'
import Solves_3 from '../../data/experimental/solves_3.png'
import Solves_4 from '../../data/experimental/solves_4.png'

function scrollToElement() {
    const element = document.getElementById('target-element');
    element.scrollIntoView({ behavior: 'smooth' });
  }

const Experimental = () => {
    return (
    <div className={styles.container}>
        
        <div className={styles.container_main}>
            <img src={Picture_1}></img>
            <div className={styles.main_text}>
                <h1>Экспериментальное задание №17</h1>
                <h2>Решения и общая информация</h2>
            </div>
        </div>

        <div className={styles.container_task_about}>
            <div className={styles.task_about_all}>
                <img src={Lightbulb}></img>
                <h2>В чем суть задания?</h2>
                <div className={styles.break}></div>
                <div className={styles.task_about_text}>
                    <p>Одно из заданий ОГЭ по физике - экспериментальное. Оно включает в себя <b>лабораторную работу</b> по
                     единым для всей страны контрольно-измерительным материалам (КИМ).</p>
                    <p>Работа выполняется на реальном лабораторном оборудовании, включающем в себя <b>7 комплектов</b> <u>(в 2023-2024 их 5)</u>:</p>
                    <p>4 - по разделам механики, 1 - по электричеству, 1 - по оптике, 1 - по молекулярной физике.</p>
                    <p>При проведении экспериментальной части может быть оценён только <b>письменный</b> отчёт.</p>
                </div>
            </div>
        </div>

        <div className={styles.container_ask}>
            
            <div className={styles.ask_text}>
                <h2>Что будут спрашивать?</h2>
                <div>
                    <p> Работу легче писать, когда заранее известен <b>перечень проверяемых тем</b>. 
                        Есть возможность составить собственный план подготовки, а также вспомнить лишний раз, 
                        какие темы требуют дополнительной отработки. 
                        Ниже вы можете перейти к следующим спискам, разбитым по разделам физики: </p>
                    <ul>
                        <li>Проверяемые умения ученика</li>
                        <li>Темы возможных экспериментальных заданий</li>
                    </ul>
                    <Link to='/experimental-task/topics'><button classname={styles.button}>Подробнее</button></Link>
                </div>
            </div>
            <img src={Picture_2}></img>
        </div>

        <div className={styles.container_equipment}>
            <h2>Какое оборудование и как с ним работать?</h2>
            <p>Для выполнения экспериментального задания есть всего <b>7 комплектов оборудования</b>, 
                каждый из которых подходит для определенных измерений. 
                По кнопке вы можете перейти к более подробному разбору того, какие будут комплекты, как они выглядят, 
                для чего нужны и как ими правильно пользоваться.</p>
            <div className={styles.equipment_block_cards}>
                <div className={styles.equipment_card}>
                    <img src={Comment}></img>
                    <h3>Комментарий из спецификации</h3>
                </div>
                <div className={styles.equipment_card}>
                    <img src={Complects}></img>
                    <h3>Комплекты оборудования</h3>
                </div>
                <div className={styles.equipment_card}>
                    <img src={Warning}></img>
                    <h3>Правила техники безопасности</h3>
                </div>
            </div>
            <Link to='/experimental-task/equipment'><button classname={styles.button}>Подробнее</button></Link>
        </div>

        <div className={styles.container_solves}>
            <h2>А как решить задание правильно?</h2>
            <p>Наконец, как справиться с самой лабораторной работой? Перейдя по кнопке ниже, 
                вы найдете решения 19 вариантов экспериментального задания №17, каждый из которых подробно разобран. </p>
            <p className={styles.small_text}>* эти варианты были взяты из сборника экспериментальных заданий по ОГЭ 
                и могут не соответствовать реальным заданиям </p>
            <p>К каждому решению прилагается:</p>
            <div className={styles.solves_block_cards}>
                
                <div className={styles.solves_card}>
                <div className={styles.solves_block}>
                    <div className={styles.solves_card_text}>
                        <div className={styles.solves_card_text_h3}><h3>Видеоинструкция</h3></div>
                        <p>На видео проводятся все необходимые измерения с реальным оборудованием. 
                            На доске записываются все полученные результаты и расчеты. <br></br>
                            Есть пошаговые текстовые пояснения и образец рисунка.</p>
                    </div>
                    <img src={Solves_1}></img>
                </div>
                </div>

                <div className={styles.solves_card}>
                <div className={styles.solves_block}>
                    <img src={Solves_2}></img>
                    <div className={styles.solves_card_text}>
                        <div className={styles.solves_card_text_h3}><h3>Текстовая инструкция</h3></div>
                        <p>Описано всё то же самое, что и в видео, но в текстовом формате (файл PDF) 
                            со всеми нужными рисунками, таблицами и пошаговой инструкцией.<br></br>
                            Удобно для печати.</p>
                    </div>
                </div>
                </div>

                <div className={styles.solves_card}>
                <div className={styles.solves_block}>
                    <div className={styles.solves_card_text}>
                        <div className={styles.solves_card_text_h3}><h3>Таблица с анализом условия</h3></div>
                        <p>Такая таблица поможет систематизировать в голове материал и ничего не упустить по невнимательности.<br></br>
                            В ней указывается условие задачи с тем, что нужно найти, 
                            погрешности, список оборудования и что должно быть на бланке.</p>
                    </div>
                    <img src={Solves_3}></img>
                </div>
                </div>

                <div className={styles.solves_card}>
                <div className={styles.solves_block}>
                    <img src={Solves_4}></img>
                    <div className={styles.solves_card_text}>
                        <div className={styles.solves_card_text_h3}><h3>Пример оформления на бланке</h3></div>
                        <p>Исходя из названия, в данном файле (изображение или PDF) находится один из возможных вариантов
                            оформления решения - то, что может претендовать на максимальный балл за задание №17.</p>
                    </div>
                </div>
                </div>
            </div>
            <Link to='/experimental-task/equipment'><button classname={styles.button}>Подробнее</button></Link>
        </div>

    </div>
    );
}


export default Experimental;