import React, { useEffect, useState } from 'react';
import styles from './NewsDetail.module.scss';
import routeMain from './routes';
import getNews from 'services/getNews';
import { useParams } from 'react-router-dom';
import DataView from 'components/DateView/DateView';

const NewsDetail = () => {
    const { id } = useParams();
    const [news, setNews] = useState('')
    useEffect(() => {
        getNews().then(response => {
            setNews(response.data.articles.find(item => item._id === id))
        })
    }, [id])
    return (
        <section className={styles.wrapper}>
            <div>
                {news.title}
                <a href={news.link}>{news.clean_url}</a>
                {<DataView date={news.published_date} />}
            </div>
            <div>
                <img src={news.media} alt="image" />
                <p>{news.summary}</p>
            </div>
        </section>
    );
};
export { routeMain };

export default NewsDetail;