/* eslint-disable import/prefer-default-export */
interface Description {
  id: string,
  title: string,
  text: string,
  icon: JSX.Element,
  color: string,
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

export type {
  Description,
  RequiredData
};
