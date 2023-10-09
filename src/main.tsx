import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import '@devoinc/genesys-base-styles/dist/styles.css';

import { ThemeProvider } from 'styled-components';
import { light } from '@devoinc/genesys-brand-devo';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename='/asadoiro-cambota/'>
      <ThemeProvider theme={light}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
