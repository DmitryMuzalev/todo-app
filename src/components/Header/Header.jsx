import { useAppContext } from '../../hook/useAppContext';
import classes from './Header.module.scss';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

function Header() {
  const { theme, setTheme } = useAppContext();

  const onToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className={classes.header}>
      <h1>TODO</h1>
      <div onClick={onToggleTheme} className={classes.switcher}>
        {theme === 'dark' ? <BsSunFill /> : <BsMoonFill />}
      </div>
    </header>
  );
}
export { Header };
