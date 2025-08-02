import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSerieById, setSerieId} from './actions.js';
import {getSerie} from '../../state/selectors.js';

export function EditSerie() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const serie = useSelector(getSerie);
    
    useEffect(() => {
        if(id){
            dispatch(setSerieId(id));
            dispatch(fetchSerieById());
        }
    }, []);

    return (
        <div>
            <h1>{serie?.titulo}</h1>
        </div>
    );
    
}