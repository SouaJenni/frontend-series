export function buscarSugestoes(query) {
    return async (dispatch) => {
        const response = await fetch(`api/series/sugestoes/busca?q=${encodeURIComponent(query)}`);
        if(!response.ok){
            return;
        }
        const sugestoes = await response.json();
        console.log('sugestoes', sugestoes);
        dispatch(setSugestoes(sugestoes));
    };
}

function setSugestoes(sugestoes) {
    return {
        type: 'BUSCAR_SUGESTOES',
        payload: sugestoes
    };
}