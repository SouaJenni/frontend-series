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
            serie: action.payload
        };
    case 'SET_SERIE_ID':
        return {
            ...state,
            serieId: action.payload
        };
    case 'SET_COMENTARIO':
        return {
            ...state,
            serie: {...state.serie, comentario: action.payload}
        };
    case 'SET_NOTA':
        return {
            ...state,
            serie: {...state.serie, notaUsuario: action.payload}
        };
    case 'SET_MINHAS_SERIES':
        return {
            ...state,
            series: [...state.series, ...action.payload]
        };
    case 'RESET_MINHAS_SERIES':
        return {
            ...state,
            series: []
        };
    default:
        return state;
    }
};