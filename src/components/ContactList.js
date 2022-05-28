import Contact from './Contact'

const ContactList = (props) => {
  const {contacts} = props;


  return (
    <div class = "contactList">
        {contacts.map((contact) => (
             <Contact contactData = {contacts}></Contact>
        ))}
    </div>
  )
}

export default ContactList