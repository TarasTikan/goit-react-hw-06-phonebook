import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './Filter.styled';
export const Filter = ({ value, changeFilter }) => {
  return (
    <label>
      Find contacts by name
      <Input
        type="text"
        name="name"
        value={value}
        onChange={changeFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func.isRequired,
};
