import styles from './style.module.css';
import { Link } from 'react-router-dom';
import Picture_1 from '../../data/header_footer/Picture_1.png'
import logoImage from '../../data/header_footer/Logo.png'

const Footer = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <Link to='/' className={styles.links}>На главную</Link>
        <Link to='/about' className={styles.links}>О сайте</Link>
        <Link to='/info' className={styles.links}>Об экзамене</Link>
        <Link to='/experimental-task' className={styles.links}>Задание №17</Link>
        <Link to='/resources' className={styles.links}>Ресурсы для подготовки</Link>
      </nav>
      <div className={styles.line}></div>
      <img src={Picture_1} className={styles.picture} alt='картинка'></img>
      <div className={styles.text_logo}>
        <p className={styles.text}>Смело. Ответственно. Креативно.</p>
        <Link to='/'><img src={logoImage} alt="Логотип" className={styles.logo} /></Link>
      </div>
    </div>
  );
};

export default Footer;
