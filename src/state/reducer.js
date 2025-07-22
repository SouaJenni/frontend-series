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
            series: [...state.series, action.payload]
        };
    default:
        return state;
    }
};