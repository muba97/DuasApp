import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { API, graphqlOperation } from 'aws-amplify';
import { createLabels } from '../graphql/mutations';

const LabelMods = () => {
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
    reset(e);
    await API.graphql(graphqlOperation(createLabels, { input: FormData }));
  };

  return (
    <div data-testid="labelMods">
      <div className="is-centered">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label htmlFor="label" className="label has-text-primary">
              {' '}
              Label
              <div className="control">
                <input
                  required
                  data-testid="input-label"
                  type="text"
                  className="input is-primary"
                  name="label"
                  placeholder="Label"
                  ref={register}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </label>
          </div>
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
export default LabelMods;
