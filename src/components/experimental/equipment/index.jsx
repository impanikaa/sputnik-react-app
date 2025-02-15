import React, { useState } from 'react';
import styles from './style.module.css'
import Picture_1 from '../../../data/experimental/equipment/picture_1.png';
// import Picture_2 from '../../../data/experimental/topics/picture_2.png';
import { Link } from 'react-router-dom';
import data from './data.json';

function scrollToElement() {
    const element = document.getElementById('target-element');
    element.scrollIntoView({ behavior: 'smooth' });
  }

const Equipment = () => {
    const [openSections, setOpenSections] = useState([]);

    const toggleSection = (index) => {
        if (openSections.includes(index)) {
        setOpenSections(openSections.filter((i) => i !== index));
        } else {
        setOpenSections([...openSections, index]);
        }
    };

    const formatText = (text) => {
        return text.split('\n').map((str, index) => (
        <React.Fragment key={index}>
            {str}
            <br /> <br />
        </React.Fragment>
        ));
    };

    return (
        <div className={styles.container}>
            <div className={styles.container_main}>
                <h1>Об оборудовании и работе с ним</h1>
                <img src={Picture_1} alt="Экспериментальное задание" />
            </div>

            <div className={styles.container_info}>
                {/* Первый пункт */}
                <div className={styles.problem}>
                    <h3 className={styles.problemTitle} onClick={() => toggleSection(0)}>
                    <span className={`${styles.arrow} ${openSections.includes(0) ? styles.open : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M12.354 8.354a.5.5 0 0 0 0-.708L8.354 3.646a.5.5 0 1 0-.708.708L11.293 8 7.646 11.646a.5.5 0 0 0 .708.708l4-4z"/>
                        </svg>
                    </span>
                    Условия проведения работы (требования к специалистам)
                    </h3>
                    <div className={`${styles.answers} ${openSections.includes(0) ? styles.visible : styles.hidden}`}>
                    <div className={styles.answer}>
                        <p>На экзамене в каждой аудитории присутствует специалист по проведению инструктажа и обеспечению лабораторных работ, 
                            который проводит перед экзаменом инструктаж по технике безопасности и следит за соблюдением правил безопасного 
                            труда во время работы экзаменуемых с лабораторным оборудованием. Примерная инструкция по технике безопасности 
                            приведена в Приложении 3.<br/><br/>Комплекты лабораторного оборудования для выполнения экспериментального задания 
                            (задание 17) формируются заблаговременно, до проведения экзамена. Для подготовки лабораторного оборудования в 
                            пункты проведения за один-два дня до экзамена сообщаются номера комплектов оборудования, которые будут 
                            использоваться на экзамене. Критерии проверки выполнения экспериментального задания требуют использования в 
                            рамках ОГЭ стандартизированного лабораторного оборудования. Перечень комплектов оборудования для выполнения 
                            экспериментальных заданий составлен на основе типовых наборов для фронтальных работ по физике. Состав этих 
                            наборов/комплектов отвечает требованиям надёжности и требованиям к конструированию экспериментальных заданий 
                            банка экзаменационных заданий ОГЭ. Номера и описание оборудования, входящего в комплекты, приведены в Приложении 2.
                            <br/><br/>При отсутствии в пунктах проведения экзамена каких-либо приборов и материалов оборудование может быть 
                            заменено на аналогичное с другими характеристиками. В целях обеспечения объективного оценивания выполнения 
                            экспериментального задания участниками ОГЭ в случае замены оборудования на аналогичное с другими характеристиками 
                            необходимо довести до сведения экспертов предметной комиссии, осуществляющих проверку выполнения заданий, описание 
                            характеристик реально используемого на экзамене оборудования.</p>
                    </div>
                    </div>
                </div>

                {/* Второй пункт */}
                <div className={styles.problem}>
                    <h3 className={styles.problemTitle} onClick={() => toggleSection(1)}>
                    <span className={`${styles.arrow} ${openSections.includes(1) ? styles.open : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M12.354 8.354a.5.5 0 0 0 0-.708L8.354 3.646a.5.5 0 1 0-.708.708L11.293 8 7.646 11.646a.5.5 0 0 0 .708.708l4-4z"/>
                        </svg>
                    </span>
                    Техника безопасности
                    </h3>
                    <div className={`${styles.answers} ${openSections.includes(1) ? styles.visible : styles.hidden}`}>
                    <div className={styles.answer}>
                        <p>1. Будьте внимательны и дисциплинированны, точно выполняйте указания организатора экзамена.
                        <br/><br/>2. Не приступайте к выполнению работы без разрешения организатора экзамена.
                        <br/><br/>3. Размещайте приборы, материалы, оборудование на своём рабочем месте таким образом, 
                        чтобы исключить их падение или опрокидывание.
                        <br/><br/>4. Перед выполнением работы внимательно изучите её содержание и порядок выполнения.
                        <br/><br/>5. При проведении опытов не допускайте предельных нагрузок измерительных приборов.
                        <br/><br/>6. При сборке экспериментальных установок используйте провода (с наконечниками и предохранительными чехлами) с прочной изоляцией без видимых повреждений. Запрещается пользоваться проводником с изношенной изоляцией.
                        <br/><br/>7. При сборке электрической цепи избегайте пересечения проводов.
                        <br/><br/>8. Источник тока к электрической цепи подключайте в последнюю очередь. 
                        Собранную цепь включайте только после проверки и с разрешения организатора экзамена.
                        <br/><br/>9. Не производите пересоединения в цепях до отключения источника электропитания.
                        <br/><br/>10. Пользуйтесь инструментами с изолирующими ручками.
                        <br/><br/>11. По окончании работы отключите источник электропитания, после чего разберите электрическую цепь.
                        <br/><br/>12. Не уходите с рабочего места без разрешения организатора экзамена.
                        <br/><br/>13. Обнаружив неисправность в электрических устройствах, находящихся под напряжением, 
                        немедленно отключите источник электропитания и сообщите об этом организатору экзамена.</p>
                    </div>
                    </div>
                </div>

                <div className={styles.problem}>
                    <h3 className={styles.problemTitle} onClick={() => toggleSection(2)}>
                    <span className={`${styles.arrow} ${openSections.includes(2) ? styles.open : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M12.354 8.354a.5.5 0 0 0 0-.708L8.354 3.646a.5.5 0 1 0-.708.708L11.293 8 7.646 11.646a.5.5 0 0 0 .708.708l4-4z"/>
                        </svg>
                    </span>
                    Комментарий к перечню комплектов оборудования
                    </h3>
                    <div className={`${styles.answers} ${openSections.includes(2) ? styles.visible : styles.hidden}`}>
                    <div className={styles.answer}>
                        <p>Особенность комплектов состоит в том, что один комплект предназначен для выполнения целой серии 
                            экспериментальных заданий. Поэтому для одного конкретного задания комплекты избыточны по сравнению 
                            с номенклатурой оборудования, необходимого для его выполнения.
                            <br/><br/>Задания 17 для КИМ ОГЭ 2024 г. разрабатываются только на базе
                            комплектов оборудования № 1, № 2, № 3, № 4 и № 6. (Задания
                            с использованием комплектов № 5 и № 7 будут вводиться в КИМ ОГЭ
                            в последующие годы.)
                            <br/><br/>Внимание! В материалах для экспертов примеры возможных ответов
                            на экспериментальные задания приведены в соответствии с рекомендуемыми
                            характеристиками оборудования, указанными в описании комплектов. При
                            использовании элементов оборудования с другими характеристиками
                            необходимо внести соответствующие изменения в перечень комплектов перед
                            проведением экзамена и довести информацию о внесённых изменениях
                            до сведения экспертов, проверяющих задания с развёрнутым ответом. </p>
                    </div>
                    </div>
                </div>
            </div>

            <div className={styles.container_eq}>
                <div className={styles.equipment_set}>
                    <h2 className={styles.set_title}>Комплект №1. Измерение выталкивающей силы</h2>

                    <div className={styles.equipment_table}>
                        <table>
                            <thead>
                                <tr>
                                    <th><h3>Элементы оборудования</h3></th>
                                    <th><h3>Рекомендуемые характеристики</h3></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Весы электронные</td>
                                    <td>предел измерения не менее 200 г</td>
                                </tr>
                                <tr>
                                    <td>Измерительный цилиндр (мензурка)</td>
                                    <td>предел измерения 250 мл (C = 2 мл)</td>
                                </tr>
                                <tr>
                                    <td>Стакан</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Динамометр №1</td>
                                    <td>предел измерения 1 H (C = 0,02 H)</td>
                                </tr>
                                <tr>
                                    <td>Динамометр №2</td>
                                    <td>предел измерения 5 H (C = 0,1 H)</td>
                                </tr>
                                <tr>
                                    <td>Поваренная соль, палочка для перемешивания</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.bottomSection}>
                        <div className={styles.topics}>
                            <h3>Темы:</h3>
                            <ul>
                                <li>Измерение выталкивающей силы</li>
                                <li>Определение плотности жидкостей и твёрдых тел</li>
                            </ul>
                        </div>

                        <div className={styles.photosColumn}>
                            <div className={styles.photoContainer}>
                                <img src={Picture_1} alt="Фото 1"></img>
                            </div>
                            <div className={styles.photoContainer}>
                                <img src={Picture_1} alt="Фото 2"></img>
                            </div>
                        </div>
                    </div>

                    <div className={styles.photos}>
                        <div className={styles.photobox}>
                            <img src={Picture_1} alt="Фото в коробке"></img>
                        </div>
                        <div className={styles.photonobox}>
                            <img src={Picture_1} alt="Фото без коробки"></img>
                        </div>
                        <div className={styles.photousage}>
                            <img src={Picture_1} alt="Фото примеры применения"></img>
                        </div>
                    </div>
                </div>
            </div>


      </div>
    );
}


export default Equipment;