import React from 'react';
import {useNavigate} from 'react-router-dom';

import {
    InputGroup,
    FormGroup,
    TextArea,
    MenuItem,
    Icon, Card, H4,
} from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';

import { BotaoEstrela } from '../components/BotaoEstrela.jsx';
import { Botao } from '../components/Botao.jsx';

const titleOptions = [
    {titulo:'Matrix', ano:'1998', tipo:'filme'},
    {titulo:'Star Wars', ano:'1965', tipo:'filme'},
    {titulo:'Todo Mundo Odeia o Chris', ano:'1980', tipo:'serie'}
];

const renderItem = (item, { modifiers }) => {
    if (!modifiers.matchesPredicate) return null;
    const icone = item.tipo === 'serie' ? 'video' : 'film';
    return (
        <MenuItem
            active={modifiers.active}
            key={item.titulo}
            text={item.titulo}
            onClick={handleClick}
            icon={<Icon icon={icone} />}
        />
    );
};

export function AddSerie() {
    const navigate = useNavigate();

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
                        items={titleOptions}
                        itemRenderer={renderItem}
                        onItemSelect={() => {}}
                        noResults={<MenuItem disabled text='Nenhum resultado' />}
                        filterable
                        popoverProps={{ usePortal: false }}
                    >
                        <InputGroup id='title-input' placeholder='Selecione ou digite...' />
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

