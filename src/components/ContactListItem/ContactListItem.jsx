import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner';
import { Button } from '@chakra-ui/react';

import { deleteContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

import { ListItem } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const [load, setLoad] = useState(false);
  const { error } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleClikBtn = () => {
    setLoad(true);
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        setLoad(false);
        toast.success(`contact ${name} with ${number} deleted successfully`);
      })
      .catch(() => {
        setLoad(false);
        toast.error(`${error}`);
      });
  };

  return (
    <ListItem key={id}>
      <p>
        {name}: {number}
      </p>
      <Button
        type="button"
        onClick={handleClikBtn}
        colorScheme="teal"
        variant="outline"
        size="sm"
        width="80px"
      >
        {load && <RotatingLines strokeColor="teal" width="14" />}
        Delete
      </Button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
