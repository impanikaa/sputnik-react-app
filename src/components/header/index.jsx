import { useLocalStorage } from '../../hook/useLocalstorage';
import Exit from './exit';
import styles from './style.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [, setUser] = useLocalStorage('USER');
  
  const handleLogout = () => {
    setUser('');
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <Link to='/' className={styles.links}>Главная страница</Link>
        <Link to='/chat' className={styles.links}>Чат</Link>
        <Link to='/test' className={styles.links}>Данные</Link>
        <Link to='/' className={styles.links} onClick={handleLogout}>
          <Exit></Exit>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
