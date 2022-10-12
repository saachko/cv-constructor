import styled from 'styled-components';

import { ColorProps } from 'utils/interfaces';

const CvPage = styled.div`
  width: 800px;
  min-height: 1120px;
  padding: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CvBackgroundBlock = styled.div<ColorProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -5;
  width: 100%;
  height: 230px;
  background-color: ${({ color }) => color};
`;

const GeneralWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Photo = styled.div`
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const PersonalData = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;

const CvTitle = styled.h3<ColorProps>`
  font-family: 'Nunito Sans', serif;
  color: ${({ color }) => color};
  margin-bottom: 10px;
  padding-left: 20px;
`;

const Name = styled.h2<ColorProps>`
  font-family: 'Nunito Sans', serif;
  color: ${({ color }) => color};
  font-size: 30px;
  margin-top: -15px;
  margin-bottom: 10px;
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contact = styled.p<ColorProps>`
  white-space: normal;
  color: ${({ color }) => color};
  display: flex;
  align-items: center;
  gap: 15px;
  word-break: break-all;
`;

const CvBlock = styled.div`
  margin: 20px 0;
`;

const CvText = styled.p<ColorProps>`
  color: ${({ color }) => color};
`

const CvSubtitle = styled.p<ColorProps>`
  color: ${({ color }) => color};
  font-size: 20px;
`

const CvSubtitle1 = styled.p<ColorProps>`
  color: ${({ color }) => color};
  font-size: 20px;
`

const CvTextBold = styled.p<ColorProps>`
  color: ${({ color }) => color};
  font-weight: 700;
`;

const CvList = styled.ul`
  list-style-type: circle;
  padding-left: 15px;
`;

const CvListItem = styled.li`
`;

const AdditionalBlock = styled.div`
  display: flex;
  align-items: flex-start;
`;

const CvBlockLeft = styled.div`
  width: 45%;
  padding: 10px;
  border-right: 1px solid ${({ color }) => color}; 
`;

const CvBlockRight = styled.div<ColorProps>`
  width: 45%;
  height: 100%;
  padding: 10px;
`;

export {
  CvPage,
  CvBackgroundBlock,
  GeneralWrapper,
  Photo,
  PersonalData,
  Name,
  Contacts,
  Contact,
  CvBlock,
  CvTitle,
  CvText,
  CvSubtitle,
  CvSubtitle1,
  CvTextBold,
  CvList,
  CvListItem,
  CvBlockLeft,
  CvBlockRight,
  AdditionalBlock,
};
