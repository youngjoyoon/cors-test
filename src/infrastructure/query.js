import qs from 'qs';

const defaultOption = {
  skipNulls: true,
  indice: false,
  arrayFormat: 'repeat',
};

export function stringify(query, option = {}) {
  return qs.stringify(query, { ...defaultOption, ...option });
}
