import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import '@devoinc/genesys-base-styles/dist/styles.css';

import { ThemeProvider } from 'styled-components';
import { light } from '@devoinc/genesys-brand-devo';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
