import React from "react";
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <p className={styles.name}><strong>Новостник</strong>Single Page Application</p>
            <p className={styles.center}>Дипломный проект</p>
            <p className={styles.author}>Made by <strong>Иван Петров</strong></p>
        </footer>
    );
};

export default Footer;