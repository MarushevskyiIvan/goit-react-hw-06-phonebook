import { Filter } from './filter/FormFilter';
import { ContactForm } from './contactForm/ContactForm';
import { ContactsList } from './contactsList/ContactsList';
import { ItemWrapper, Wrapper } from './App.styled';
import { GlobalStyle } from 'GlobalStale';

export const App = () => {
  return (
    <Wrapper>
      <h1>Phone book</h1>
      <ContactForm />

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
