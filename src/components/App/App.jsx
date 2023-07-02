import { useEffect } from 'react';
import { Form } from '../Form/Form';
import { Header } from '../Heder/Heder';
import { TasksList } from '../TasksList/TasksList';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../../redux/todoSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <div className={'curtain'}></div>
      <div className="container">
        <Header />
        <main className="main">
          <Form />
          <TasksList />
          {/*<Toolbar />*/}
          {/*<Filter />*/}
        </main>
      </div>
    </>
  );
}

export default App;
