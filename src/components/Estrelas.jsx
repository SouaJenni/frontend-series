import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@blueprintjs/core';

export function Estrelas({ total = 5, active = 0 }) {
    return (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
            {[...Array(total)].map((_, i) => {
                const star = i + 1;
                return (
                    <Icon
                        key={star}
                        icon='star'
                        color={star <= active ? '#FFC940' : '#CED9E0'}
                    />
                );
            })}
        </div>
    );
}

Estrelas.propTypes = {
    total: PropTypes.number,
    active: PropTypes.number
};
