import { Form } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const ContactsPage = () => {
  return (
    <>
      <Form />
      <Filter />
      <ContactList />
    </>
  );
};
export default ContactsPage;
