import Form from './Form/Form';
import { ContactList } from './ContactList/ContactList'
import Filter from './Filter/Filter'
import { AppBar } from './AppBar.styled'
  
  const App = () => (
    <AppBar>
      <Form />
      <Filter />
      <ContactList  />
    </AppBar>
  );

export default App;
