import React from 'react';

import {Button} from '@blueprintjs/core';

export function Botao ({ texto, onClick, intent, title }) {
    return (
        <div style={{ padding: '2rem' }}>
            <Button intent={intent} title={title} onClick={onClick} text={texto}>
            </Button>
        </div>
    );
}
