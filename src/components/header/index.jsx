import React, { useState } from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import logoImage from '../../data/header_footer/Logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_elem}>
      <div className={styles.logoContainer}>
        <Link to='/'>
          <img src={logoImage} alt="Логотип" className={styles.logo} />
        </Link>
      </div>
      <div className={styles.navbar}>
        <input type="checkbox" id="burger" className={styles.burgerCheckbox} checked={isMenuOpen} onChange={toggleMenu} />
        <label htmlFor="burger" className={styles.burger}>
          <span></span>
          <span></span>
          <span></span>
        </label>
        <nav className={`${styles.navbarLinks} ${isMenuOpen ? styles.open : ''}`}>
          <Link to='/' className={styles.links} onClick={() => setIsMenuOpen(false)}>Главная</Link>
          <Link to='/fipi' className={styles.links} onClick={() => setIsMenuOpen(false)}>ФИПИ</Link>
          <Link to='/info' className={styles.links} onClick={() => setIsMenuOpen(false)}>Об экзамене</Link>
          <Link to='/experimental-task' className={styles.links} onClick={() => setIsMenuOpen(false)}>Задание №17</Link>
          <Link to='/resources' className={styles.links} onClick={() => setIsMenuOpen(false)}>Ресурсы</Link>
          <Link to='/about' className={styles.links} onClick={() => setIsMenuOpen(false)}>О сайте</Link>
        </nav>
      </div>
      </div>
    </div>
  );
};

export default Header;
