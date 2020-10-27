import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

const useStyle = makeStyles(() => ({
  root: {
    margin: 5,
    marginTop: '5px',
  },
  dividers: {
    backgroundColor: '#121616',
    marginTop: 5,
    marginBottom: 3,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 60,
  },
}));
const Donation = ({ items }) => {
  const classes = useStyle();
  return (
    <div className="mt-6">
      <Divider className={classes.dividers} />
      <div className="mt-3 has-text-centered">
        <span className="is-uppercase has-text-dark has-text-weight-bold is-size-5 is-size-7-mobile">
          {items.title}
        </span>
      </div>
      <div className=" mt-2 has-text-centered">
        <span className=" has-text-dark is-family-primary is-size-6 is-size-7-mobile">
          {items.description}
        </span>
      </div>
      <div className="mt-2 has-text-centered">
        <p className="control">
          <a href={items.link}>
            <button type="submit" className="button is-primary">
              Link
            </button>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Donation;
