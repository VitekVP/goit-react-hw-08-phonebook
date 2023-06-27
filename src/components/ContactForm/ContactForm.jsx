import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner';
import { Input, Button } from '@chakra-ui/react';

import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

import { FormPhonebook, Label } from './ContactForm.styled';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [load, setLoad] = useState(false);
  const { items, error } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;

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

  const reset = () => {
    setName('');
    setNumber('');
  };

  const addContactFromForm = (name, number) => {
    const normalizedName = name.toLocaleLowerCase().trim();
    const findName = items.find(
      contact => contact.name.toLocaleLowerCase() === normalizedName
    );

    if (findName) {
      toast.warning(`${name} is already in the contacts`);
      return;
    }

    const normalizedNumber = number;
    const findNumber = items.find(
      contact => contact.number === normalizedNumber
    );

    if (findNumber) {
      toast.warning(`${number} is already in the contacts`);
      return;
    }
    setLoad(true);
    dispatch(addContact({ name, number }))
      .unwrap()
      .then(() => {
        setLoad(false);
        toast.success(`contact ${name} with ${number} added successfully`);
        reset();
      })
      .catch(() => {
        setLoad(false);
        toast.error(`${error}`);
      });
  };

  const handleSubmit = event => {
    event.preventDefault();
    addContactFromForm(name, number);
  };

  return (
    <FormPhonebook onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
          pattern="^[a-zA-Zа-яА-Я]+(?:[' -][a-zA-Zа-яА-Я]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          variant="filled"
          focusBorderColor="teal"
          placeholder="Enter your name"
          color="teal"
          _placeholder={{ opacity: 0.7, color: 'inherit' }}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          required
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          variant="filled"
          focusBorderColor="teal"
          placeholder="Enter your number"
          color="teal"
          _placeholder={{ opacity: 0.7, color: 'inherit' }}
        />
      </Label>
      <Button type="submit" colorScheme="teal">
        {load && <RotatingLines strokeColor="white" width="16" />}
        Add contact
      </Button>
    </FormPhonebook>
  );
};
