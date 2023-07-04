function FilterItem({ mode }) {
  return (
    <a
      href="#link"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      {mode}
    </a>
  );
}
export { FilterItem };

function Filter() {
  return (
    <nav>
      <FilterItem mode="all" />
      <FilterItem mode="active" />
      <FilterItem mode="completed" />
    </nav>
  );
}
export { Filter };
