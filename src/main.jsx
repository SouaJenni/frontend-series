import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store.js';
import { AppRoutes } from './routes/AppRoutes.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    </StrictMode>,
);




