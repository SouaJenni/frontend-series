import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';

import { App } from '../App.jsx';
import { AddSerie } from '../pages/AddSerie.jsx';
// import { EditSerie } from '../pages/EditSerie.jsx';

export function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>} />
                <Route path='/cadastrar' element={<AddSerie/>} />
                {/*<Route path='/atualizar' element={<EditSerie/>} />*/}
            </Routes>
        </BrowserRouter>
    );
}