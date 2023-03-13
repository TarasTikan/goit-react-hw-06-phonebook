import React from 'react';
import { ContactBtn, ContactItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContacts } from 'redux/contactSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onDeleteContactsItem = contactId => {
    dispatch(deleteContacts(contactId));
  };
  const filterName = () => {
    const normalizedFiltr = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.includes(normalizedFiltr));
  };
  return (
    <ul>
      {filterName().map(({ id, name, number }) => (
        <ContactItem key={id}>
          <p>
            {name}: {number}
          </p>
          <ContactBtn type="button" onClick={() => onDeleteContactsItem(id)}>
            Delete
          </ContactBtn>
        </ContactItem>
      ))}
    </ul>
  );
};
