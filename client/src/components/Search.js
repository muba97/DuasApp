import React from 'react';

const Search = () => {
  return (
    <div className="field is-grouped">
      <p className="control is-expanded">
        <input className="input" type="text" placeholder="Find a repository" />
      </p>
      <p className="control">
        <a className="button is-primary">Search</a>
      </p>
    </div>
  );
};

export default Search;
