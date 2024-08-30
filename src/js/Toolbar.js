const Toolbar = ({ filters, selected, onSelectFilter }) => {
    return (
        <div className="portfolio-toolbar">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={selected === filter ? 'active' : ''}
              onClick={() => onSelectFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
    );
  };  

export default Toolbar;
