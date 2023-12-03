import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { persistedRootReducer } from './contactsSlice';

export const store = configureStore({
  reducer: persistedRootReducer,
});

export const persistor = persistStore(store);
