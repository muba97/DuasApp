import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { API, graphqlOperation } from 'aws-amplify';
import LabelMods from './LabelMods';
import { createItems } from '../graphql/mutations';
import { listLabelss } from '../graphql/queries';

const editSchema = yup.object().shape({
  title: yup.string().required('Title is Required'),
  label: yup.string().required('Label is Required'),
  sources: yup.string().required('Source is Required'),
  arabic: yup.string().required('Dua is Required'),
  description: yup.string().required('Description is Required'),
});
const duaList = [];

const NewService = () => {
  const [formData, setFormData] = useState([]);
  const [titleData, setTitleData] = useState([]);
  const [labelOpen, setlabelOpen] = useState(false);
  const [itemOpen, setitemOpen] = useState(false);
  const [selected, setselected] = useState(false);
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
  const handleTitleChange = (e) => {
    setTitleData({
      ...titleData,
      [e.target.name]: e.target.value,
    });
  };
  const onSelected = async (data, e) => {
    setTitleData(data);
    reset(e);
    await fetchLabels();
    setselected(true);
  };
  const onSubmit = async (data, e) => {
    setFormData(data);
    await API.graphql(graphqlOperation(createItems, { input: formData }));
    reset(e);
    setselected(false);
  };
  const fetchLabels = async () => {
    const labelFilter = {
      title: {
        contains: titleData.title, // filter when title = 'General'
      },
    };
    try {
      const duaData = await API.graphql(
        graphqlOperation(listLabelss, { filter: labelFilter })
      );
      duaList.push(duaData.data.listLabelss.items);
    } catch (error) {
      console.log('error on fetching songs', error);
    }
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
  const cancelClick = () => {
    setselected(false);
  }
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
        <div>
          {selected && (
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
                    <select
                      required
                      data-testid="input-label"
                      type="text"
                      className="input is-primary"
                      name="label"
                      placeholder="Label"
                      ref={register}
                      onChange={(e) => handleChange(e)}
                    >
                      {duaList[0].map((access) => (
                        <option value={access.label}>{access.label}</option>
                      ))}
                    </select>
                  </div>
                </label>
              </div>
              <div className="field">
                <label htmlFor="sources" className="label has-text-primary">
                  {' '}
                  Source
                  <div className="control">
                    <input
                      required
                      data-testid="input-sources"
                      type="text"
                      className="input is-primary"
                      name="sources"
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
                <p className="control">
                  <button
                    data-testid="cancelButton"
                    type="button"
                    onClick={() => cancelClick()}
                    className="button is-primary"
                  >
                    Cancel
                  </button>
                </p>
              </div>
            </form>
          )}
          {!selected && (
            <form onSubmit={handleSubmit(onSelected)}>
              <div className="field">
                <label htmlFor="title" className="label has-text-primary">
                  {' '}
                  Title
                  <div className="control">
                    <select
                      required
                      data-testid="input-title"
                      type="text"
                      className="input is-primary"
                      name="title"
                      placeholder="Title"
                      ref={register}
                      onChange={(e) => handleTitleChange(e)}
                    >
                      <option>Choose a Title</option>
                      <option value="General">General</option>
                      <option value="Emotional">Emotional</option>
                      <option value="Situational">Situational</option>
                    </select>
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
      )}
    </div>
  );
};

export default NewService;
