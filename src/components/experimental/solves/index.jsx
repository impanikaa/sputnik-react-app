import React, { useState } from 'react';
import YouTube from 'react-youtube';
import styles from './style.module.css';
import documentsData from './documents.json';
import Picture_1 from '../../../data/experimental/solves/picture_1.png';
import Picture_2 from '../../../data/experimental/solves/picture_2.png';
import Key from '../../../data/experimental/solves/key.png';

import table_1 from "../../../data/experimental/solves/tables/1.png";
import instruction_1 from "../../../data/experimental/solves/instructions/1.png";
import blank_1 from "../../../data/experimental/solves/blanks/1.jpg";
import scheme_1 from "../../../data/experimental/solves/schemes/1.jpg";

import table_2 from "../../../data/experimental/solves/tables/2.png";
import instruction_2 from "../../../data/experimental/solves/instructions/2.png";
import blank_2 from "../../../data/experimental/solves/blanks/2.jpg";
import scheme_2 from "../../../data/experimental/solves/schemes/2.jpg";

import table_3 from "../../../data/experimental/solves/tables/3.png";
import instruction_3 from "../../../data/experimental/solves/instructions/3.png";
import blank_3 from "../../../data/experimental/solves/blanks/3.jpg";
import scheme_3 from "../../../data/experimental/solves/schemes/3.jpg";

import table_4 from "../../../data/experimental/solves/tables/4.png";
import instruction_4 from "../../../data/experimental/solves/instructions/4.png";
import blank_4 from "../../../data/experimental/solves/blanks/4.jpg";
import scheme_4 from "../../../data/experimental/solves/schemes/4.jpg";

import table_5 from "../../../data/experimental/solves/tables/5.png";
import instruction_5 from "../../../data/experimental/solves/instructions/5.png";
import blank_5 from "../../../data/experimental/solves/blanks/5.jpg";
import scheme_5 from "../../../data/experimental/solves/schemes/5.jpg";

import table_6 from "../../../data/experimental/solves/tables/6.png";
import instruction_6 from "../../../data/experimental/solves/instructions/6.png";
import blank_6 from "../../../data/experimental/solves/blanks/6.jpg";
import scheme_6 from "../../../data/experimental/solves/schemes/6.jpg";

import table_7 from "../../../data/experimental/solves/tables/7.png";
import instruction_7 from "../../../data/experimental/solves/instructions/7.png";
import blank_7 from "../../../data/experimental/solves/blanks/7.jpg";
import scheme_7 from "../../../data/experimental/solves/schemes/7.jpg";

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
      content = <div className={styles.documents}>
        <YouTube videoId={documentsData[selectedTask].video_id} className={styles.video}/>
        <img src={table_1}/>
        <img src={instruction_1}/>
        <img src={blank_1}/>
        <img src={scheme_1}/>
      </div>;
    } else if (selectedTask === "2") {
      content = <div className={styles.documents}>
        <YouTube videoId={documentsData[selectedTask].video_id} className={styles.video}/>
        <img src={table_2}/>
        <img src={instruction_2}/>
        <img src={blank_2}/>
        <img src={scheme_2}/>
      </div>;
    } else if (selectedTask === "3") {
      content = <div className={styles.documents}>
        <YouTube videoId={documentsData[selectedTask].video_id} className={styles.video}/>
        <img src={table_3}/>
        <img src={instruction_3}/>
        <img src={blank_3}/>
        <img src={scheme_3}/>
      </div>;
    } else if (selectedTask === "4") {
      content = <div className={styles.documents}>
        <YouTube videoId={documentsData[selectedTask].video_id} className={styles.video}/>
        <img src={table_4}/>
        <img src={instruction_4}/>
        <img src={blank_4}/>
        <img src={scheme_4}/>
      </div>;
    } else if (selectedTask === "5") {
      content = <div className={styles.documents}>
        <YouTube videoId={documentsData[selectedTask].video_id} className={styles.video}/>
        <img src={table_5}/>
        <img src={instruction_5}/>
        <img src={blank_5}/>
        <img src={scheme_5}/>
      </div>;
    } else if (selectedTask === "6") {
      content = <div className={styles.documents}>
        <YouTube videoId={documentsData[selectedTask].video_id} className={styles.video}/>
        <img src={table_6}/>
        <img src={instruction_6}/>
        <img src={blank_6}/>
        <img src={scheme_6}/>
      </div>;
    } else if (selectedTask === "7") {
      content = <div className={styles.documents}>
        <YouTube videoId={documentsData[selectedTask].video_id} className={styles.video}/>
        <img src={table_7}/>
        <img src={instruction_7}/>
        <img src={blank_7}/>
        <img src={scheme_7}/>
      </div>;
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