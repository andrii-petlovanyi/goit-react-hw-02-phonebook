import { List, ListItem, ListItemText, BtnDel } from './ConctactsList.styled';

export const ContactListItem = ({ contact, onDelete }) => {
  return (
    <ListItem id={contact.id}>
      <ListItemText>
        <b>{contact.name}</b> : {contact.number}
      </ListItemText>
      <BtnDel
        type="button"
        onClick={() => {
          onDelete(contact.id);
        }}
      ></BtnDel>
    </ListItem>
  );
};

export const ContactList = ({ contacts, filter, onDelete }) => {
  if (filter !== '') {
    return;
  }

  return (
    <List>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};
