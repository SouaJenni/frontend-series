import {Button} from '@blueprintjs/core';
import React from 'react';

export function Botao ({ texto, onClick, intent, title }) {
    return (
        <div style={{ padding: '2rem' }}>
            <Button intent={intent} title={title} onClick={onClick}>{texto}
            </Button>
        </div>
    );
}
