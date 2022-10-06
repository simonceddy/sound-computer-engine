import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { HashRouter as Router } from 'react-router-dom';
import store from './app/store';
import SCE from './SCE';
import './styles/index.css';
import './styles/tailwind.css';
// import './styles/colourPicker.css';
// import './lib/input-knobs';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SCE />
    </Provider>
  </React.StrictMode>
);
