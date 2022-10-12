import styled from 'styled-components';

import { ColorProps } from 'utils/interfaces';

const CvPage = styled.div`
  width: 800px;
  min-height: 1120px;
  padding: 15px;
  padding-top: 25px;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

const CvBackgroundBlock = styled.div<ColorProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -5;
  width: 310px;
  height: 100%;
  background-color: ${({ color }) => color};
`;

const GeneralWrapper = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  align-items: center;
`;

const Photo = styled.div`
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const PersonalData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CvTitle = styled.h3<ColorProps>`
  font-family: 'Nunito Sans', serif;
  color: ${({ color }) => color};
  margin-bottom: 10px;
`;

const Name = styled.h2<ColorProps>`
  font-family: 'Nunito Sans', serif;
  color: ${({ color }) => color};
  font-size: 30px;
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
  align-self: flex-start;
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
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
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
  AdditionalBlock,
};
