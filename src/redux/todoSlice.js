import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from '../config';

export const fetchTasks = createAsyncThunk('todo/fetchTasks', async () => {
  const response = await fetch(API_BASE_URL);
  return await response.json();
});

export const setNewTask = createAsyncThunk(
  'todo/todoSlice',
  async (body, { dispatch }) => {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (response.ok) dispatch(addTask(body));
    else return;
  }
);

export const removeSelectTask = createAsyncThunk(
  'todo/removeTask',
  async (id, { dispatch }) => {
    const response = await fetch(API_BASE_URL + id, {
      method: 'DELETE',
    });
    if (response.ok) dispatch(removeTask({ id }));
  }
);

export const toggleStatusTask = createAsyncThunk(
  'todo/toggleStatusTask',
  async (id, { dispatch, getState }) => {
    const currentTask = getState().app.tasks.find((task) => task.id === id);
    const response = await fetch(API_BASE_URL + id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !currentTask.completed }),
    });
    if (response.ok) dispatch(toggleStatus({ id }));
    else return;
  }
);

export const clearCompleted = createAsyncThunk(
  'todo/clearCompleted',
  async (_, { getState, dispatch }) => {
    const tasks = getState().app.tasks;
    const completedTasks = tasks.filter((t) => t.completed === true);
    completedTasks.forEach((t) => {
      dispatch(removeSelectTask(t.id));
    });
  }
);

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: [],
    status: 'fulfilled',
    filter: 'all',
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    toggleStatus: (state, action) => {
      state.tasks.map((task) =>
        task.id === action.payload.id
          ? (task.completed = !task.completed)
          : task
      );
    },
    changeFilter: (state, action) => {
      state.filter = action.payload.mode;
    },
  },
  extraReducers: {
    [fetchTasks.pending]: (state) => {
      state.status = 'pending';
    },
    [fetchTasks.rejected]: (state) => {
      state.status = 'rejected';
    },
    [fetchTasks.fulfilled]: (state, action) => {
      state.tasks = action.payload;
      state.status = 'fulfilled';
    },
  },
});

const { addTask, removeTask, toggleStatus } = todoSlice.actions;
export default todoSlice.reducer;
