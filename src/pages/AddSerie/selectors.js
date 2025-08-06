export function getSugestoes(state) {
    return state.series.sugestoes;
}

export function getComentario(state) {
    return state.series.serie?.comentario || '';
}

export function getNotaUsuario(state) {
    return state.series.serie?.notaUsuario || 3;
}