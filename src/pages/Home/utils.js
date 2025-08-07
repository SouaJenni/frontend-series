export const LIMITE_SERIES = 5;

export function scroll (scrollRef, direction, setPagina, pagina, setDisabledEsquerda, setDisabledDireita, totalSeries) {
    if (!scrollRef.current) return;
    const scrollAmount = 200;
    if (direction === 'direita') {
        const {scrollLeft, scrollWidth, clientWidth} = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
            const isUltimaPagina = pagina === Math.ceil(totalSeries / LIMITE_SERIES);
            if (isUltimaPagina) {
                setDisabledDireita(true);
            } else {
                setPagina(pagina + 1);
            }
        } else {
            scrollRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });
            setDisabledEsquerda(false);
        }
        return;
    }
    setDisabledDireita(false);
    scrollRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
    });
    const scrollEsquerda = scrollRef.current.scrollLeft;
    if(scrollEsquerda < scrollAmount) {
        setDisabledEsquerda(true);
    }
};