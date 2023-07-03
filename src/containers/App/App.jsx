import { useEffect } from 'react';
import { Form } from '../../components/Form/Form';
import { Header } from '../../components/Heder/Heder';
import { TasksList } from '../../components/TasksList/TasksList';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../../redux/todoSlice';
import { Curtain } from '../../components/Curtain/Curtain';
import { Container } from '../Container/Container';
import { Main } from '../Main/Main';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <Curtain />
      <Container>
        <Header />
        <Main>
          <Form />
          <TasksList />
          {/*<Filter />*/}
        </Main>
        {/*<Footer />*/}
      </Container>
    </>
  );
}

export default App;
