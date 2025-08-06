import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Icon } from '@blueprintjs/core';

export function BotaoEstrela({ defaultRating = 0, onChange }) {
    const [rating, setRating] = useState(defaultRating);

    const handleClick = (star) => {
        setRating(star);
        onChange?.(star);
    };

    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => (
                <Button
                    key={star}
                    title={`${star} ${star === 1 ? 'estrela' : 'estrelas'}`}
                    icon={
                        <Icon
                            icon='star'
                            color={star <= rating ? '#FFC940' : '#CED9E0'}
                        />
                    }
                    onClick={() => handleClick(star)}
                />
            ))}
        </div>
    );
}

BotaoEstrela.propTypes = {
    defaultRating: PropTypes.number,
    onChange: PropTypes.func
};
