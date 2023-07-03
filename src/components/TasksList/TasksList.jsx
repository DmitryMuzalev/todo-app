import { useSelector } from 'react-redux';
import { Task } from './Task/Task';
import { Toolbar } from '../Toolbar/Toolbar';

function TasksList() {
  const tasks = useSelector((state) => state.app.tasks);

  const list = tasks.map((task) => (
    <li key={task.id}>
      <Task {...task} />
    </li>
  ));

  return (
    <>
      <ul>{list}</ul>
      <Toolbar />
    </>
  );
}
export { TasksList };
