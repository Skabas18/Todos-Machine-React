import React, {useEffect} from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, params, setParams , loading}) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);

    let params = {
      search: event.target.value,
    };
    setParams(params);
  };

  useEffect(() => {
    const search = params.get("search") ?? "";
    setSearchValue(search);
  }, [params]);

  return (
    <input
      className="TodoSearch"
      placeholder="Search..."
      type="text"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };