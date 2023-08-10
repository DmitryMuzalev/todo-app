import { createContext, useEffect } from 'react';
import { useLocalStorage } from '../../hook/useLocalStorage';

export const AppContext = createContext(null);

function Context({ children }) {
  const [tasks, setTasks] = useLocalStorage([], 'tasks');
  const [theme, setTheme] = useLocalStorage('dark', 'theme');
  const [filterMode, setFilterMode] = useLocalStorage('all', 'filterMode');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const value = { tasks, setTasks, theme, setTheme, filterMode, setFilterMode };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
export { Context };
