import React from 'react';
import styles from './NewsList.module.scss';
import routeMain from './routes';
import Title from 'components/Title/Title';

const NewsList = () => {
    return (
        <section>
            <Title
                title='Быть'
                titleRow='в курсе'
                titleAccent='событий'
            />
        </section>
    );
};

export { routeMain };

export default NewsList;