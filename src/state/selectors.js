export function getSugestoes(state) {
    return state.series.sugestoes;
}

export function getSerie(state) {
    return state.series.serie;
}

export function getComentario(state) {
    return state.series.serie?.comentario || '';
}

export function getNotaUsuario(state) {
    return state.series.serie?.notaUsuario || 3;
}

export function getMinhasSeries(state) {
    return state.series.series;
}
