import React from 'react';
import {Botao} from '../components/Botao.jsx';

const handleClick = () => {
    alert('Botão clicado!');
};

const Catalogo = () => {
    return (
        <Botao texto='Cadastrar' title='Cadastrar' onClick={handleClick} intent='primary' />
    )
}

export default Catalogo;


