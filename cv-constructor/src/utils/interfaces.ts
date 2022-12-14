type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

interface Link {
  id: number,
  path: string,
  text: string,
}

interface Description {
  id: string,
  title: string,
  text: string,
  icon: JSX.Element,
  color: string,
}

interface SelectorOption {
  id: string,
  name: string,
}

interface RequiredData {
  photo: string,
  firstName: string,
  lastName: string,
  birthday: string,
  about: string,
  position: string,
  tel: string,
  messenger: string,
  messengerLink: string,
  email: string,
  linkedin: string,
  address: string,
}

interface AdditionalData {
  works: Work[],
  educations: Education[],
  languages: Language[],
  skills: string,
  projects: string,
}

interface Work {
  id: string,
  employer: string,
  prevPosition: string,
  workFrom: string,
  workTo: string,
  tasks: string,
}

interface Education {
  id: string,
  organization: string,
  degree: string,
  studyFrom: string,
  studyTo: string,
}

interface Language {
  id: string,
  language: string,
  level: string,
}

interface CvTemplateProps {
  requiredData: RequiredData,
  additionalData: AdditionalData,
  themeForCv: CvTheme,
}

interface ColorProps {
  color: string,
}

interface CvTheme {
  title: string,
  subtitle: string,
  subtitle1: string,
  text: string,
  primaryColor: string,
  secondaryColor: string,
  additionalColor: string,
}

interface CvThemeButton {
  id: string,
  theme: CvTheme,
  color: string,
}

interface Template {
  id: number,
  template: JSX.Element,
}

export type {
  SetState,
  Link,
  Description,
  SelectorOption,
  RequiredData,
  AdditionalData,
  Work,
  Education,
  Language,
  CvTemplateProps,
  ColorProps,
  CvTheme,
  CvThemeButton,
  Template,
};
