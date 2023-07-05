import { Filter } from '../../components/Filter/Filter';
import classes from './MobileToolbar.module.scss';

function MobileToolbar() {
  return (
    <div className={classes.toolbar}>
      <Filter />
    </div>
  );
}
export { MobileToolbar };
