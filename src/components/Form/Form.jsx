import { useForm } from 'react-hook-form';
import classes from './Form.module.scss';
import { useState } from 'react';
import { setNewTask } from '../../redux/todoSlice';
import { useDispatch } from 'react-redux';

function Form() {
  const [checked, setChecked] = useState(false);
  const { register, handleSubmit, reset } = useForm({ mode: 'onSubmit' });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const newTask = {
      id: new Date().toISOString(),
      body: data.body,
      completed: data.completed,
    };

    dispatch(setNewTask(newTask));
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
