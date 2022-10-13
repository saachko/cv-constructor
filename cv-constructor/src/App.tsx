import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import {
  defaultRequiredData,
  defaultAdditionalData,
} from 'utils/variables';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Home from 'components/Home/Home';
import Constructor from 'components/Constructor/Constructor';
import Creator from 'components/Creator/Creator';
import Modal from 'components/Modal/ModalLocalStorage';

import Global from 'styles/Global';
import defaultTheme from 'styles/theme';

function App() {
  const [imageUploaded, setImageUploaded] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');
  const [requiredData, setRequiredData] = useState(defaultRequiredData);
  const [additionalData, setAdditionalData] = useState(defaultAdditionalData);
  const [isModalActive, setIsModalActive] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('requiredData')) {
      setIsModalActive(true);
    }
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Global />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/constructor"
          element={<Constructor
            imageUploaded={imageUploaded}
            setImageUploaded={setImageUploaded}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            requiredData={requiredData}
            setRequiredData={setRequiredData}
            additionalData={additionalData}
            setAdditionalData={setAdditionalData}
          />}
        />
        <Route path="/constructor/cv" element={
          <Creator
            requiredData={requiredData}
            additionalData={additionalData}
          />} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
      <Footer />
      <Modal
        active={isModalActive}
        setActive={setIsModalActive}
        setRequiredData={setRequiredData}
        setAdditionalData={setAdditionalData}
        text="Would you like to continue CV creation with your previous data?"
      />
    </ThemeProvider>
  );
}

export default App;
