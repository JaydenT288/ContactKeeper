import ContactList from "./ContactList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <ContactList contacts={["contact1","contact2","contact3"]}></ContactList>
    </div>
  );
}

export default App;
