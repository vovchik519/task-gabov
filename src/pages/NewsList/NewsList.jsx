import React, { useEffect, useState } from 'react';
import styles from './NewsList.module.scss';
import routeMain from './routes';
import Title from 'components/Title/Title';
import List from 'components/List/List';
import getNews from 'services/getNews';

const NewsList = () => {
    const [newsList, setNewsList] = useState([]);
    useEffect(() => {
        getNews().then(response => {
            setNewsList(response.data.articles)
        })
    }, [])
    return (
        <section>
            <Title
                title='Быть'
                titleRow='в курсе'
                titleAccent='событий'
            />
            {newsList.length > 0 && <List list={newsList} />}
        </section>
    );
};

export { routeMain };

export default NewsList;