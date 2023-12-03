import { useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Filter } from './filter/FormFilter';
import { ContactForm } from './contactForm/ContactForm';
import { ContactsList } from './contactsList/ContactsList';
import { ItemWrapper, Wrapper } from './App.styled';
import { GlobalStyle } from 'GlobalStaled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/configureStore';

const storageKey = 'contactsArr';

const useLocalStorage = () => {
  const saveContacts = localStorage.getItem(storageKey);
  if (saveContacts !== null) {
    return JSON.parse(saveContacts);
  }
  return [];
};

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Wrapper>
      <h1>Phone book</h1>
      <ContactForm
        submit={({ name, number }) => {
          dispatch(addContact({ name, number, id: nanoid() }));
        }}
      />

      <h2>Contacts</h2>
      <Filter />
      {
        <ItemWrapper>
          <ContactsList />
        </ItemWrapper>
      }
      <GlobalStyle />
    </Wrapper>
  );
};
