import { useForm } from 'react-hook-form';
import classes from './Form.module.scss';
import { useState } from 'react';
import { useAppContext } from '../../hook/useAppContext';

function Form() {
  const { tasks, setTasks } = useAppContext();
  const [checked, setChecked] = useState(false);
  const { register, handleSubmit, reset } = useForm({ mode: 'onSubmit' });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const onSubmit = ({ body, completed }) => {
    const newTask = {
      id: new Date().toISOString(),
      body,
      completed,
    };
    addTask(newTask);
    setChecked(false);
    reset();
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className={classes.form}
    >
      <input
        type="checkbox"
        {...register('completed')}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <input
        type="text"
        {...register('body', { required: true })}
        placeholder="Create a new todo..."
      />
    </form>
  );
}
export { Form };
