import { ERR_NOT_FOUND } from './types';

export const errNotFound = () => ({
  type: ERR_NOT_FOUND,
  payload: true,
});