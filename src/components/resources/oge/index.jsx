import styles from './style.module.css'
import Document from '../../../data/resources/document.png'
import Fipi from '../../../data/resources/oge/fipi.png'
import Kamzeeva from '../../../data/resources/oge/kamzeeva.jpg'
import Reshu from '../../../data/resources/oge/reshu_oge.png'

const OgeRes = () => {
    return (
    <div className={styles.container}>

        <div className={styles.container_main}>
            <div className={styles.main_text}>
                <h1>Ресурсы: ОГЭ</h1>
            </div>
            <img src={Document}></img>
        </div>

        <div className={styles.res_list}>
            <div className={styles.res_card_1}>
                <img src={Fipi}></img>
                <div className={styles.res_card_text_1}>
                    <h2>ФИПИ</h2>
                    <p>Подробнее об этом сайте говорится здесь. Учредителем «Федерального института педагогических измерений» является 
                        Рособрнадзор. ФИПИ разрабатывает задания для экзаменов. Помимо нормативно-правовых документов, на сайте размещены три 
                        самые важные документа - демоверсия, кодификатор и спецификация. Также есть открытый банк заданий ОГЭ (и не только), 
                        в котором задания по любым предметам можно фильтровать даже по темам и разделам КЭС и сразу проверять свои ответы.</p>
                    <a href='https://fipi.ru/' target="_blank" rel="noopener noreferrer"><button classname={styles.button}>Подробнее</button></a>
                </div>
            </div>
            <div className={styles.res_card_2}>
                <img src={Kamzeeva}></img>
                <div className={styles.res_card_text_2}>
                    <h2>Камзеева Е.Е: ОГЭ-2024. 30 вариантов</h2>
                    <p>Этот сборник предлагает 30 типовых экзаменационных вариантов, составленных в соответствии с проектом 
                        демоверсии КИМ ОГЭ по физике 2024 года. Ко всем заданиям даны ответы, а для второй части даже краткие решения 
                        и критерии оценивания. 
                        Варианты составлены разработчиками ОГЭ, в чем и заключается преимущество именно этого сборника.</p>
                    <a href='https://www.labirint.ru/books/960226/' target="_blank" rel="noopener noreferrer"><button classname={styles.button}>Подробнее</button></a>
                </div>
            </div>
            <div className={styles.res_card_1}>
                <img src={Reshu}></img>
                <div className={styles.res_card_text_1}>
                    <h2>Сдам ГИА: Решу ОГЭ</h2>
                    <p>Каталоги заданий разрабатываются специально для портала «РЕШУ ОГЭ». 
                        Задания для тестов берутся из открытого банка заданий ФИПИ, демонстрационных версий экзаменов, заданий 
                        прошедших экзаменов. Все используемые в системе задания снабжены ответами и подробными решениями. Из плюсов: 
                        заданий очень много и они обновляются ежемесячно; можно отбирать по заданиям и составлять варианты самостоятельно. 
                        Главным минусом является то, что портал не принадлежит самому ФИПИ, то есть задания не всегда актуальные.</p>
                    <a href='https://phys-oge.sdamgia.ru/' target="_blank" rel="noopener noreferrer"><button classname={styles.button}>Подробнее</button></a>
                </div>
            </div>
        </div>

    </div>
    );
}


export default OgeRes;