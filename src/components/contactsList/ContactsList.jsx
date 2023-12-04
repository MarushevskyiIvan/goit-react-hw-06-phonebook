import { useDispatch, useSelector } from 'react-redux';
import { ListBtn, ListItem, ListNumber, ListText } from './ContactsList.styled';

import { contactsSelector, deleteContact } from 'redux/contactsSlice';
import { filterSelector } from 'redux/filterSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contactFilter = useSelector(filterSelector);
  const selectContacts = useSelector(contactsSelector);

  const contacts = () => {
    return selectContacts.filter(({ value: { name } }) =>
      name.toLowerCase().includes(contactFilter.toLowerCase())
    );
  };

  return contacts().map(({ value: { name, number }, id }) => {
    return (
      contacts().length > 0 && (
        <ListItem key={id}>
          <ListText>{name}</ListText> :<ListNumber>{number}</ListNumber>
          <ListBtn onClick={() => dispatch(deleteContact(id))} type="button">
            delete
          </ListBtn>
        </ListItem>
      )
    );
  });
};
