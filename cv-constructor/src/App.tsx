import React from 'react';
import { ThemeProvider } from 'styled-components';

import Global from './styles/Global';
import defaultTheme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global />
      <div>App</div>
    </ThemeProvider>
  );
}

export default App;
