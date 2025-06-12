import React, { useState } from 'react';
import { Button, Icon } from '@blueprintjs/core';

const InteractiveStarRating = ({ defaultRating = 0, onChange }) => {
    const [rating, setRating] = useState(defaultRating);

    const handleClick = (star) => {
        setRating(star);
        onChange?.(star);
    };

    return (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
            {[1, 2, 3, 4, 5].map((star) => (
                <Button
                    key={star}
                    title={`${star} ${star === 1 ? 'estrela' : 'estrelas'}`}
                    icon={
                        <Icon
                            icon="star"
                            color={star <= rating ? '#FFC940' : '#CED9E0'}
                        />
                    }
                    onClick={() => handleClick(star)}
                />
            ))}
        </div>
    );
};

export default InteractiveStarRating;
