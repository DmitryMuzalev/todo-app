import { useEffect, useState } from 'react';

export const useLocalStorage = (initialValue, key) => {
  const getValue = () => {
    const store = localStorage.getItem(key);
    return store ? JSON.parse(store) : initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
