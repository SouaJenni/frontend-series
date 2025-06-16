import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux';

import './index.css';
import {store} from './store.js';
import {Roteador} from './routes/AppRoutes.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <Roteador />
        </Provider>
    </StrictMode>,
);




