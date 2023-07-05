import { FilterItem } from './FilterItem/FilterItem';
import classes from './Filter.module.scss';

function Filter() {
  return (
    <nav className={classes.filter}>
      <FilterItem mode="all" />
      <FilterItem mode="active" />
      <FilterItem mode="completed" />
    </nav>
  );
}
export { Filter };
