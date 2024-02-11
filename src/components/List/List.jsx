import React from 'react';
import styles from './List.module.scss';
import Item from 'components/Item/Item';

const List = ({ list }) => {
    return (
        <ul className={styles.list}>
            {list.map((news) => (
                <Item key={news._id} item={news} />
            ))}
        </ul>
    );
};
export default List;