import React from 'react';
import styles from './Contacts.module.scss';
import routeMain from './routes';
import imageAuthor from 'assets/image/author.jpg'
const Contacts = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.info}>
                <a className={styles.phone} href="tel:+79991234576">+7 (999) 123 45 76</a>
                <div className={styles.name}>
                    <p>Петров
                        Иван</p>
                </div>
                <a className={styles.email} href="mailto:mail@domain.com">mail@domain.com</a>
                <div>
                    <p className={styles.opacity}>JavaScript разработчик</p>
                    <div className={styles.stack}>
                        <abbr title='ES5 является официальным названием обновления спецификации ECMAScript, опубликованной в 2009 году'>ES5</abbr>
                        <abbr title='ES6 это цикл статей о новых возможностях языка программирования JavaScript, появившихся в 6 редакции стандарта ECMAScript'>ES6</abbr>
                        <span>React</span>
                    </div>
                </div>
            </div>
            <div className={styles.image}>
                <img src={imageAuthor} alt="Черное белое фотография человека с длинными светлыми волосами" />
            </div>
        </section>
    );
};
export { routeMain };

export default Contacts;