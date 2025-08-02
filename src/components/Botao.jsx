import React from 'react';
import PropTypes from 'prop-types';

import {Button} from '@blueprintjs/core';

export function Botao ({ icon, texto, onClick, intent, title }) {
    return (
        <div>
            <Button icon={icon} intent={intent} title={title} onClick={onClick} text={texto}>
            </Button>
        </div>
    );
}

Botao.propTypes = {
    icon: PropTypes.string,
    texto: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    intent: PropTypes.oneOf(['none', 'primary', 'success', 'warning', 'danger']),
    title: PropTypes.string
};
