import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  AdditionalData,
  Education,
  Language,
  RequiredData,
  SetState,
  Work,
} from 'utils/interfaces';

import Button from 'components/Button/Button';

import {
  Shadow,
  ModalWindow,
  ModalText,
  ButtonsWrapper,
} from './Modal.style';

interface SignInProps {
  active: boolean;
  setActive: SetState<boolean>,
  text: string,
  setRequiredData: SetState<RequiredData>,
  setAdditionalData: SetState<AdditionalData>,
  works: Work[],
  setWorks: SetState<Work[]>,
  educations: Education[],
  setEducations: SetState<Education[]>,
  languages: Language[],
  setLanguages: SetState<Language[]>,
}

function Modal({
  active,
  setActive,
  text,
  setRequiredData,
  setAdditionalData,
  works,
  setWorks,
  educations,
  setEducations,
  languages,
  setLanguages,
}: SignInProps) {
  return (
    <Shadow onClick={() => setActive(false)} active={active}>
      <ModalWindow onClick={(e) => e.stopPropagation()} active={active}>
        <ModalText>{text}</ModalText>
        <ButtonsWrapper>
          <NavLink to="/constructor">
            <Button
              innerText="Yes"
              id="useLocal"
              callback={() => {
                if (localStorage.getItem('requiredData')) {
                  setRequiredData(JSON.parse(localStorage.getItem('requiredData') as string));
                }
                if (localStorage.getItem('additionalData')) {
                  const data = (JSON.parse(localStorage.getItem('additionalData') as string) as AdditionalData);
                  setWorks(data.works);
                  setEducations(data.educations);
                  setLanguages(data.languages);
                  setAdditionalData((prev) => ({
                    ...prev,
                    works,
                    educations,
                    languages,
                    skills: data.skills,
                    projects: data.projects,
                  }));
                }
                setActive(false)
              }}
            />
          </NavLink>
          <Button
            innerText="No"
            id="cleanLocal"
            callback={() => {
              localStorage.removeItem('requiredData');
              localStorage.removeItem('additionalData');
              setActive(false);
            }}
          />
        </ButtonsWrapper>
      </ModalWindow>
    </Shadow>
  );
}

export default Modal;
