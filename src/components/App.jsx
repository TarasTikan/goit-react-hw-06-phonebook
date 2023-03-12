import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onDeleteContactsItem = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(item => item.id !== contactId)
    );
  };

  const onFormSubmitContacts = ({ name, number }) => {
    const contactItems = {
      name: name,
      id: nanoid(),
      number: number,
    };
    const checkName = contacts.map(({ name }) => {
      return name;
    });

    if (checkName[0] === name) {
      alert(`${checkName[0]} is already in contacts`);
    } else {
      setContacts(prevContacts => [contactItems, ...prevContacts]);
    }
  };

  const onChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const filterName = () => {
    const normalizedFiltr = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.includes(normalizedFiltr));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onFormSubmitContacts} />

      <h2>Contacts</h2>
      <Filter value={filter} changeFilter={onChangeFilter} />
      <ContactList
        contacts={filterName()}
        deleteContact={onDeleteContactsItem}
      />
    </div>
  );
}
