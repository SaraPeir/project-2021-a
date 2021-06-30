import React from 'react'
import { hydrate } from 'react-dom'
import App from './App';

hydrate(
  <App arrayFromFetch={window.__INITIAL_ARRAYFETCH__} />,
  document.getElementById('app')
);