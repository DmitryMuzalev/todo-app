import { useContext } from 'react';
import { AppContext } from '../hoc/Context/Context';

export const useAppContext = () => useContext(AppContext);
