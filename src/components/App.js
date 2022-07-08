import ContactList from "./ContactList";
import TopControls from "./TopControls";
import ContactEdit from "./ContactEdit";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import {
  ContactsContext,
  SHOW_MODAL,
} from "./ContactsContext";
import EmailEdit from './EmailEdit';

function App() {
  const { showModal, activityEmail, setShowContact, setShowEmail} = React.useContext(ContactsContext);

  return (
      <div className="App">
        <header className="App-header"></header>
        <ContactList></ContactList>
        <TopControls></TopControls>

        <EmailEdit activityEmail={activityEmail}
          show={showModal === SHOW_MODAL.Email}
          handleClose={() => setShowEmail(false)}
        ></EmailEdit>

        <ContactEdit
          show={showModal === SHOW_MODAL.AddContact}
          handleClose={() => setShowContact(false)}
        ></ContactEdit>
      </div>
  );
}

export default App;
