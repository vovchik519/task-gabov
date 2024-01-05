import React from 'react';
import styles from './Item.module.scss';

const Item = ({ item }) => {
    return (
        <li className={styles.item}>
            <div className={styles.title}>
            <h3>{item.title}</h3>
            </div>
            <div className={styles.bottom}>
                <a href={`https:${item.source}`}>{item.source}</a>
                <p>{item.date} <span> {item.dateTwo}</span></p>
            </div>
        </li>
    );
};
export default Item;