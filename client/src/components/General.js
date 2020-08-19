import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  field: {
    margin: 10,
  },
  logo: {
    height: 140,
    weight: 180,
    position: 'absolute',
    left: '50%',
    top: '20%',
    transform: 'translate(-50%, -50%)',
    color: '#D7C8BC',
    justifyContent: 'space-between',
    display: 'flex',
    borderRadius: '4px',
    marginBottom: 5,
    padding: '10px 15px 10px 15px',
  },
  btn: {
    justifyContent: 'space-between',
    display: 'flex',
    background: '#121616',
    borderRadius: '4px',
    marginBottom: 5,
    color: 'white',
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    fontSize: '13px',
    width: '100%',
    padding: '10px 15px 10px 15px',
    '&:disabled': {
      opacity: '40%',
    },
    '&:hover': {
      background: '#3C8B73',
    },
  },
});
const General = ({ labels, items }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  console.log('item: ', items);
  console.log('labels: ', labels);
  return (
    <div data-testid="generalInfo">
      <button
        className={classes.btn}
        type="button"
        onClick={() => toggle()}
        data-testid="openButton"
      >
        <div className={classes.field}>
          <p className={classes.field}> {labels} </p>
        </div>
        <div className={classes.field}>
          <p>{open ? 'Close' : 'Expand'}</p>
        </div>
      </button>
      {open && (
        <ul className={classes.field}>
          {items.map((item) => (
            <div
              data-testid="serviceItems"
              className={classes.field}
              key={items.toString()}
            >
              <items items={item} />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};
export default General;
