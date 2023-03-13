import React, { useState } from 'react';
import { Form, Label, Input, FormBtn } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactSlice';
import { nanoid } from 'nanoid';
import { getContacts } from 'redux/selectors';
export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const onFormSubmitContacts = event => {
    event.preventDefault();
    const contactItems = {
      name,
      id: nanoid(),
      number,
    };
    const checkName = contacts.map(({ name }) => {
      return name;
    });

    if (checkName[0] === name) {
      alert(`${checkName[0]} is already in contacts`);
    } else {
      dispatch(addContacts(contactItems));
      setName('');
      setNumber('');
    }
  };

  return (
    <Form onSubmit={onFormSubmitContacts}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <FormBtn type="submit">Add Contact</FormBtn>
    </Form>
  );
}
