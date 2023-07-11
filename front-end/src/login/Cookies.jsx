import { Cookies } from 'react-cookie';
import jwtDecode from "jwt-decode";
const cookies = new Cookies();

export const setCookie = (name ,value) => {
  return cookies.set(name, value);
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name) => {
  return cookies.remove(name);
};

export const getJwtUser = () => {
  let user = "";
  if(getCookie(TOKEN)){
    user = jwtDecode(getCookie(TOKEN).accessToken).sub;
  }
  return user;
}

export const getJwtRole = () => {
  let role = "";
  if(getCookie(TOKEN)){
    role = jwtDecode(getCookie(TOKEN).accessToken).AUTH;
  }
  return role;
}
