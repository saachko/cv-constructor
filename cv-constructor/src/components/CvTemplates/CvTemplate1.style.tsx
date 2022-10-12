import styled from 'styled-components';

const CvPage = styled.div`
  width: 595px;
  min-height: 840px;
  padding: 15px;
  position: relative;
`;

const CvBackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -5;
`;

const GeneralWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Photo = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
`;

export {
  CvPage,
  CvBackgroundWrapper,
  GeneralWrapper,
  Photo
};
