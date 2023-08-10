import classes from './Task.module.scss';
import { TfiClose } from 'react-icons/tfi';
import { useAppContext } from '../../../hook/useAppContext';

function Task({ id, body, completed }) {
  const { tasks, setTasks } = useAppContext();
  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };
  const changeStatusTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };
  return (
    <div className={classes.task}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => changeStatusTask(id)}
        />
        <p className={completed ? classes.completed : null}>{body}</p>
      </label>
      <div className={classes.remove} onClick={() => removeTask(id)}>
        <TfiClose />
      </div>
    </div>
  );
}
export { Task };
