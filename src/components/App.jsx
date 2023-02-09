import { useSelector } from "react-redux";

import { gettIsLoading, getError } from "redux/selectors";
import Form from './Form/Form';
import { ContactList } from './ContactList/ContactList'
import Filter from './Filter/Filter'
import { AppBar } from './AppBar.styled'
import  Loader  from  '../components/Loader/Loader'


  
const App = () => {
  const isLoading = useSelector(gettIsLoading);
  const error = useSelector(getError);

  return (
    <AppBar>
      <Form />
      <Filter />
      <ContactList />
      {isLoading && !error && <Loader/>}
    </AppBar>
  )
};

export default App;
