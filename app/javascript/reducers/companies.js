import { ADD_COMPANY } from '../constants/action-types';

const initialState = [
    { id: 0, title: 'Initial company' }
  ];
const companies = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPANY:
      const nextCompany = {
        id: state.length,
        title: action.payload.title
      };
      return [...state, nextCompany];
    default:
      return state;
  }
};

export default companies;
