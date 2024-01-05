import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import styles from './AppContent.module.scss'
import Home, { routeMain as routeHome } from 'pages/Home/Home';
import Contacts, { routeMain as routeContacts } from 'pages/Contacts/Contacts';
import NewsList, { routeMain as routeNewsList } from 'pages/NewsList/NewsList';
import NewsDetail, { routeMain as routeNewsDetail } from 'pages/NewsDetail/NewsDetail';
import Error, { routeMain as routeError } from 'pages/Error/Error';

function AppContent() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main>
                <Routes>
                    <Route exact path={routeHome()} element={<Home />} />
                    <Route exact path={routeContacts()} element={<Contacts />} />
                    <Route exact path={routeNewsList()} element={<NewsList />} />
                    <Route exact path={routeNewsDetail()} element={<NewsDetail />} />
                    <Route exact path={routeError()} element={<Error />} />
                    <Route path="*" element={<Navigate to={routeError()} />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default AppContent;