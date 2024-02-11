import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Home.module.scss';
import routeMain from './routes';
import Title from 'components/Title/Title';
import List from 'components/List/List';
import getNews from 'services/getNews';

const Home = () => {
    const [newsList, setNewsList] = useState([]);
    useEffect(() => {
        getNews().then(response => {
            setNewsList(response.data.articles)
        })
    }, [])
    return (
        <section>
            <Title
                title='Всегда'
                titleRow='свежие'
                titleAccent='новости'
            />
            {newsList.length > 0 && <List list={newsList.slice(0, 6)} />}
        </section>
    );
};
export { routeMain };

export default Home;