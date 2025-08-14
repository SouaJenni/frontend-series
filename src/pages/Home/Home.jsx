import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {Button, Card, H1, H3, Intent, Tooltip} from '@blueprintjs/core';

import {resetMinhasSeries, seriesSalvas} from './actions.js';
import {getMinhasSeries, getTotalSeries} from './selectors.js';
import { scroll} from './utils.js';
import {Botao} from '../../components/Botao.jsx';
import {Estrelas} from '../../components/Estrelas.jsx';

export function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const minhasSeries = useSelector(getMinhasSeries);
    const totalSeries = useSelector(getTotalSeries);
    const scrollRef = useRef(null);
    const [pagina, setPagina] = useState(null);
    const [disabledEsquerda, setDisabledEsquerda] = useState(true);
    const [disabledDireita, setDisabledDireita] = useState(false);

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

    const scrollParams = {
        scrollRef,
        setPagina,
        pagina,
        setDisabledEsquerda,
        setDisabledDireita,
        totalSeries};

    return (
        <div className="bp5-dark">
            <H1>SEU CATÁLOGO</H1>
            <div style={{display: 'flex'}}>
                <Button
                    disabled={disabledEsquerda}
                    icon={'caret-left'}
                    title={'Flecha-para-esquerda'}
                    onClick={() => scroll({
                        ...scrollParams,
                        direction: 'esquerda'
                    })}
                />
                <div ref={scrollRef} style={{display: 'flex', overflowX: 'hidden'}}>
                    {minhasSeries.map((serie, index) => (
                        <Card key={index}
                            onClick={() => navigate(`/atualizar/${serie._id}`)}
                            style={{cursor: 'pointer'}}
                        >
                            <img src={serie.capa} alt={serie.titulo} style={{width:'200px'}}/>
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
                            <H3>{serie.titulo}</H3>
                            <p>{serie.ano}</p>
                        </Card>
                    ))}
                </div>
                <Button
                    disabled={disabledDireita}
                    icon={'caret-right'}
                    title={'Flecha-para-direita'} 
                    onClick={() => scroll({
                        ...scrollParams,
                        direction: 'direita'
                    })}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <Botao
                    texto='Cadastrar'
                    title='Cadastrar'
                    onClick={() => navigate('/cadastrar')}
                    intent={Intent.DANGER}
                />
            </div>
        </div>
    );
}



