import { useDispatch, useSelector } from 'react-redux';
import classes from './Toolbar.module.scss';
import { clearCompleted } from '../../redux/todoSlice';
import { Filter } from '../Filter/Filter';

function Toolbar() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.app.tasks);
  const unresolvedTasks = tasks.filter((t) => t.completed === false).length;
  return (
    <div className={classes.toolbar}>
      <p>{unresolvedTasks} items left</p>
      <Filter />
      <button
        onClick={() => {
          dispatch(clearCompleted());
        }}
      >
        Clear Completed
      </button>
    </div>
  );
}
export { Toolbar };
