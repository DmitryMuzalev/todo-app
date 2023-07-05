import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Task } from './Task/Task';
import { Toolbar } from '../Toolbar/Toolbar';
import classes from './TasksList.module.scss';
import { Preloader } from '../Preloader/Preloader';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../../redux/todoSlice';

const tasksFiltering = (tasks, mode) => {
  switch (mode) {
    case 'active':
      return tasks.filter((t) => !t.completed);
    case 'completed':
      return tasks.filter((t) => t.completed);
    default:
      return tasks;
  }
};

function TasksList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  const { tasks, filterMode, status } = useSelector((state) => state.app);

  const list = tasksFiltering(tasks, filterMode).map((task) => (
    <li key={task.id}>
      <Task {...task} />
    </li>
  ));
  return (
    <div className={classes.list}>
      {status === 'pending' && <Preloader />}
      <ul>{list}</ul>
      <Toolbar />
    </div>
  );
}
export { TasksList };
