import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';

import { EditSerie, Home, AddSerie } from '../pages';

export function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/cadastrar' element={<AddSerie/>} />
                <Route path='/atualizar/:id' element={<EditSerie/>} />
            </Routes>
        </BrowserRouter>
    );
}