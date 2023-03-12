import React from 'react';
import { ContactBtn, ContactItem } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <p>
            {name}: {number}
          </p>
          <ContactBtn type="button" onClick={() => deleteContact(id)}>
            Delete
          </ContactBtn>
        </ContactItem>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
