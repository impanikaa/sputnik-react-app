import React, { useState } from 'react';
import RutubePlayer from './rutube.jsx';
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

import table_8 from "../../../data/experimental/solves/tables/8.png";
import instruction_8 from "../../../data/experimental/solves/instructions/8.png";
import blank_8 from "../../../data/experimental/solves/blanks/8.jpg";
import scheme_8 from "../../../data/experimental/solves/schemes/8.jpg";

import table_9 from "../../../data/experimental/solves/tables/9.png";
import instruction_9 from "../../../data/experimental/solves/instructions/9.png";
import blank_9 from "../../../data/experimental/solves/blanks/9.jpg";
import scheme_9 from "../../../data/experimental/solves/schemes/9.jpg";

import table_10 from "../../../data/experimental/solves/tables/10.png";
import instruction_10 from "../../../data/experimental/solves/instructions/10.png";
import blank_10 from "../../../data/experimental/solves/blanks/10.jpg";
import scheme_10 from "../../../data/experimental/solves/schemes/10.jpg";

import table_11 from "../../../data/experimental/solves/tables/11.png";
import instruction_11 from "../../../data/experimental/solves/instructions/11.png";
import blank_11 from "../../../data/experimental/solves/blanks/11.jpg";
import scheme_11 from "../../../data/experimental/solves/schemes/11.jpg";

import table_12 from "../../../data/experimental/solves/tables/12.png";
import instruction_12 from "../../../data/experimental/solves/instructions/12.png";
import blank_12 from "../../../data/experimental/solves/blanks/12.jpg";
import scheme_12 from "../../../data/experimental/solves/schemes/12.jpg";

import table_13 from "../../../data/experimental/solves/tables/13.png";
import instruction_13 from "../../../data/experimental/solves/instructions/13.png";
import blank_13 from "../../../data/experimental/solves/blanks/13.jpg";
import scheme_13 from "../../../data/experimental/solves/schemes/13.jpg";

import table_14 from "../../../data/experimental/solves/tables/14.png";
import instruction_14 from "../../../data/experimental/solves/instructions/14.png";
import blank_14 from "../../../data/experimental/solves/blanks/14.jpg";
import scheme_14 from "../../../data/experimental/solves/schemes/14.jpg";

import table_15 from "../../../data/experimental/solves/tables/15.png";
import instruction_15 from "../../../data/experimental/solves/instructions/15.png";
import blank_15 from "../../../data/experimental/solves/blanks/15.jpg";
import scheme_15 from "../../../data/experimental/solves/schemes/15.jpg";

import table_16 from "../../../data/experimental/solves/tables/16.png";
import instruction_16 from "../../../data/experimental/solves/instructions/16.png";
import blank_16 from "../../../data/experimental/solves/blanks/16.jpg";
import scheme_16 from "../../../data/experimental/solves/schemes/16.jpg";

import table_17 from "../../../data/experimental/solves/tables/17.png";
import instruction_17 from "../../../data/experimental/solves/instructions/17.png";
import blank_17 from "../../../data/experimental/solves/blanks/17.jpg";
import scheme_17 from "../../../data/experimental/solves/schemes/17.jpg";

import table_18 from "../../../data/experimental/solves/tables/18.png";
import instruction_18 from "../../../data/experimental/solves/instructions/18.png";
import blank_18 from "../../../data/experimental/solves/blanks/18.jpg";
import scheme_18 from "../../../data/experimental/solves/schemes/18.jpg";

import table_19 from "../../../data/experimental/solves/tables/19.png";
import instruction_19 from "../../../data/experimental/solves/instructions/19.png";
import blank_19 from "../../../data/experimental/solves/blanks/19.jpg";
import scheme_19 from "../../../data/experimental/solves/schemes/19.jpg";

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
        <iframe width="60vw" height="33.75vw" src="https://rutube.ru/play/embed/06e2f3e554a6811077668ecbb3351be0" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        <img src={table_1}/>
        <img src={instruction_1}/>
        <img src={blank_1}/>
        <img src={scheme_1}/>
      </div>;
    } else if (selectedTask === "2") {
      content = <div className={styles.documents}>
        <RutubePlayer videoUrl={documentsData[selectedTask].video_url} />
        <iframe width="60vw" height="33.75vw" src="https://rutube.ru/video/601889c43dac88216830844b86d6203a/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        <img src={table_2}/>
        <img src={instruction_2}/>
        <img src={blank_2}/>
        <img src={scheme_2}/>
      </div>;
    } else if (selectedTask === "3") {
      content = <div className={styles.documents}>
        <RutubePlayer videoUrl={documentsData[selectedTask].video_url} />
        <iframe width="60vw" height="33.75vw" src="https://rutube.ru/video/3fa3d7fce4721b507ec283c725cc88e8/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        <img src={table_3}/>
        <img src={instruction_3}/>
        <img src={blank_3}/>
        <img src={scheme_3}/>
      </div>;
    } else if (selectedTask === "4") {
      content = <div className={styles.documents}>
        <RutubePlayer videoUrl={documentsData[selectedTask].video_url} />
        <iframe width="60vw" height="33.75vw" src="https://rutube.ru/video/806be81727250c52515674188b8773c1/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        <img src={table_4}/>
        <img src={instruction_4}/>
        <img src={blank_4}/>
        <img src={scheme_4}/>
      </div>;
    } else if (selectedTask === "5") {
      content = <div className={styles.documents}>
        <RutubePlayer videoUrl={documentsData[selectedTask].video_url} />
        <iframe width="60vw" height="33.75vw" src="https://rutube.ru/video/8eb16996f198bcd44f0a86349c59852c/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        <img src={table_5}/>
        <img src={instruction_5}/>
        <img src={blank_5}/>
        <img src={scheme_5}/>
      </div>;
    } else if (selectedTask === "6") {
      content = <div className={styles.documents}>
        <RutubePlayer videoUrl={documentsData[selectedTask].video_url} />
        <iframe width="60vw" height="33.75vw" src="https://rutube.ru/video/c27c8aeeec4d46275c7e4c6df53ce043/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        <img src={table_6}/>
        <img src={instruction_6}/>
        <img src={blank_6}/>
        <img src={scheme_6}/>
      </div>;
    } else if (selectedTask === "7") {
      content = <div className={styles.documents}>
        <RutubePlayer videoUrl={documentsData[selectedTask].video_url} />
        <iframe width="60vw" height="33.75vw" src="https://rutube.ru/video/34eb61b20b859a6a38cffff3c83221e5/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        <img src={table_7}/>
        <img src={instruction_7}/>
        <img src={blank_7}/>
        <img src={scheme_7}/>
      </div>;
    } else if (selectedTask === "8") {
      content = <div className={styles.documents}>
        <RutubePlayer videoUrl={documentsData[selectedTask].video_url} />
        <iframe width="60vw" height="33.75vw" src="https://rutube.ru/video/a77335bbca96143cea1a7431e8b2e9e2/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        <img src={table_8}/>
        <img src={instruction_8}/>
        <img src={blank_8}/>
        <img src={scheme_8}/>
      </div>;
    } else if (selectedTask === "9") {
      content = <div className={styles.documents}>
        <RutubePlayer videoUrl={documentsData[selectedTask].video_url} />
        <iframe width="60vw" height="33.75vw" src="https://rutube.ru/video/c3baef3d4aa05efdbb85090721706e17/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        <img src={table_9}/>
        <img src={instruction_9}/>
        <img src={blank_9}/>
        <img src={scheme_9}/>
      </div>;
    } else if (selectedTask === "10") {
      content = <div className={styles.documents}>
        <RutubePlayer videoUrl={documentsData[selectedTask].video_url} />
        <iframe width="60vw" height="33.75vw" src="https://rutube.ru/video/53c2f5c49a449ffda71f70292d380e17/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        <img src={table_10}/>
        <img src={instruction_10}/>
        <img src={blank_10}/>
        <img src={scheme_10}/>
      </div>;
    } else if (selectedTask === "11") {
      content = <div className={styles.documents}>
        <RutubePlayer videoUrl={documentsData[selectedTask].video_url} />
        <iframe width="60vw" height="33.75vw" src="https://rutube.ru/video/882ea17a205b02a8d42aa70dcc410545/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        <img src={table_11}/>
        <img src={instruction_11}/>
        <img src={blank_11}/>
        <img src={scheme_11}/>
      </div>;
    } else if (selectedTask === "12") {
      content = <div className={styles.documents}>
        <RutubePlayer videoUrl={documentsData[selectedTask].video_url} />
        <iframe width="60vw" height="33.75vw" src="https://rutube.ru/video/da00bb09a60b2e1d5c2f682bd8b03dac/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        <img src={table_12}/>
        <img src={instruction_12}/>
        <img src={blank_12}/>
        <img src={scheme_12}/>
      </div>;
    } else if (selectedTask === "13") {
      content = <div className={styles.documents}>
        <RutubePlayer videoUrl={documentsData[selectedTask].video_url} />
        <iframe width="60vw" height="33.75vw" src="https://rutube.ru/video/4664af43eb40b52e24a63db4f3acb2f5/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        <img src={table_13}/>
        <img src={instruction_13}/>
        <img src={blank_13}/>
        <img src={scheme_13}/>
      </div>;
    } else if (selectedTask === "14") {
      content = <div className={styles.documents}>
        <RutubePlayer videoUrl={documentsData[selectedTask].video_url} />
        <iframe width="60vw" height="33.75vw" src="https://rutube.ru/video/10b7fa7582db78a928b17d855d3eb3ad/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        <img src={table_14}/>
        <img src={instruction_14}/>
        <img src={blank_14}/>
        <img src={scheme_14}/>
      </div>;
    } else if (selectedTask === "15") {
      content = <div className={styles.documents}>
        <RutubePlayer videoUrl={documentsData[selectedTask].video_url} />
        <iframe width="60vw" height="33.75vw" src="https://rutube.ru/video/1dd2109601d693353edab9e60100c836/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        <img src={table_15}/>
        <img src={instruction_15}/>
        <img src={blank_15}/>
        <img src={scheme_15}/>
      </div>;
    } else if (selectedTask === "16") {
      content = <div className={styles.documents}>
        <RutubePlayer videoUrl={documentsData[selectedTask].video_url} />
        <iframe width="60vw" height="33.75vw" src="https://rutube.ru/video/3510cd68330ae1eea031b59ef48d2a0f/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        <img src={table_16}/>
        <img src={instruction_16}/>
        <img src={blank_16}/>
        <img src={scheme_16}/>
      </div>;
    } else if (selectedTask === "17") {
      content = <div className={styles.documents}>
        <RutubePlayer videoUrl={documentsData[selectedTask].video_url} />
        <iframe width="60vw" height="33.75vw" src="https://rutube.ru/video/72df5701f671ce0fb05ae563c3abf946/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        <img src={table_17}/>
        <img src={instruction_17}/>
        <img src={blank_17}/>
        <img src={scheme_17}/>
      </div>;
    } else if (selectedTask === "18") {
      content = <div className={styles.documents}>
        <RutubePlayer videoUrl={documentsData[selectedTask].video_url} />
        <iframe width="60vw" height="33.75vw" src="https://rutube.ru/video/811f988f05f6db545fff097d9048d94f/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        <img src={table_18}/>
        <img src={instruction_18}/>
        <img src={blank_18}/>
        <img src={scheme_18}/>
      </div>;
    } else if (selectedTask === "19") {
      content = <div className={styles.documents}>
        <RutubePlayer videoUrl={documentsData[selectedTask].video_url} />
        <iframe width="60vw" height="33.75vw" src="https://rutube.ru/video/7f1d31734a2552077f6cc9e2e9a40a31/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        <img src={table_19}/>
        <img src={instruction_19}/>
        <img src={blank_19}/>
        <img src={scheme_19}/>
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
            <select value={selectedTask} onChange={handleTaskChange} className={styles.select_elem}>
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