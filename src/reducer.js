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
    case 'SET_COMENTARIO': {
        const novaSerie = {...state.serie, comentario: action.payload};
        return {
            ...state,
            serie: novaSerie
        };
    }
    case 'SET_NOTA': {
        const novaSerie = {...state.serie, notaUsuario: action.payload};
        return {
            ...state,
            serie: novaSerie
        };
    }
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