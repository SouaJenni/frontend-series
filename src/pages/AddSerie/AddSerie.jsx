import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {
    FormGroup,
    TextArea,
    MenuItem,
    Icon, Card, Intent,
} from '@blueprintjs/core';
import { Suggest} from '@blueprintjs/select';

import { BotaoEstrela } from '../../components/BotaoEstrela.jsx';
import { Botao } from '../../components/Botao.jsx';
import {setComentario, setNotaUsuario, setSerie} from '../actions.js';
import {buscarSugestoes, salvarSerie, setSugestoes} from './actions.js';
import {getComentario, getNotaUsuario, getSugestoes} from './selectors.js';
import {getSerie} from '../selectors.js';
import './AddSerie.css';

const renderItem = (dispatch, item, { modifiers }) => {
    if (!modifiers.matchesPredicate) return null;
    const icone = item.tipo === 'serie' ? 'video' : 'film';

    return (
        <MenuItem
            key={item.idImdb}
            onClick={() => dispatch(setSerie(item))}
            shouldDismissPopover={true}
            text={
                <div >
                    <Icon icon={icone} color="#f0f0f0" />
                    <span>{item.titulo}</span>
                    <span>{item.ano}</span>
                </div>
            }
        />
    );
};

function getInputValueRenderer(item) {
    if (!item.titulo) return '';
    return `${item.titulo} - ${item.ano}`;
}

export function AddSerie() {
    const dispatch = useDispatch();
    const sugestoes = useSelector(getSugestoes);
    const comentario = useSelector(getComentario);
    const notaUsuario = useSelector(getNotaUsuario);
    const serieSelecionada = useSelector(getSerie);
    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            dispatch(setSerie({}));
            dispatch(setSugestoes([]));
        };
    }, []);

    return (
        <div className="bp5-dark">
            <Botao intent={Intent.NONE} icon={'arrow-left'} title='Voltar' onClick={() => navigate('/')} />
            <Card>
                <FormGroup label='Título' labelFor='title-input'>
                    <Suggest
                        // TODO: Check onItemSelect
                        selectedItem={serieSelecionada}
                        items={sugestoes}
                        inputValueRenderer={getInputValueRenderer}
                        itemRenderer={renderItem.bind(null, dispatch)}
                        onQueryChange={(query)=> dispatch(buscarSugestoes(query))}
                        noResults={<MenuItem disabled text='Nenhum resultado' />}
                        filterable={false}
                        popoverProps={{
                            matchTargetWidth: true
                        }}
                    />
                </FormGroup>

                <FormGroup label='Comentário' labelFor='comment-textarea'>
                    <TextArea
                        value={comentario}
                        onChange={(event) => dispatch(setComentario(event.target.value))}
                        id='comment-textarea'
                        fill
                        placeholder='Deixe um comentário...'
                    />
                </FormGroup>

                <FormGroup label='Avaliação'>
                    <BotaoEstrela
                        defaultRating={notaUsuario}
                        onChange={(value) => dispatch(setNotaUsuario(value))}
                    />
                </FormGroup>
                
                <Botao intent={Intent.DANGER} texto='Salvar' title='Salvar' onClick={() => dispatch(salvarSerie(navigate))} />
            </Card>
        </div>
    );
}
