import ContactList from "./ContactList";
import TopControls from "./TopControls";
import ContactEdit from "./ContactEdit";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import ContactsContext from "./ContactsContext";

function App() {
  const [showAddContact, setShowAddContact] = React.useState(false);

  const addContact = (contact) => {
    setShowAddContact(true);
  };

  return (
    <ContactsContext.Provider value={{}}>
      <div className="App">
        <header className="App-header">
        </header>

        <ContactList></ContactList>
        <TopControls addContact={addContact} className="top-controls"></TopControls>

        <ContactEdit show={showAddContact} handleClose={()=>setShowAddContact(false)}>
        </ContactEdit>
      </div>
    </ContactsContext.Provider>
  );
}

export default App;