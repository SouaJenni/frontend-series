import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSerieById, setSerieId} from './actions.js';
import {getSerie} from '../../state/selectors.js';
import {Card, FormGroup, InputGroup, Intent, TextArea} from '@blueprintjs/core';
import {Botao} from '../../components/Botao.jsx';
import {BotaoEstrela} from '../../components/BotaoEstrela.jsx';
import {setNotaUsuario} from '../../state/actions.js';

export function EditSerie() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const serie = useSelector(getSerie);
    const navigate = useNavigate();

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
                        onChange={setNotaUsuario}
                    />
                </FormGroup>
                <Botao intent={Intent.DANGER} texto='Salvar' title='Salvar' onClick={()=> navigate('/')}/>
            </Card>
        </div>
    );
}