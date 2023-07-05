import { useDispatch, useSelector } from 'react-redux';
import { changeFilterMode } from '../../../redux/todoSlice';
function FilterItem({ mode }) {
  const dispatch = useDispatch();
  const filterMode = useSelector((state) => state.app.filterMode);
  return (
    <a
      data-active={filterMode === mode}
      href="#link"
      onClick={(e) => {
        e.preventDefault();
        dispatch(changeFilterMode({ mode }));
      }}
    >
      {mode}
    </a>
  );
}
export { FilterItem };
