import React, {useState} from 'react';

import {
    InputGroup,
    FormGroup,
    TextArea,
    Button,
    MenuItem,
    Icon,
} from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';

import InteractiveStarRating from '../components/EstrelasInterativas.jsx';

// Lista de exemplo para o autocomplete
const titleOptions = [
    {titulo:'Matrix', ano:'1998', tipo:'filme'},
    {titulo:'Star Wars', ano:'1965', tipo:'filme'},
    {titulo: 'Todo Mundo Odeia o Chris', ano:'1980', tipo:'serie'}
];

const renderItem = (item, { handleClick, modifiers }) => {
    if (!modifiers.matchesPredicate) return null;
    return (
        <MenuItem
            active={modifiers.active}
            key={item.titulo}
            text={item.titulo}
            onClick={handleClick}
        />

    );
};

const handleClick = () => {
    alert('Botão clicado!');
};

const FormDeCadastro = () => {
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
                    <InteractiveStarRating
                        defaultRating={3}
                        onChange={(value) => console.log('Nova avaliação:', value)}
                    />
                </div>
            </FormGroup>

            <Button intent="primary" text="Salvar" title="Salvar" onClick={handleClick} />
        </div>
    );
};

export default FormDeCadastro;
