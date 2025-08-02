import {getSerieId} from './selectors.js';
import {setSerie} from '../../state/actions.js';

export function fetchSerieById(){
    return async (dispatch, getState) => {
        const state = getState();
        const serieId = getSerieId(state);
        if (!serieId) {
            alert('ID da série/filme não encontrado.');
            return;
        }
        try {
            const response = await fetch(`/api/series/${serieId}`);
            if (!response.ok) {
                const error = await response.json();
                alert(error.detail);
                return;
            }
            const serie = await response.json();
            dispatch(setSerie(serie));
        }catch(err) {
            alert(`Erro ao buscar série/filme: ${err.message}`);
        }
    };
}

export function setSerieId(id){
    return {
        type: 'SET_SERIE_ID',
        payload: id
    };
}