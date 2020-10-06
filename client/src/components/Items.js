import { setRef } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import { exportComponentAsPNG } from 'react-component-export-image';
import backgroundPic from '../masjid_pic_filtered.jpg';

// const useStyle = makeStyles(() => ({
//   imageTopContent: {
//     position: 'absolute',
//     bottom: '85%',
//     left: '46.5%',
//     color: 'rgb(64 97 32)',
//     textAlign: 'center',
//   },
//   imageBotContent: {
//     position: 'absolute',
//     bottom: '35%',
//     left: '45.5%',
//     color: 'white',
//     fontSize: '2rem',
//     textAlign: 'center',
//   },
// }));

const Items = ({ items }) => {
  const componentRef = useRef();
  const [refer, setref] = useState(false);

  const classes = {
    imageTopContent: {
      position: 'absolute',
      bottom: '70%',
      left: '163px',
      color: 'rgb(64 97 32)',
      textAlign: 'center',
      width: '300px',
      height: '200px',
    },
    imageBotContent: {
      position: 'absolute',
      bottom: '25%',
      left: '163px',
      color: 'white',
      fontSize: '2rem',
      textAlign: 'center',
      width: '300px',
      height: '200px',
    },
  };

  const ToDownloadComponent = React.forwardRef((props, ref) => (
    <div style={refer ? { display: 'block' } : { display: 'none' }}>
      <div
        ref={componentRef}
        style={{
          position: 'relative',
          textAlign: 'center',
          height: '800px',
          width: '600px',
        }}
      >
        <img
          src={backgroundPic}
          alt="Masjid Pic"
          style={{ width: '600px', height: '800px' }}
        ></img>
        <div style={classes.imageTopContent}>
          <h1 style={{ fontSize: '30px' }}>{items.title}</h1>
          <h2 style={{ bottom: '80%', fontSize: '25px' }}>{items.sources}</h2>
        </div>
        <div style={classes.imageBotContent}>
          <h2>{items.arabic}</h2>
          <p style={{ fontSize: '25px', marginTop: '1rem' }}>{items.description}</p>
        </div>
      </div>
    </div>
  ));

  // React.useEffect(() => setref(componentRef), []);

  const Component = () => {
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
          {/* <div>
            <button className="button">Download</button>
          </div> */}
        </section>
      </div>
    );
  };

  return (
    <div>
      <Component />
      <ToDownloadComponent />
      <button
        className="button"
        onClick={async () => {
          await setref(true);
          exportComponentAsPNG(componentRef);
          setref(false);
        }}
      >
        Download
      </button>
    </div>
  );
};

export default Items;
