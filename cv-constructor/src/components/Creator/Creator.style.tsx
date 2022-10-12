import styled from 'styled-components';

const CreatorContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 15px;
`;

const CvWrapper = styled.div`
  padding: 10px;
  max-width: 1024px;
`;

const CvToPrint = styled.div`
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.1);
  transform: scale(0.9);

  @media print {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.0);
    transform: scale(1);
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export {
  CreatorContainer,
  CvWrapper,
  CvToPrint,
  ButtonsWrapper,
};
