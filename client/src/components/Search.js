import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Search = () => {
  const { register, handleSubmit, errors, reset } = useForm({
    reValidateMode: 'onSubmit',
  });
  return (
    <div>
      <form>
        <div className="field is-grouped">
          <p className="control is-expanded">
            <input className="input" type="text" placeholder="Find a repository" />
          </p>
          <p className="control">
            <button className="button is-primary">Search</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Search;
