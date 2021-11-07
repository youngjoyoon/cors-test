import Cookies from 'js-cookie';

export const login = (token) => {
  Cookies.set('USER', token, { expires: 7, domain: '.jlventures.io' });
}

export const logout = () => {
  Cookies.remove('USER', { domain: '.jlventures.io' });
}
