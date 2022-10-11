type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

interface Link {
  id: number;
  path: string;
  text: string;
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
  work: Work[],
  education: Education[],
  languages: Languages[],
  skills: string,
  projects: string,
}

interface Work {
  employer: string,
  position: string,
  from: string,
  to: string,
  tasks: string,
}

interface Education {
  organization: string,
  degree: string,
  from: string,
  to: string,
}

interface Languages {
  language: string,
  level: string,
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
  Languages
};
