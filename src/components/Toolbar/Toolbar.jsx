import { useDispatch, useSelector } from 'react-redux';
import classes from './Toolbar.module.scss';
import { clearCompleted } from '../../redux/todoSlice';
import { Filter } from '../Filter/Filter';
import { useMediaQuery } from 'react-responsive';

function Toolbar() {
  const isMobileScreen = useMediaQuery({ query: '(min-width: 767px)' });
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.app.tasks);
  const unresolvedTasks = tasks.filter((t) => t.completed === false).length;
  return (
    <div className={classes.toolbar}>
      <span>{unresolvedTasks} items left</span>
      {isMobileScreen && <Filter />}
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
