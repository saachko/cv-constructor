import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Global from './styles/Global';
import defaultTheme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global />
      <Routes>
        <Route path="/" element={<div>App</div>} />
        <Route path="/constructor" element={<div>constructor</div>} />
        <Route path="/constructor/cv" element={<div>CV</div>} />
        <Route path="/my-cv" element={<div>my cv</div>} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
