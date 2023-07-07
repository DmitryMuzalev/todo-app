import { useAppContext } from '../../../hook/useAppContext';
function FilterItem({ mode }) {
  const { filterMode, setFilterMode } = useAppContext();
  return (
    <a
      data-active={filterMode === mode}
      href="#link"
      onClick={(e) => {
        e.preventDefault();
        setFilterMode(mode);
      }}
    >
      {mode}
    </a>
  );
}
export { FilterItem };
