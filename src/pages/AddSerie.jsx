import React from 'react';
import {useNavigate} from 'react-router-dom';

import {
    FormGroup,
    TextArea,
    MenuItem,
    Icon, Card,
} from '@blueprintjs/core';
import { Suggest} from '@blueprintjs/select';
import '@blueprintjs/core/lib/css/blueprint.css';

import { BotaoEstrela } from '../components/BotaoEstrela.jsx';
import { Botao } from '../components/Botao.jsx';
import {buscarSugestoes, salvarSerie, setComentario, setNotaUsuario, setSerie} from '../state/actions.js';
import {useDispatch, useSelector} from 'react-redux';
import {getComentario, getNotaUsuario, getSugestoes} from '../state/selectors.js';

const renderItem = (dispatch, item, { modifiers }) => {
    if (!modifiers.matchesPredicate) return null;
    const icone = item.tipo === 'serie' ? 'video' : 'film';


    return (
        <MenuItem
            key={item.titulo + item.ano}
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

export function AddSerie() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const sugestoes = useSelector(getSugestoes);
    const comentario = useSelector(getComentario);
    const notaUsuario = useSelector(getNotaUsuario);
    const [setTitulo] = React.useState('');

    const handleVoltarClick = () => {
        navigate('/');
    };

    const handleSugestaoSelect = (item) => {
        setTitulo(item.titulo);
    };

    return (
        <div className="bp5-dark">
            <Card>
                <FormGroup label='Título' labelFor='title-input'>
                    <Suggest
                        items={sugestoes}
                        itemRenderer={renderItem.bind(null, dispatch)}
                        onItemSelect={handleSugestaoSelect}
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

                <div>
                    <Botao intent='primary' texto='Salvar' title='Salvar' onClick={() => dispatch(salvarSerie())} />
                    <Botao intent='' texto='Voltar' title='Voltar' onClick={handleVoltarClick} />
                </div>
            </Card>
        </div>
    );
}
