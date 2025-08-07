import {LIMITE_SERIES} from "./utils.js";

export function seriesSalvas(query) {
    return async (dispatch) => {
        const response = await fetch(`/api/series?page=${query.page}&limit=${LIMITE_SERIES}`);
        if (!response.ok) {
            return;
        }
        const totalSeries = response.headers.get('total-series');
        dispatch(setTotalSeries(totalSeries));
        const minhasSeries = await response.json();
        dispatch(setMinhasSeries(minhasSeries));
    };
}

function setMinhasSeries(minhasSeries) {
    return {
        type: 'SET_MINHAS_SERIES',
        payload: minhasSeries
    };
}

export function resetMinhasSeries() {
    return {
        type: 'RESET_MINHAS_SERIES'
    };
}

export function setTotalSeries(totalSeries) {
    return {
        type: 'SET_TOTAL_SERIES',
        payload: totalSeries
    };
}