import { ADD_COMPANY } from '../constants/action-types';

export const addCompany = (company) => {
  return {
    type: ADD_COMPANY,
    payload: company
  };
};
