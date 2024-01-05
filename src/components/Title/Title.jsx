import React from 'react';
import styles from './Title.module.scss';

const Title = ({ title, titleAccent, titleRow }) => {
    return (
        <h1 className={styles.title}>
            {title}
            <span className={styles.row}>
                <span>{titleRow}</span>
                <em>{titleAccent}</em>
            </span>
        </h1>
    );
};
export default Title;