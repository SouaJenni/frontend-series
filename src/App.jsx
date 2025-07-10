import React from 'react';
import { useState } from 'react';

import './App.css';

import { Home } from './pages/Home.jsx';

export function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Home />
        </>
    );
}

