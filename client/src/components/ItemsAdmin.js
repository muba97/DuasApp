import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const editSchema = yup.object().shape({
  title: yup.string().required('Title is Required'),
  arabic: yup.string().required('arabic is Required'),
  price: yup.string().required('Price is Required'),
  label: yup.string().required('Label is Required'),
  sources: yup.string().required('Price is Required'),
  description: yup.string().required('Description is Required'),
});

const emptyKeysObj = (obj) => {
  const emptyObj = Object.keys(obj).every((key) => {
    return obj[key] === '';
  });
  return emptyObj;
};

const atLeastOneEmptyKey = (obj) => {
  const oneFound = Object.keys(obj).some((key) => {
    return obj[key] === '';
  });
  return oneFound;
};
const AdminItems = ({ items }) => {
  const [initData, setInitData] = useState(items);
  const [serviceData, setServiceData] = useState(items);
  const [edit, setEdit] = useState(true);
  const [confirmDelete, setconfirmDelete] = useState(true);
  const [deleteToggle, setdeleteToggle] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm({
    reValidateMode: 'onSubmit',
    validationSchema: editSchema,
  });
  const toggle = () => setdeleteToggle(!deleteToggle);
  const handleRemove = () => {
    setconfirmDelete(false);
    setInitData(null);
    setServiceData(null);
  };
  const onSubmit = (data) => {
    if (edit !== false) {
      setInitData(data);
      setServiceData(data);
    }
  };
  const handleChange = (e) => {
    setServiceData({
      ...serviceData,
      [e.target.name]: e.target.value,
    });
  };
  const cancelClick = () => {
    setEdit(true);
    reset(initData);
    if (initData !== serviceData) {
      setServiceData(initData);
    }
  };

  const handleClick = () => {
    if (emptyKeysObj(serviceData) || atLeastOneEmptyKey(serviceData)) {
      setEdit(false);
    } else {
      setEdit(!edit);
    }
  };

  return (
    <div data-testid="serviceItems">
      {confirmDelete && (
        <section className="hero is-dark is-small pb-1 mb-1 mt-5 ml-3 mr-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field-body pt-3">
              <div className="field is-small">
                <label htmlFor="title" className="label has-text-primary ml-2 mr-2">
                  {' '}
                  Title
                </label>
                <div className="control ml-2">
                  <input
                    data-testid="input-title"
                    type="text"
                    className="input"
                    name="title"
                    placeholder="Title"
                    defaultValue={serviceData.title}
                    disabled={edit}
                    ref={register}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                {errors.title && <p className="help is-danger">{errors.title.message}</p>}
              </div>
              <div className="field is-small">
                <label htmlFor="label" className="label has-text-primary mr-2">
                  {' '}
                  Label
                </label>
                <div className="control">
                  <input
                    data-testid="input-label"
                    type="text"
                    className="input"
                    name="label"
                    placeholder="Label"
                    defaultValue={serviceData.label}
                    disabled={edit}
                    ref={register}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                {errors.label && <p className="help is-danger">{errors.label.message}</p>}
              </div>
              <div className="field is-small">
                <label htmlFor="sources" className="label has-text-primary mr-2">
                  {' '}
                  Sources
                </label>
                <div className="control mr-2">
                  <input
                    data-testid="input-sources"
                    type="text"
                    className="input "
                    name="sources"
                    placeholder="Sources"
                    defaultValue={serviceData.sources}
                    disabled={edit}
                    ref={register}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                {errors.sources && (
                  <p className="help is-danger">{errors.sources.message}</p>
                )}
              </div>
            </div>
            <div className="field pt-2">
              <label htmlFor="arabic" className="label has-text-primary ml-2 mr-2">
                {' '}
                Arabic
              </label>
              <div className="control ml-2 mr-2">
                <input
                  data-testid="input-arabic"
                  type="text"
                  className="input has-text-right"
                  name="arabic"
                  placeholder="Arabic"
                  defaultValue={serviceData.arabic}
                  disabled={edit}
                  ref={register}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              {errors.arabic && (
                <small className="help is-danger">{errors.arabic.message}</small>
              )}
            </div>
            <div className="field is-small">
              <label htmlFor="description" className="label has-text-primary ml-2 mr-2">
                {' '}
                Description
              </label>
              <div className="control ml-2 mr-2">
                <textarea
                  data-testid="input-description"
                  type="text"
                  className="textarea"
                  name="description"
                  placeholder="Description"
                  defaultValue={serviceData.description}
                  disabled={edit}
                  ref={register}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              {errors.description && (
                <p className="help is-danger">{errors.description.message}</p>
              )}
            </div>
            <div className="field is-grouped is-grouped-centered pb-3">
              {edit && (
                <p className="control">
                  <button
                    type="button"
                    data-testid="delete-cancel"
                    onClick={() => toggle()}
                    className="button is-primary"
                  >
                    {deleteToggle ? 'CANCEL' : 'DELETE'}
                  </button>
                </p>
              )}
              {!deleteToggle && (
                <p className="control">
                  <button
                    type="submit"
                    data-testid="edit-submit"
                    onClick={() => handleClick()}
                    className="button is-primary"
                  >
                    {edit ? 'EDIT' : 'SUBMIT'}
                  </button>
                </p>
              )}
              {!edit && (
                <p className="control">
                  <button
                    data-testid="cancelButton"
                    type="button"
                    onClick={() => cancelClick()}
                    className="button is-primary"
                  >
                    CANCEL
                  </button>
                </p>
              )}
              {deleteToggle && (
                <p className="control">
                  <button
                    data-testid="deleteButton"
                    type="button"
                    onClick={() => handleRemove()}
                    className="button is-primary"
                  >
                    CONFIRM
                  </button>
                </p>
              )}
            </div>
          </form>
        </section>
      )}
    </div>
  );
};

AdminItems.propTypes = {
  items: PropTypes.shape({
    title: PropTypes.string,
    arabic: PropTypes.string,
    label: PropTypes.string,
    sources: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
export default AdminItems;
