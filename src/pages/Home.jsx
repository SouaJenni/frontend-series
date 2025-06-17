import React from 'react';
import {Botao} from '../components/Botao.jsx';

const handleClick = () => {
    alert('Botão clicado!');
};

const Home = () => {
    return (
        <div>
            <Botao texto='Cadastrar' title='Cadastrar' onClick={handleClick} intent='primary' />
        </div>
    );
};

export default Home;


