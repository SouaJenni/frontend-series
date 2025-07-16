import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store.js';
import { AppRoutes } from './routes/AppRoutes.jsx';

import './index.css';
import './components/botao.css';
import './pages/addSerie.css';
import './pages/menuFlutuante.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    </StrictMode>,
);




