import { Route, Routes } from 'react-router-dom';

import Events from '../pages/events';


export function EventsRoute() {
    return (
        <Routes>
            <Route path='/' element={<Events />} />

        </Routes>
    );
}