import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { gettIsLoading, getError } from "redux/selectors";
import { fetchAll } from "redux/operations";
import Form from './Form/Form';
import { ContactList } from './ContactList/ContactList'
import Filter from './Filter/Filter'
import { AppBar } from './AppBar.styled'
import  Loader  from  '../components/Loader/Loader'


  
const App = () => {
 const dispatch = useDispatch();
  const isLoading = useSelector(gettIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

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
