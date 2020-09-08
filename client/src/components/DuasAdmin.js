import React, { useState } from 'react';
import Items from './ItemsAdmin';
import PropTypes from 'prop-types';

const Duas = ({ labels, duaItems }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  return (
    <div data-testid="duaInfo">
      <button
        className="button is-medium is-fullwidth hover-color is-dark is-focused has-text-right is-size-5-mobile"
        type="button"
        onClick={() => toggle()}
        data-testid="openButton"
      >
        <p className=" is-uppercase is-text-left has-text-primary has-text-weight-bold is-size-6 is-size-7-mobile">
          {' '}
          {labels}{' '}
        </p>
      </button>
      {open && (
        <ul>
          {duaItems.map((item) => (
            <div data-testid="serviceItems" key={duaItems.toString()}>
              <Items items={item} />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Duas;
