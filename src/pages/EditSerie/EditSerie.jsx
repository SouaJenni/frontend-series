import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {Card, FormGroup, InputGroup, Intent, TextArea} from '@blueprintjs/core';

import {atualizarSerie, deletarSerie, fetchSerieById, setSerieId} from './actions.js';
import {setComentario, setNotaUsuario} from '../actions.js';
import {getSerie} from '../selectors.js';
import {Botao} from '../../components/Botao.jsx';
import {BotaoEstrela} from '../../components/BotaoEstrela.jsx';
import {Estrelas} from '../../components/Estrelas.jsx';

export function EditSerie() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const serie = useSelector(getSerie);

    useEffect(() => {
        if(id){
            dispatch(setSerieId(id));
            dispatch(fetchSerieById());
        }
    }, []);

    return (
        <div>
            <Card>
                <div>
                    <div style={{display: 'flex', gap: '2rem'}}>
                        <Botao intent={Intent.NONE} icon={'arrow-left'} title='Voltar' onClick={() => navigate('/')}/>
                        <img src={serie?.capa} alt={serie?.titulo} style={{width:'200px'}}/>
                        <Estrelas total={5} active={serie?.notaImdb}/>
                    </div>
                    <div>
                        <FormGroup label='Título' labelFor='title-input'>
                            <InputGroup
                                id="title-input"
                                value={serie?.titulo}
                                readOnly
                            />
                        </FormGroup>
                        <FormGroup label='Resumo' labelFor='resumo-textarea'>
                            <TextArea
                                id={'resumo-textarea'}
                                value={serie?.resumo || ''}
                                disabled
                            />
                        </FormGroup>
                        <FormGroup label='Avaliação'>
                            <BotaoEstrela
                                defaultRating={serie?.notaUsuario}
                                onChange={(value) => dispatch(setNotaUsuario(value))}
                            />
                        </FormGroup>
                        <FormGroup label='Comentário' labelFor='comment-textarea'>
                            <TextArea
                                id={'comment-textarea'}
                                value={serie?.comentario || ''}
                                onChange={(event) => dispatch(setComentario(event.target.value))}
                            />
                        </FormGroup>
                        <div style={{display: 'flex', gap: '1rem'}}>
                            <Botao intent={Intent.NONE} texto='Atualizar' title='Atualizar' onClick={() => dispatch(atualizarSerie(navigate))}/>
                            <Botao intent={Intent.DANGER} texto='Excluir' title='Excluir' onClick={() => dispatch(deletarSerie(serie.id, navigate))}/>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}