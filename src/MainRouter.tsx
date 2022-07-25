import * as React from 'react';
import App from './App';
import Winners from './components/Winners';
import { Route, Routes } from 'react-router-dom';

function MainRouter() {
    return (
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="winners" element={<Winners />} />
    </Routes>
    )
}

export default MainRouter;