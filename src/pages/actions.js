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

export function setSerie(serie) {
    return {
        type: 'SET_SERIE',
        payload: serie
    };
}