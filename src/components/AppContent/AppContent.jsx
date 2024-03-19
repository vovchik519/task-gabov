import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import styles from './AppContent.module.scss'
import Home, { routeMain as routeHome } from 'pages/Home/Home';
import Error, { routeMain as routeError } from 'pages/Error/Error';

function AppContent() {
    return (
        <div className={styles.wrapper}>
            <main>
                <Routes>
                    <Route exact path={routeHome()} element={<Home />} />
                    <Route exact path={routeError()} element={<Error />} />
                    <Route path="*" element={<Navigate to={routeError()} />} />
                </Routes>
            </main>
        </div>
    );
}

export default AppContent;