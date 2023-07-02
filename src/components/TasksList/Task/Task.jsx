import classes from './Task.module.scss';
import { TfiClose } from 'react-icons/tfi';
import { useDispatch } from 'react-redux';
import { removeSelectTask, toggleStatusTask } from '../../../redux/todoSlice';

function Task({ id, body, completed }) {
  const dispatch = useDispatch();
  return (
    <div className={classes.task}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            dispatch(toggleStatusTask(id));
          }}
        />
        <span>{body}</span>
      </label>
      <TfiClose
        style={{ cursor: 'pointer' }}
        onClick={() => {
          dispatch(removeSelectTask(id));
        }}
      />
    </div>
  );
}
export { Task };
