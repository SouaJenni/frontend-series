export function getMinhasSeries(state) {
    return state.series.series;
}

export function getTotalSeries(state) {
    return state.series.totalSeries || 0;
}