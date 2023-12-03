import { useDispatch, useSelector } from 'react-redux';
import { ListBtn, ListItem, ListNumber, ListText } from './ContactsList.styled';
import { deleteContact } from 'redux/configureStore';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contactFilter = useSelector(state => state.filter);
  const selectContacts = useSelector(state => state.contacts);

  const contacts = () => {
    return selectContacts.filter(({ name }) =>
      name.toLowerCase().includes(contactFilter.toLowerCase())
    );
  };

  return contacts().map(({ name, id, number }) => {
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
