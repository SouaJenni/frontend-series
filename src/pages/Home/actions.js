export function seriesSalvas(query) {
    return async (dispatch) => {
        const response = await fetch(`/api/series?page=${query.page}&limit=5`);
        if (!response.ok) {
            return;
        }
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