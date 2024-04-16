import React, { useState } from 'react';
import styles from './style.module.css';
import documentsData from './documents.json';
import Picture_1 from '../../../data/experimental/solves/picture_1.png';
import Picture_2 from '../../../data/experimental/solves/picture_2.png';
import Key from '../../../data/experimental/solves/key.png';

const Solves = () => {
  const [selectedSet, setSelectedSet] = useState("set1");
  const [selectedTask, setSelectedTask] = useState("1");
  const [showContent, setShowContent] = useState(false); // Состояние для отслеживания нажатия кнопки
  
  const handleSetChange = (event) => {
    setSelectedSet(event.target.value);
    setSelectedTask(tasksBySet[event.target.value][0]); // Сброс выбранного задания при изменении комплекта
  };

  const handleTaskChange = (event) => {
    setSelectedTask(event.target.value);
  };

  const handleClick = () => {
    setShowContent(true); // Установка состояния, показывающего контент
  };

  // Определение списков заданий для каждого комплекта
  const tasksBySet = {
    set1: ["1", "2", "3", "4", "5"],
    set2: ["6", "7", "8"],
    set3: ["9", "10", "11", "12"],
    set4: ["13", "14", "15", "16"],
    set6: ["17", "18", "19"],
  };

  let content;
  if (showContent) { // Показ контента только если кнопка была нажата
    if (selectedTask === "1") {
      content = <div>
        <img></img>
      </div>;
    } else if (selectedTask === "2") {
      content = <div>Содержимое для Комплекта №1, Задания №2</div>;
    } else if (selectedTask === "3") {
      content = <div>Содержимое для Комплекта №2, Задания №3</div>;
    } else if (selectedTask === "4") {
      content = <div>Содержимое для Комплекта №2, Задания №4</div>;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_main}>
        <h1>Решения экспериментальных заданий</h1>
        <img src={Picture_1} alt="Экспериментальное задание" />
      </div>
      <div className={styles.search}>
        <h2>Выберите задание</h2>
        <div className={styles.search_block}>
          <div className={styles.selector}>
            <h3>Комплект</h3>
            <select value={selectedSet} onChange={handleSetChange}>
              <option value="set1">Комплект №1</option>
              <option value="set2">Комплект №2</option>
              <option value="set3">Комплект №3</option>
              <option value="set4">Комплект №4</option>
              <option value="set6">Комплект №6</option>
            </select>
          </div>
          <div className={styles.selector}>
            <h3>Задание</h3>
            <select value={selectedTask} onChange={handleTaskChange}>
              {tasksBySet[selectedSet].map((task) => (
                <option key={task} value={task}>{task}</option>
              ))}
            </select>
          </div>
          <button className={styles.button} onClick={handleClick}> Найти </button>
        </div>
      </div>
      
      {showContent && (
        <div className={styles.solves}>
          <div className={styles.download}>
            <img src={Picture_2}/>
            <div className={styles.download_text}>
              
              <h2>Файлы для печати</h2>
              
              <div className={styles.links_block}>
                
                <div className={styles.link}>
                  <div className={styles.number}>1</div>
                  <p>Таблица с анализом условия задачи</p>
                  <button classname={styles.Btn}>
                    <a href={documentsData[selectedTask].link_table} target="_blank" rel="noreferrer">
                    <img src={Key}></img>
                    </a>
                  </button>
                </div>
              
                <div className={styles.link}>
                  <div className={styles.number}>2</div>
                  <p>Текстовая инструкция</p>
                  <button classname={styles.Btn}>
                    <a href={documentsData[selectedTask].link_instruction} target="_blank" rel="noreferrer">
                    <img src={Key}></img>
                    </a>
                  </button>
                </div>
              
                <div className={styles.link}>
                  <div className={styles.number}>3</div>
                  <p>Пример оформления на бланке</p>
                  <button classname={styles.Btn}>
                    <a href={documentsData[selectedTask].link_blank} target="_blank" rel="noreferrer">
                    <img src={Key}></img>
                    </a>
                  </button>
                </div>
              
                <div className={styles.link}>
                  <div className={styles.number}>4</div>
                  <p>Рисунок</p>
                  <button classname={styles.Btn}>
                    <a href={documentsData[selectedTask].link_scheme} target="_blank" rel="noreferrer">
                    <img src={Key}></img>
                    </a>
                  </button>
                </div>
              </div>
              
              <div className={styles.par}>При нажатии на кнопку скачивания вы перейдете в Яндекс Диск, 
                где можете выбрать, открыть и скачать удобный для вас тип файла (PNG, JPG, PDF)</div>
            
            </div>
          </div>
          {content}
        </div>
      )}
    </div>
  );
};

export default Solves;