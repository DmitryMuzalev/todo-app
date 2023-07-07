import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext(null);

function Context({ children }) {
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState('dark');
  const [filterMode, setFilterMode] = useState('all');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const value = { tasks, setTasks, theme, setTheme, filterMode, setFilterMode };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
export { Context };
