import * as React from 'react';
import Garage from './pages/Garage';
import Winners from './pages/Winners';
import { Route, Routes } from 'react-router-dom';

function MainRouter() {
    return (
    <Routes>
        <Route path="/" element={<Garage />} />
        <Route path="winners" element={<Winners />} />
    </Routes>
    )
}

export default MainRouter;