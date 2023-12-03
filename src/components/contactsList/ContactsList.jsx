import { useDispatch, useSelector } from 'react-redux';
import { ListBtn, ListItem, ListNumber, ListText } from './ContactsList.styled';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contactFilter = useSelector(state => state.filter.filter);
  const selectContacts = useSelector(state => state.contacts.contacts);

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
