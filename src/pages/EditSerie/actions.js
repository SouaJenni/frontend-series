import {getSerieId} from './selectors.js';
import {setSerie} from '../../state/actions.js';
import {getNotaUsuario, getSerie} from '../../state/selectors.js';

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

export function atualizarSerie(id, navigate) {
    return async (dispatch, getState) => {
        const state = getState();
        const serie = getSerie(getState());
        const serieId = getSerieId(state);
        const notaUsuario = getNotaUsuario(getState());

        const serieAtualizada = {
            ...serie,
            notaUsuario: notaUsuario || 3,
        };

        try {
            const result = await fetch(`/api/series/${serieId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(serieAtualizada),
            });

            if (!result.ok) {
                const error = await result.json();
                alert(error.detail);
                return;
            }

            alert('Série/Filme atualizada com sucesso!');
            navigate('/');
        } catch (err) {
            alert(`Erro: ${err.message}`);
        }
    };
}

export function deletarSerie(id, navigate) {
    return async (dispatch, getState) => {
        const state = getState();
        const serieId = getSerieId(state);

        const confirmacao = window.confirm('Tem certeza que deseja deletar esta série?');
        if (!confirmacao) return;

        try {
            const resposta = await fetch(`/api/series/${serieId}`, {
                method: 'DELETE',
            });
            console.log(serieId);

            if (!resposta.ok) {
                const erro = await resposta.json();
                alert(erro.detail);
                return;
            }

            alert('Série/Filme deletado com sucesso!');
            navigate('/');
        } catch (erro) {
            alert('Erro ao conectar com o servidor.');
            console.error(erro);
        }
    };
}
