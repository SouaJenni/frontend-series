import {getNotaUsuario, getSerie} from './selectors.js';

export function buscarSugestoes(query) {
    return async (dispatch) => {
        const response = await fetch(`/api/series/sugestoes/busca?q=${encodeURIComponent(query)}`);
        if(!response.ok){
            return;
        }
        const sugestoes = await response.json();
        dispatch(setSugestoes(sugestoes));
    };
}

export function salvarSerie(navigate) {
    return async (dispatch, getState) => {
        const serie = getSerie(getState());
        const notaUsuario = getNotaUsuario(getState());

        if (!serie.titulo) {
            alert('Você deve selecionar uma série ou filme antes de salvar.');
            return;
        }
        serie.notaUsuario = notaUsuario || 3;
        try {
            const result = await fetch('/api/series', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(serie)
            });
            if(!result.ok){
                const error = await result.json();
                alert(error.detail);
                return;
            }
            alert('Série/Filme salvo com sucesso!');
            navigate('/');
        } catch (err) {
            alert(err);
        }
    };
}

export function setSugestoes(sugestoes) {
    return {
        type: 'BUSCAR_SUGESTOES',
        payload: sugestoes
    };
}

export function setSerie(serie) {
    return {
        type: 'SET_SERIE',
        payload: serie
    };
}

export function setComentario(comentario) {
    return {
        type: 'SET_COMENTARIO',
        payload: comentario
    };
}

export function setNotaUsuario(notaUsuario) {
    return {
        type: 'SET_NOTA',
        payload: notaUsuario
    };
}

