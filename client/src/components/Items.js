import React from 'react';

const Items = ({items}) => {
  return (
    <div>
      <section className="hero is-primary is-small pb-1 mb-1 mt-5">
        <div className="has-text-centered">
          <span className="is-uppercase has-text-dark has-text-weight-bold is-size-5 is-size-7-mobile">
            {items.title}
          </span>
        </div>
      </section>
      <section className="hero is-dark is-medium">
        <div className="has-text-right">
          <span className=" has-text-primary is-size-3 mr-2 is-size-5-mobile">
            {items.arabic}
          </span>
        </div>
        <div className="has-text-left">
          <span className=" has-text-primary is-size-5 ml-2 is-size-7-mobile">
            Description: {items.description}
          </span>
        </div>
        <div className="has-text-left">
          <span className=" has-text-primary is-size-5 ml-2 is-size-7-mobile">
            Source: {items.sources}
          </span>
        </div>
      </section>
    </div>
  );
};

export default Items;
