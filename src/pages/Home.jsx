import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {Button, Card, H3, Tooltip} from '@blueprintjs/core';

import {Botao} from '../components/Botao.jsx';
import {Estrelas} from '../components/Estrelas.jsx';
import {getMinhasSeries} from '../state/selectors.js';
import {resetMinhasSeries, seriesSalvas} from '../state/actions.js';
import {funcaoScroll} from './Utils.js';

export function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const minhasSeries = useSelector(getMinhasSeries);
    const scrollRef = useRef(null);
    const [pagina, setPagina] = useState(null);

    useEffect(() => {
        if(pagina === null){
            setPagina(1);
            return;
        }
        dispatch(seriesSalvas({page: pagina}));
    }, [pagina]);

    useEffect(() => {
        return () => {
            dispatch(resetMinhasSeries());
        };
    }, []);

    const handleCadastrarClick = () => {
        navigate('/cadastrar');
    };

    const scroll = (direction) => {
        funcaoScroll(scrollRef, direction, setPagina, pagina);
    };

    return (
        <div className="bp5-dark">
            <div style={{display: 'flex'}}>
                <Button icon={'caret-left'} title={'Flecha-para-esquerda'} onClick={() => scroll('esquerda')}/>
                <div ref={scrollRef} style={{display: 'flex', overflowX: 'hidden'}}>
                    {minhasSeries.map((serie, index) => (
                        <Card key={index}>
                            <img src={serie.capa} alt={serie.titulo} style={{width:'200px'}}/>
                            <H3>{serie.titulo}</H3>
                            <p>{serie.ano}</p>
                            <Tooltip
                                content={`Nota IMDb: ${serie.notaImdb.toFixed(2)}`}
                            >
                                <Estrelas active={serie.notaImdb}/>
                            </Tooltip>
                            <Tooltip
                                content={`Sua nota: ${serie.notaUsuario}`}
                            >
                                <Estrelas active={serie.notaUsuario}/>
                            </Tooltip>
                        </Card>
                    ))}
                </div>
                <Button icon={'caret-right'} title={'Flecha-para-direita'} onClick={() => scroll('direita')}/>
            </div>
            <Botao texto='Cadastrar' title='Cadastrar' onClick={handleCadastrarClick} intent='primary' />
        </div>
    );
}



