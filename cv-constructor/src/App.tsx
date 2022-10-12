import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import useLocalStorage from 'hooks/useLocalStorage';

import {
  defaultRequiredData,
  defaultAdditionalData,
  defaultEducation,
  defaultLanguage,
  defaultWork
} from 'utils/variables';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Home from 'components/Home/Home';
import ProtectedRoute from 'components/ProtectedRoute/ProtectedRoute';
import Constructor from 'components/Constructor/Constructor';
import Creator from 'components/Creator/Creator';

import Global from 'styles/Global';
import defaultTheme from 'styles/theme';

function App() {
  const [isLoggedIn, setLoggedIn] = useLocalStorage('isLoggedIn', false);
  const [imageUploaded, setImageUploaded] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');
  const [requiredData, setRequiredData] = useState(defaultRequiredData);
  const [additionalData, setAdditionalData] = useState(defaultAdditionalData);
  const [works, setWorks] = useState([defaultWork]);
  const [educations, setEducations] = useState([defaultEducation]);
  const [languages, setLanguages] = useState([defaultLanguage]);
  const [cvCreation, setCvCreation] = useState(false);

  useEffect(() => {
    if (cvCreation) {
      setAdditionalData((prev) => ({
        ...prev,
        works,
        educations,
        languages,
      }));
      setCvCreation(false);
    }
  }, [cvCreation]);

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
            setImageUrl={setImageUrl}
            requiredData={requiredData}
            setRequiredData={setRequiredData}
            additionalData={additionalData}
            setAdditionalData={setAdditionalData}
            setCvCreation={setCvCreation}
            works={works}
            setWorks={setWorks}
            educations={educations}
            setEducations={setEducations}
            languages={languages}
            setLanguages={setLanguages} />}
        />
        <Route path="/constructor/cv" element={
          <Creator
            requiredData={requiredData}
            additionalData={additionalData}
          />} />
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
