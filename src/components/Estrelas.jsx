import React from 'react';
import { Icon } from '@blueprintjs/core';

const StarDisplay = ({ total = 5, active = 0 }) => {
    return (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
            {[...Array(total)].map((_, i) => {
                const star = i + 1;
                return (
                    <Icon
                        key={star}
                        icon="star"
                        color={star <= active ? '#FFC940' : '#CED9E0'}
                    />
                );
            })}
        </div>
    );
};

export default StarDisplay;
