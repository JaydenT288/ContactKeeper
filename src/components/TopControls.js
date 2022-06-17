const ContactControls = (props) => {
  const {addContact} = props;
  return (
  <div>
      <button onClick={addContact}>Add</button>
  </div>
  );
}

export default ContactControls;