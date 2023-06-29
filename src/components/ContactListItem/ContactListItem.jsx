import { useState } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner';
import { Button, Icon } from '@chakra-ui/react';
import { IoIosContact } from 'react-icons/io';

import { deleteContact } from 'redux/operations';

import { ListItem, BoxIcon } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const [load, setLoad] = useState(false);
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
        toast.error(`Sorry samething wrong, please try again!`);
      });
  };

  return (
    <ListItem key={id}>
      <BoxIcon>
        <Icon as={IoIosContact} boxSize={6} color="#020c59" />
        <p>
          {name}: {number}
        </p>
      </BoxIcon>
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
