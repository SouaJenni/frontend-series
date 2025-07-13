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
    default:
        return state;
    }
};