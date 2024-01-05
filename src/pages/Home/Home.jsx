import React from 'react';
import styles from './Home.module.scss';
import routeMain from './routes';
import Title from 'components/Title/Title';
import List from 'components/List/List';
import newsListMocks from 'fixtures/newsListMocks';

const Home = () => {
    return (
        <section>
            <Title
                title='Всегда'
                titleRow='свежие'
                titleAccent='новости'
            />
            {newsListMocks.length > 0 && <List list={newsListMocks.slice(0,6)} />}
        </section>
    );
};
export { routeMain };

export default Home;