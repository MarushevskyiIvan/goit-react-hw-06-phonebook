import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';

export const addContact = value => {
  return {
    type: 'contacts/addContact',
    payload: value,
  };
};

export const deleteContact = value => {
  return {
    type: 'contacts/deleteContact',
    payload: value,
  };
};

export const filter = value => {
  return {
    type: 'filter/filter',
    payload: value,
  };
};

const initialState = {
  contacts: [],
  filter: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case 'filter/filter':
      return {
        ...state,
        filter: action.payload,
      };

    case 'contacts/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(item => item.id !== action.payload),
      };

    default:
      return state;
  }
};
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
