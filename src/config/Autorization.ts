import { userKey } from '../global';

export const Authorization = () => {
  const json = localStorage.getItem("userKey");
  return json ? true : false;
};
