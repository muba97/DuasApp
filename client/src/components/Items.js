import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() => ({
  item: {
    justifyContent: 'center',
    display: 'block',
    boxSizing: 'border-box',
    width: '50%',
    borderRadius: '4px',
    border: '1px solid gray',
    padding: '7px 10px',
    marginBottom: 5,
    background: '#3C8B73',
    float: 'top',
    fontSize: '12px',
    '&:disabled': {
      opacity: '40%',
    },
  },
  title: {
    textAlign: 'center',
    color: '#3C8B73',
    width: '100%',
    float: 'top',
    fontSize: '4vw',
    justifyContent: 'center',
    marginTop: '0px',
  },
  arabic: {
    textAlign: 'right',
    color: '#3C8B73',
    width: '100%',
    float: 'top',
    fontSize: '3vw',
    justifyContent: 'center',
  },
  description: {
    textAlign: 'left',
    color: '#3C8B73',
    width: '100%',
    float: 'top',
    fontSize: '2vw',
    justifyContent: 'center',
  },
  sources: {
    textAlign: 'left',
    color: '#3C8B73',
    width: '100%',
    float: 'top',
    fontSize: '2vw',
    justifyContent: 'center',
  },
  smallBtn: {
    background: '#000000',
    justifyContent: 'center',
    display: 'flex',
    borderLeft: '1px solid',
    borderRight: '1px solid',
    color: 'white',
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    height: 40,
    width: '40%',
    padding: '8px 11px',
    marginBottom: 2,
    fontSize: '13px',
    '&:disabled': {
      opacity: '40%',
    },
    '&:hover': {
      opacity: '70%',
    },
  },
  span: {
    textAlign: 'left',
    justifyContent: 'center',
    display: 'block',
    boxSizing: 'border-box',
    background: '#121616',
    width: '90%',
    borderRadius: '4px',
    border: '1px solid gray',
    padding: '10px 15px',
    marginBottom: 10,
    fontSize: '12px',
    float: 'left',
    '&:disabled': {
      opacity: '40%',
    },
  },
  root: {
    margin: 40,
    marginTop: '5px',
  },
}));

const Items = ({items}) => {
  const classes = useStyle();
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
          <span className=" has-text-primary is-size-3 mr-2 is-size-5-mobile">{items.arabic}</span>
        </div>
        <div className="has-text-left">
          <span className=" has-text-primary is-size-5 ml-2 is-size-7-mobile">Description: {items.description}</span>
        </div>
        <div className="has-text-left">
          <span className=" has-text-primary is-size-5 ml-2 is-size-7-mobile">Source: {items.sources}</span>
        </div>
      </section>
    </div>
  );
};

export default Items;
