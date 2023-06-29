import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';

import { selectContacts, selectFilter } from 'redux/selectors';

import { fetchContacts } from 'redux/operations';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';
// import { NoServise } from 'components/NoServise/NoServise';
import { Loader } from 'components/Loader/Loader';

import { List } from './ContactList.styled';

export const ContactList = () => {
  const [load, setLoad] = useState(false);
  const { items } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  // const { items, isLoading, error } = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoad(true);
    dispatch(fetchContacts())
      .unwrap()
      .then(() => {
        setLoad(false);
      })
      .catch(() => {
        setLoad(false);
        toast.error(`Sorry samething wrong, please try again!`);
      });
  }, [dispatch]);

  const getVisibleContact = () => {
    if (!filter) {
      return items;
    }

    const normalizedFilter = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContact = getVisibleContact();

  return (
    <>
      {load && <Loader />}
      <List>
        {visibleContact.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
      </List>
    </>
  );
};
