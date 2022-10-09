import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import useLocalStorage from 'hooks/useLocalStorage';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Home from 'components/Home/Home';
import ProtectedRoute from 'components/ProtectedRoute/ProtectedRoute';
import Constructor from 'components/Constructor/Constructor';

import Global from 'styles/Global';
import defaultTheme from 'styles/theme';


function App() {
  const [isLoggedIn, setLoggedIn] = useLocalStorage('isLoggedIn', false);
  const [imageUploaded, setImageUploaded] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');

  return (
    <ThemeProvider theme={defaultTheme}>
      <Global />
      <Header
        isLoggedIn={isLoggedIn}
        setLoggedIn={setLoggedIn}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/constructor"
          element={<Constructor
            imageUploaded={imageUploaded}
            setImageUploaded={setImageUploaded}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl} />}
        />
        <Route path="/constructor/cv" element={<div>CV</div>} />
        <Route
          path="/my-cv"
          element={(
            <ProtectedRoute conditionValue={isLoggedIn}>
              <div>this is protected route</div>
            </ProtectedRoute>
          )} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
