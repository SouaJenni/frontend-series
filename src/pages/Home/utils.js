export function scroll (scrollRef, direction, setPagina, pagina) {
    if (!scrollRef.current) return;
    const scrollAmount = 200;
    if (direction === 'direita') {
        const {scrollLeft, scrollWidth, clientWidth} = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
            setPagina(pagina + 1);
        } else {
            scrollRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
        return;
    }
    scrollRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
    });
};