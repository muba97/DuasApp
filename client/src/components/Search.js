import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { useForm } from 'react-hook-form';
import { listItemss } from '../graphql/queries';
import Items from './Items';

const Search = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState([]);
  const [toggle, setToggle] = useState(true);
  const { register, handleSubmit, reset } = useForm({
    reValidateMode: 'onSubmit',
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const fetchItems = async () => {
    const itemFilter = {
      description: {
        contains: formData.search, // filter when title = 'General'
      },
    };
    try {
      const duaData = await API.graphql(
        graphqlOperation(listItemss, { filter: itemFilter })
      );
      if (duaData.data.listItemss.items.length === 0) {
        setToggle(false);
      } else {
        setToggle(true);
      }
      await setItems(duaData.data.listItemss.items);
    } catch (error) {
      console.log('error on fetching songs', error);
    }
  };
  const onSubmit = async (data, e) => {
    setFormData(data);
    fetchItems();
    reset(e);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field is-grouped">
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              name="search"
              placeholder="Find a dua"
              ref={register}
              onChange={(e) => handleChange(e)}
              required
            />
          </p>
          <p className="control">
            <button type="submit" className="button is-primary">
              Search
            </button>
          </p>
        </div>
      </form>
      {!toggle && <div>No Dua Found Search Again</div>}
      {toggle && (
        <div>
          {items.map((access) => (
            <div data-testid="serviceItems" key={access.label}>
              <Items items={access} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
