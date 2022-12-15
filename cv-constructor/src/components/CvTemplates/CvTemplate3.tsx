import React, { useEffect, useState } from 'react';

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';

import { CvTemplateProps } from 'utils/interfaces';

import ViberIcon from './svgIcons/Viber';
import SkypeIcon from './svgIcons/Skype';

import {
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
} from './CvTemplate3.style';

function CvTemplate1({
  requiredData,
  additionalData,
  themeForCv,
}: CvTemplateProps) {
  const [messengerIcon, setMessengerIcon] = useState<JSX.Element | null>(null);

  useEffect(() => {
    switch (requiredData.messenger) {
      case 'Viber':
        setMessengerIcon(<ViberIcon color={themeForCv.secondaryColor} />);
        break;
      case 'WhatsApp':
        setMessengerIcon(<WhatsAppIcon style={{ color: themeForCv.secondaryColor }} />);
        break;
      case 'Skype':
        setMessengerIcon(<SkypeIcon color={themeForCv.secondaryColor} />);
        break;
      default:
        setMessengerIcon(<TelegramIcon style={{ color: themeForCv.secondaryColor }} />);
        break;
    }
  }, [themeForCv]);

  return (
    <CvPage>
      <CvBackgroundBlock color={themeForCv.primaryColor} />
      <GeneralWrapper>
        <Photo>
          <img src={requiredData.photo} alt='cvPhoto' />
        </Photo>
        <PersonalData>
          <Name color={themeForCv.subtitle}>{requiredData.firstName}</Name>
          <Name color={themeForCv.subtitle}>{requiredData.lastName}</Name>
          <CvTitle color={themeForCv.title}>{requiredData.position}</CvTitle>
          <Contacts>
            <Contact color={themeForCv.text}>
              <PhoneIcon style={{ color: themeForCv.secondaryColor }} />
              {requiredData.tel}
            </Contact>
            <Contact color={themeForCv.text}>
              <EmailIcon style={{ color: themeForCv.secondaryColor }} />
              {requiredData.email}
            </Contact>
            <Contact color={themeForCv.text}>
              {messengerIcon}
              {requiredData.messengerLink}
            </Contact>
            {requiredData.linkedin !== '-' &&
              <Contact color={themeForCv.text}>
                <LinkedInIcon style={{ color: themeForCv.secondaryColor }} />
                {requiredData.linkedin}
              </Contact>}
            <Contact color={themeForCv.text}>
              <PlaceIcon style={{ color: themeForCv.secondaryColor }} />
              {requiredData.address}
            </Contact>
          </Contacts>
        </PersonalData>
        <CvBlock>
          <CvTitle color={themeForCv.title}>About me</CvTitle>
          <CvText color={themeForCv.text}>{requiredData.about}</CvText>
        </CvBlock>
        {additionalData.languages[0].language &&
          <CvTitle color={themeForCv.title}>Languages</CvTitle>}
        {additionalData.languages[0].language &&
          <CvList>
            {(additionalData.languages).map((language) => (
              <CvListItem key={language.id}>
                {language.language} / {language.level}
              </CvListItem>
            ))}
          </CvList>
        }
        {additionalData.projects &&
          <CvBlock>
            <CvTitle color={themeForCv.title}>Projects</CvTitle>
            <CvText color={themeForCv.text}>{additionalData.projects}</CvText>
          </CvBlock>
        }
      </GeneralWrapper>
      <AdditionalBlock>
        {additionalData.works[0].prevPosition &&
          <CvBlock>
            <CvTitle color={themeForCv.title}>Work experience</CvTitle>
          </CvBlock>}
        {additionalData.works[0].prevPosition &&
          (additionalData.works).map((work) => (
            <CvBlock key={work.id}>
              <CvSubtitle color={themeForCv.subtitle}>{work.prevPosition}</CvSubtitle>
              <CvSubtitle1 color={themeForCv.subtitle1}>{work.employer}</CvSubtitle1>
              <CvTextBold color={themeForCv.text}>{work.workFrom} / {work.workTo}</CvTextBold>
              <CvText color={themeForCv.text}>{work.tasks}</CvText>
            </CvBlock>
          ))}
        {additionalData.educations[0].degree &&
          <CvTitle color={themeForCv.title}>Education and training</CvTitle>}
        {additionalData.educations[0].degree &&
          (additionalData.educations).map((education) => (
            <CvBlock key={education.id}>
              <CvSubtitle color={themeForCv.subtitle}>{education.degree}</CvSubtitle>
              <CvSubtitle1 color={themeForCv.subtitle1}>{education.organization}</CvSubtitle1>
              <CvTextBold color={themeForCv.text}>{education.studyFrom} / {education.studyTo}</CvTextBold>
            </CvBlock>
          ))}
        {additionalData.skills &&
          <CvBlock>
            <CvTitle color={themeForCv.title}>Skills</CvTitle>
            <CvText color={themeForCv.text}>{additionalData.skills}</CvText>
          </CvBlock>
        }
      </AdditionalBlock>
    </CvPage >
  );
}

export default CvTemplate1;
