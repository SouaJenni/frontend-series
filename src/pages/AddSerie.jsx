import React, {useState} from 'react';

import {
    InputGroup,
    FormGroup,
    TextArea,
    Button,
    MenuItem,
    Icon, Card, H4,
} from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';

import { BotaoEstrela } from '../components/BotaoEstrela.jsx';
import { Botao } from '../components/Botao.jsx';

const titleOptions = [
    {titulo:'Matrix', ano:'1998', tipo:'filme'},
    {titulo:'Star Wars', ano:'1965', tipo:'filme'},
    {titulo: 'Todo Mundo Odeia o Chris', ano:'1980', tipo:'serie'}
];

const renderItem = (item, { handleClick, modifiers }) => {
    if (!modifiers.matchesPredicate) return null;
    const icone = item.tipo === 'serie' ? 'video' : 'film';
    return (
        <Card>
            <Icon color={'#1c1c1c'} icon={icone}/>
            <H4>{item.titulo}</H4>
            <p>{item.ano}</p>
        </Card>
    );
};

const handleClick = () => {
    alert('Botão clicado!');
};

const AddSerie = () => {
    return (
        <div style={{ padding: '2rem', maxWidth: '600px' }}>
            <FormGroup label="Título" labelFor="title-input">
                <div style={{ position: 'relative' }}>
                    <Select
                        items={titleOptions}
                        itemRenderer={renderItem}
                        onItemSelect={() => {}}
                        noResults={<MenuItem disabled text="Nenhum resultado" />}
                        filterable
                        popoverProps={{ usePortal: false }}
                    >
                        <InputGroup id="title-input" placeholder="Selecione ou digite..." />
                    </Select>
                </div>
            </FormGroup>

            <FormGroup label="Comentário" labelFor="comment-textarea">
                <TextArea
                    id="comment-textarea"
                    fill
                    placeholder="Deixe um comentário..."
                />
            </FormGroup>

            <FormGroup label="Avaliação">
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <BotaoEstrela
                        defaultRating={3}
                        onChange={(value) => console.log('Nova avaliação:', value)}
                    />
                </div>
            </FormGroup>

            <Botao intent="primary" text="Salvar" title="Salvar" onClick={handleClick} />
        </div>
    );
};

export default AddSerie;
