import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Item.module.scss';
import DataView from 'components/DateView/DateView';
import { routeMain as routeNewsDetail } from 'pages/NewsDetail/NewsDetail';

const Item = ({ item }) => {
    return (
        <li className={styles.item}>
            <NavLink to={routeNewsDetail(item._id)}>
                <div className={styles.title}>
                    <h3>{item.title}</h3>
                </div>
            </NavLink>
            <div className={styles.bottom}>
                <a href={item.link}>{item.clean_url}</a>
                {<DataView date={item.published_date} />}
            </div>
        </li>
    );
};
export default Item;