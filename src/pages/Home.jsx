import React from 'react';
import {useNavigate} from 'react-router-dom';

import {Botao} from '../components/Botao.jsx';

export function Home() {
    const navigate = useNavigate();

    const handleCadastrarClick = () => {
        navigate('/cadastrar');
    };

    return (
        <div>
            <Botao texto='Cadastrar' title='Cadastrar' onClick={handleCadastrarClick} intent='primary'/>
        </div>
    );
}



