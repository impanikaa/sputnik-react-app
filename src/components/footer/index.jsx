import styles from './style.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <Link to='/' className={styles.links}>Главная</Link>
        <Link to='/fipi' className={styles.links}>ФИПИ</Link>
        <Link to='/info' className={styles.links}>Об экзамене</Link>
        <Link to='/experimental-task' className={styles.links}>Задание №17</Link>
        <Link to='/resources' className={styles.links}>Ресурсы</Link>
      </nav>
    </div>
  );
};

export default Footer;
