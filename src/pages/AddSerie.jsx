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
            className="sugestao-item"
            key={item.titulo + item.ano}
            onClick={handleClick}
            shouldDismissPopover={false}
            text={
                <div className="sugestao-conteudo">
                    <Icon icon={icone} color="#f0f0f0" style={{ marginRight: 8 }} />
                    <span className="sugestao-titulo">{item.titulo}</span>
                    <span className="sugestao-ano">{item.ano}</span>
                </div>
            }
        />
    );
};

export function AddSerie() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const sugestoes = useSelector(getSugestoes);
    const [titulo, setTitulo] = React.useState("");

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
        <div className="add-serie-container">
            <FormGroup label='Título' labelFor='title-input' className="add-serie-formgroup">
                <div style={{ position: 'relative' }}>
                    <Select
                        items={sugestoes}
                        itemRenderer={renderItem}
                        onItemSelect={handleSugestaoSelect}
                        noResults={<MenuItem disabled text='Nenhum resultado' />}
                        filterable={false}
                        popoverProps={{
                            minimal: true,
                            usePortal: false,
                            popoverClassName: "custom-popover"
                        }}
                        className="add-serie-select"
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

            <div className="button-group">
                <Botao intent='primary' texto='Salvar' title='Salvar' onClick={handleSalvarClick} />
                <Botao intent='' texto='Voltar' title='Voltar' onClick={handleVoltarClick} />
            </div>
        </div>
    );
}
