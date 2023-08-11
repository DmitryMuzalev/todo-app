import { Task } from './Task/Task';
import { Toolbar } from '../Toolbar/Toolbar';
import classes from './TasksList.module.scss';
import { useAppContext } from '../../hook/useAppContext';
import { AnimatePresence, Reorder } from 'framer-motion';

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
  const { tasks, filterMode, setTasks } = useAppContext();

  const variants = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: 'auto' },
    exit: { opacity: 0, height: 0 },
  };

  const list = tasksFiltering(tasks, filterMode).map((task) => (
    <Reorder.Item
      key={task.id}
      value={task}
      {...variants}
      transition={{ duration: 0.3 }}
      whileDrag={{
        scale: 0.95,
        boxShadow: 'var(--shadow-color) 0px 18px 50px -10px',
      }}
    >
      <Task {...task} />
    </Reorder.Item>
  ));
  return (
    <div className={classes.list}>
      <Reorder.Group as="ul" axis="y" values={tasks} onReorder={setTasks}>
        <AnimatePresence initial={false}> {list}</AnimatePresence>
      </Reorder.Group>
      <Toolbar />
    </div>
  );
}
export { TasksList };
