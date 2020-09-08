import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import LabelMods from './LabelMods';

const editSchema = yup.object().shape({
  title: yup.string().required('Title is Required'),
  time: yup.string().required('Time is Required'),
  price: yup.string().required('Price is Required'),
  description: yup.string().required('Description is Required'),
  label: yup.string().required('Label is Required'),
});



const NewService = () => {
  const [formData, setFormData] = useState([]);
  const [labelOpen, setlabelOpen] = useState(false);
  const [itemOpen, setitemOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    reValidateMode: 'onSubmit',
    validationSchema: editSchema,
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (data, e) => {
    setFormData(data);
    reset(e);
    console.log(formData);
  };

  const labelToggle = () => {
    if (itemOpen === true) {
      setitemOpen(!itemOpen);
      setlabelOpen(!labelOpen);
    } else {
      setlabelOpen(!labelOpen);
    }
  };
  const itemToggle = () => {
    if (labelOpen === true) {
      setitemOpen(!itemOpen);
      setlabelOpen(!labelOpen);
    } else {
      setitemOpen(!itemOpen);
    }
  };
  return (
    <div data-testid="newServiceInfo">
      <div className="field is-grouped is-grouped-centered pb-3 pt-5">
        <button
          type="button"
          className="button is-primary is-rounded is-large mr-2 ml-2"
          onClick={() => labelToggle()}
          data-testid="labelButton"
        >
          Add new labels
        </button>
        <button
          type="button"
          data-testid="itemButton"
          className="button is-primary is-rounded is-large mr-2 ml-2"
          onClick={() => itemToggle()}
        >
          Add new items
        </button>
      </div>
      {labelOpen && (
        <div>
          <LabelMods />
        </div>
      )}
      {itemOpen && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label htmlFor="title" className="label has-text-primary">
              {' '}
              Title *
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
            <label htmlFor="source" className="label has-text-primary">
              {' '}
              Source
              <div className="control">
                <input
                  required
                  data-testid="input-source"
                  type="text"
                  className="input is-primary"
                  name="source"
                  placeholder="Source"
                  ref={register}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </label>
          </div>
          <div className="field">
            <label htmlFor="arabic" className="label has-text-primary">
              {' '}
              Arabic
              <div className="control">
                <input
                  required
                  data-testid="input-arabic"
                  type="text"
                  className="input is-primary has-text-right"
                  name="arabic"
                  placeholder="Arabic"
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
      )}
    </div>
  );
};

export default NewService;
