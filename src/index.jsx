import React from 'react';
import { createRoot } from 'react-dom/client';

// import style
import './styles/style.css';

import App from './App';
import Shoppings from './Shopping';

const root = createRoot(document.getElementById('root'));
root.render(<Shoppings />);