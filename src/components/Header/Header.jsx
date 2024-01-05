import React from "react";
import styles from './Header.module.scss';
import { NavLink } from "react-router-dom";
import { routeMain as routeHome } from 'pages/Home/Home';
import { routeMain as routeContacts } from 'pages/Contacts/Contacts';
import { routeMain as routeNewsList } from 'pages/NewsList/NewsList';

const Header = () => {
    return (
        <header className={styles.wrapper}>
            <span className={styles.logo}>Новостник</span>
            <nav className={styles.menu}>
                <ul className={styles.list}>
                    <li className={styles.item}><NavLink to={routeHome()}>Главная</NavLink></li>
                    <li className={styles.item}><NavLink to={routeNewsList()}>Новости</NavLink></li>
                    <li className={styles.item}><NavLink to={routeContacts()}>Контакты</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;