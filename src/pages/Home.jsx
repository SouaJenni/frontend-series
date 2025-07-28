import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {Card, H3, Tooltip} from '@blueprintjs/core';

import {Botao} from '../components/Botao.jsx';
import {Estrelas} from '../components/Estrelas.jsx';
import {getMinhasSeries} from '../state/selectors.js';
import {seriesSalvas} from '../state/actions.js';

export function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const minhasSeries = useSelector(getMinhasSeries);

    useEffect(() => {
        dispatch(seriesSalvas(1));
    }, [dispatch]);

    const handleCadastrarClick = () => {
        navigate('/cadastrar');
    };

    return (
        <div className="bp5-dark">
            <div style={{display: 'flex'}}>
                {minhasSeries.map((serie, index) => (
                    <Card key={index}>
                        <img src={serie.capa} alt={serie.titulo} style={{width:'200px'}}/>
                        <H3>{serie.titulo}</H3>
                        <p>{serie.ano}</p>
                        <Tooltip
                            content={`Nota IMDb: ${serie.notaImdb}`}
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
            <Botao texto='Cadastrar' title='Cadastrar' onClick={handleCadastrarClick} intent='primary'/>
        </div>
    );
}



