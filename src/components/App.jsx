import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, deleteContacts } from 'redux/contactSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';

export function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onDeleteContactsItem = contactId => {
    dispatch(deleteContacts(contactId));
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
      dispatch(addContacts(contactItems));
    }
  };

  const onChangeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
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
