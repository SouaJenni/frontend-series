import React from 'react';
import {useNavigate} from 'react-router-dom';

import {
    InputGroup,
    FormGroup,
    TextArea,
    MenuItem,
    Icon,
} from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';

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
            icon={<Icon color={'#1c1c1c'} icon={icone} />}
            text={item.titulo}
            label={item.ano}
            shouldDismissPopover={false}
            onClick={handleClick}
        />
    );
};

export function AddSerie() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const sugestoes = useSelector(getSugestoes);

    const handleSalvarClick = () => {
        alert('Botão clicado!');
    };

    const handleVoltarClick = () => {
        navigate('/');
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '600px' }}>
            <FormGroup label='Título' labelFor='title-input'>
                <div style={{ position: 'relative' }}>
                    <Select
                        items={sugestoes}
                        itemRenderer={renderItem}
                        onItemSelect={() => {}}
                        noResults={<MenuItem disabled text='Nenhum resultado' />}
                        filterable={false}
                        popoverProps={{
                            usePortal: false,
                            popoverClassName: 'custom-suggestion-popover',
                            minimal: true,
                            modifiers: [
                                { name: 'offset', options: { offset: [0, 2] } },
                                { name: 'preventOverflow', options: { padding: 8 } }
                            ]
                        }}
                    >
                        <InputGroup
                            id='title-input'
                            placeholder='Selecione ou digite...'
                            onChange={(event) =>dispatch(buscarSugestoes(event.target.value))}
                        />
                    </Select>
                </div>
            </FormGroup>

            <FormGroup label='Comentário' labelFor='comment-textarea'>
                <TextArea
                    id='comment-textarea'
                    fill
                    placeholder='Deixe um comentário...'
                />
            </FormGroup>

            <FormGroup label='Avaliação'>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <BotaoEstrela
                        defaultRating={3}
                        onChange={(value) => console.log('Nova avaliação:', value)}
                    />
                </div>
            </FormGroup>

            <Botao intent='primary' texto='Salvar' title='Salvar' onClick={handleSalvarClick} />

            <Botao intent='' texto='Voltar' title='Voltar' onClick={handleVoltarClick} />
        </div>
    );
}

