import {configureStore} from '@reduxjs/toolkit';
import {seriesReducer} from './state/reducer.js';

export const store = configureStore({
    reducer: {
        series: seriesReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true
});