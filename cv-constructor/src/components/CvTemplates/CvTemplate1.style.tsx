import styled from 'styled-components';

import { ColorProps } from 'utils/interfaces';

const CvPage = styled.div`
  width: 800px;
  min-height: 1120px;
  padding: 15px;
  position: relative;
`;

const CvBackgroundWrapper = styled.div`
  position: absolute;
  top: 125px;
  left: 0;
  z-index: -5;

  svg {
    transform: rotate(180deg);
    width: 100%;
  }
`;

const CvBackgroundBlock = styled.div<ColorProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -5;
  width: 100%;
  height: 150px;
  background-color: ${({ color }) => color};
`;

const GeneralWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 60px;
`;

const Photo = styled.div`
  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const PersonalData = styled.div`
`;

const CvTitle = styled.h3<ColorProps>`
  font-family: 'Lora', serif;
  color: ${({ color }) => color};
  margin-bottom: 10px;
`;

const Name = styled.h2<ColorProps>`
  font-family: 'Lora', serif;
  color: ${({ color }) => color};
  font-size: 30px;
`;

const Contacts = styled.div`
  width: 35%;
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

export {
  CvPage,
  CvBackgroundWrapper,
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
};
