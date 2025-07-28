const estadoInicial = {
    sugestoes: [],
    series: [],
};

export const seriesReducer = (state = estadoInicial, action) => {
    switch (action.type) {
    case 'BUSCAR_SUGESTOES':
        return{
            ...state,
            sugestoes: action.payload
        };
    case 'SET_SERIE':
        return {
            ...state,
            series: action.payload
        };
    case 'SET_COMENTARIO':
        return {
            ...state,
            series: {...state.series, comentario: action.payload}
        };
    case 'SET_NOTA':
        return {
            ...state,
            series: {...state.series, notaUsuario: action.payload}
        };
    case 'SET_MINHAS_SERIES':
        return {
            ...state,
            series: action.payload
        };
    default:
        return state;
    }
};