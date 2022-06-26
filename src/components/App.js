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

function App() {
  const { showModal, setShowContact } = React.useContext(ContactsContext);

  // React.useEffect(
  //   ()=>{
  //     emailjs.init(process.env.REACT_APP_EMAILJS_API_KEY)
  //     emailjs.send('<Replace with your service id>', '<Replace with your template id', {subject: 'Hello you got a new msg', content: 'msg content', to_email: 'hello@abc.gmail'})
  //   }, [])

  return (
      <div className="App">
        <header className="App-header"></header>
        <ContactList></ContactList>
        <TopControls></TopControls>

        <ContactEdit
          show={showModal === SHOW_MODAL.AddContact}
          handleClose={() => setShowContact(false)}
        ></ContactEdit>
      </div>
  );
}

export default App;
