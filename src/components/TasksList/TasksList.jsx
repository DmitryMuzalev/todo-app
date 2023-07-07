import { Task } from './Task/Task';
import { Toolbar } from '../Toolbar/Toolbar';
import classes from './TasksList.module.scss';
import { useAppContext } from '../../hook/useAppContext';

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
  const { tasks, filterMode } = useAppContext();

  const list = tasksFiltering(tasks, filterMode).map((task) => (
    <li key={task.id}>
      <Task {...task} />
    </li>
  ));
  return (
    <div className={classes.list}>
      <ul>{list}</ul>
      <Toolbar />
    </div>
  );
}
export { TasksList };
