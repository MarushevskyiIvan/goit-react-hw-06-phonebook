import { Filter } from './filter/FormFilter';
import { ContactForm } from './contactForm/ContactForm';
import { ContactsList } from './contactsList/ContactsList';
import { ItemWrapper, Wrapper } from './App.styled';
import { GlobalStyle } from 'GlobalStaled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const formSubmitHandler = ({ name, number }) => {
    if (
      contacts.some(
        contacts => contacts.value.name.toUpperCase() === name.toUpperCase()
      )
    ) {
      alert(`${name} is already  in contact`);
      return;
    }
    dispatch(addContact({ name, number }));
  };

  return (
    <Wrapper>
      <h1>Phone book</h1>
      <ContactForm submit={formSubmitHandler} />

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
