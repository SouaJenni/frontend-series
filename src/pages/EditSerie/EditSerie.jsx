import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {atualizarSerie, deletarSerie, fetchSerieById, setSerieId} from './actions.js';
import {getSerie} from '../../state/selectors.js';
import {Card, FormGroup, InputGroup, Intent, TextArea} from '@blueprintjs/core';
import {Botao} from '../../components/Botao.jsx';
import {BotaoEstrela} from '../../components/BotaoEstrela.jsx';

export function EditSerie() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const serie = useSelector(getSerie);

    const [titulo, setTitulo] = useState('');
    const [comentario, setComentario] = useState('');
    const [notaUsuario, setNotaUsuario] = useState(0);

    useEffect(() => {
        if(id){
            dispatch(setSerieId(id));
            dispatch(fetchSerieById());
        }
    }, []);

    useEffect(() => {
        if (serie) {
            setTitulo(serie.titulo);
            setComentario(serie.comentario || '');
            setNotaUsuario(serie.notaUsuario);
        }
    }, [serie]);

    return (
        <div>
            <Card>
                <Botao intent={Intent.NONE} icon={'arrow-left'} title='Voltar' onClick={() => navigate('/')}/>

                <FormGroup label='Título' labelFor='title-input'>
                    <InputGroup
                        id="title-input"
                        value={titulo}
                        disabled
                        readOnly
                    />
                </FormGroup>

                <FormGroup label='Comentário' labelFor='comment-textarea'>
                    <TextArea
                        value={serie?.comentario}
                        onChange={(event) => dispatch(setComentario(event.target.value))}
                    />
                </FormGroup>

                <FormGroup label='Avaliação'>
                    <BotaoEstrela
                        defaultRating={notaUsuario}
                        value={notaUsuario}
                        onChange={(value) => dispatch(setNotaUsuario(value))}
                    />
                </FormGroup>

                <Botao intent={Intent.NONE} texto='Atualizar' title='Atualizar' onClick={() => dispatch(atualizarSerie(navigate))}/>
                <Botao intent={Intent.DANGER} texto='Excluir' title='Excluir' onClick={() => dispatch(deletarSerie(serie.id, navigate))}/>
            </Card>
        </div>
    );
}