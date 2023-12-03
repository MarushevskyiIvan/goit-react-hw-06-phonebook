import { combineReducers, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filterSlice';
import persistReducer from 'redux-persist/es/persistReducer';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact: {
      prepare(contacts) {
        return {
          payload: {
            value: contacts,
            id: nanoid(),
          },
        };
      },
      reducer(state, action) {
        state.contacts = [...state.contacts, action.payload];
      },
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const persistedRootReducer = persistReducer(persistConfig, rootReducer);
