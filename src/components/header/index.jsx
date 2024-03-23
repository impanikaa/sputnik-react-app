import styles from './style.module.css';
import { Link } from 'react-router-dom';
import logoImage from '../../data/header_footer/Logo.png'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className='logo-container'>
      <Link to='/' className={styles.links}><img src={logoImage} alt="Логотип" className={styles.logo} /></Link>
      </div>
      <nav className={styles.navbar}>
        <Link to='/' className={styles.links}>Главная</Link>
        <Link to='/fipi' className={styles.links}>ФИПИ</Link>
        <Link to='/exam' className={styles.links}>Об экзамене</Link>
        <Link to='/practice' className={styles.links}>Задание №17</Link>
        <Link to='/resorces' className={styles.links}>Ресурсы</Link>
        <Link to='/about' className={styles.links}>О сайте</Link>
      </nav>
    </div>
  );
};

export default Footer;
