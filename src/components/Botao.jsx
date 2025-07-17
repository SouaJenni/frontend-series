import React from 'react';
import PropTypes from 'prop-types';

import {Button} from '@blueprintjs/core';

export function Botao ({ texto, onClick, intent, title }) {
    return (
        <div>
            <Button intent={intent} title={title} onClick={onClick} text={texto}>
            </Button>
        </div>
    );
}

Botao.propTypes = {
    texto: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    intent: PropTypes.oneOf(['none', 'primary', 'success', 'warning', 'danger']),
    title: PropTypes.string
};
