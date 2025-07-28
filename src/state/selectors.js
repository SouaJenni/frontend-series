export function getSugestoes(state) {
    return state.series.sugestoes;
}

export function getSeries(state) {
    return state.series.series;
}

export function getComentario(state) {
    return state.series.series?.comentario || '';
}

export function getNotaUsuario(state) {
    return state.series.series?.notaUsuario || 3;
}

export function getMinhasSeries(state) {
    return state.series.series;
}
