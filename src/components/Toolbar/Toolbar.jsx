import classes from './Toolbar.module.scss';
import { Filter } from '../Filter/Filter';
import { useMediaQuery } from 'react-responsive';
import { useAppContext } from '../../hook/useAppContext';

function Toolbar() {
  const isMobileScreen = useMediaQuery({ query: '(min-width: 767px)' });
  const { tasks, setTasks } = useAppContext();
  const unresolvedTasks = tasks.filter((t) => t.completed === false).length;
  const clearCompletedTasks = () => {
    setTasks(tasks.filter((t) => !t.completed));
  };

  return (
    <div className={classes.toolbar}>
      <span>{unresolvedTasks} items left</span>
      {isMobileScreen && <Filter />}
      <button onClick={clearCompletedTasks}>Clear Completed</button>
    </div>
  );
}
export { Toolbar };
