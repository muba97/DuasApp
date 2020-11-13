import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { API, graphqlOperation } from 'aws-amplify';
import { createFundRaisers } from '../graphql/mutations';

const NewFundItem = () => {
  const [formData, setFormData] = useState([]);
  const { register, handleSubmit, reset } = useForm({
    reValidateMode: 'onSubmit',
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (data, e) => {
    setFormData(data);
    await API.graphql(graphqlOperation(createFundRaisers, { input: data }));
    reset(e);
  };

  return (
    <div>
      <div className="is-centered">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label htmlFor="title" className="label has-text-primary">
              {' '}
              Title
              <div className="control">
                <input
                  required
                  data-testid="input-title"
                  type="text"
                  className="input is-primary"
                  name="title"
                  placeholder="Title"
                  ref={register}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </label>
          </div>
          <div className="field">
            <label htmlFor="link" className="label has-text-primary">
              {' '}
              Donation Link
              <div className="control">
                <input
                  required
                  data-testid="input-link"
                  type="text"
                  className="input is-primary"
                  name="link"
                  placeholder="Link"
                  ref={register}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </label>
          </div>
          <div className="field">
            <label htmlFor="description" className="label has-text-primary">
              {' '}
              Description
              <div className="control">
                <textarea
                  required
                  data-testid="input-description"
                  type="text"
                  className="textarea is-primary"
                  name="description"
                  placeholder="Description"
                  ref={register}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </label>
          </div>
          <div className="field is-grouped is-grouped-centered pb-3 pt-5">
            <input
              type="submit"
              data-testid="add-submit"
              className="button is-primary mr-2 ml-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default NewFundItem;
