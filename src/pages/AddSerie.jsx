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
import {buscarSugestoes} from '../state/actions.js';
import {useDispatch, useSelector} from 'react-redux';
import {getSugestoes} from '../state/selectors.js';

const handleClick = () => {
    alert('Botão clicado!');
};

const renderItem = (item, { modifiers }) => {
    if (!modifiers.matchesPredicate) return null;
    const icone = item.tipo === 'serie' ? 'video' : 'film';

    return (
        <MenuItem
            key={item.titulo + item.ano}
            onClick={handleClick}
            shouldDismissPopover={false}
            text={
                <div >
                    <Icon icon={icone} color="#f0f0f0" style={{ marginRight: 8 }} />
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
    const [setTitulo] = React.useState('');

    const handleSalvarClick = () => {
        alert('Botão clicado!');
    };

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
                        itemRenderer={renderItem}
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
                        id='comment-textarea'
                        fill
                        placeholder='Deixe um comentário...'
                    />
                </FormGroup>

                <FormGroup label='Avaliação'>
                    <BotaoEstrela
                        defaultRating={3}
                        onChange={(value) => console.log('Nova avaliação:', value)}
                    />
                </FormGroup>

                <div>
                    <Botao intent='primary' texto='Salvar' title='Salvar' onClick={handleSalvarClick} />
                    <Botao intent='' texto='Voltar' title='Voltar' onClick={handleVoltarClick} />
                </div>
            </Card>
        </div>
    );
}
