import React, { useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import backgroundPic from './masjid_pic_filtered.jpg';
import '../arabicFont.css';

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
  items.description =
    'This is a very ong tag that needs to be automatically broken when it reaches the boundries of the countaining element is a very ong tag that needs to be automatically broken when it reaches the boundries of the countaining element is a very ong tag that needs to be automatically broken when it reaches the boundries of the countaining element is a very ong tag that needs to be automatically broken when it reaches the boundries of the countaining element is a very ong tag that needs to be automatically broken when it reaches the boundries of the cou';

  const classes = {
    imageTopContent: {
      position: 'absolute',
      bottom: '70%',
      color: 'rgb(64 97 32)',
      textAlign: 'center',
      width: '600px',
      height: '200px',
    },
    imageBotContent: {
      position: 'absolute',
      bottom: '0',
      color: 'white',
      fontSize: '2rem',
      textAlign: 'center',
      width: '600px',
      height: '500px',
    },
  };

  const ToDownloadComponent = React.forwardRef((props, ref) => {
    
    return(
    <div style={refer ? { display: 'block' } : { display: 'none' }}>
      <div
        ref={componentRef}
        id="toDownloadComponent"
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
        />
        <div style={classes.imageTopContent}>
          <h1 style={{ fontSize: '30px' }}>{items.title}</h1>
          <h2 style={{ bottom: '80%', fontSize: '25px' }}>{items.sources}</h2>
        </div>
        <div style={classes.imageBotContent}>
          <span style={{ fontFamily: 'arabicFont, serif' }}>{items.arabic}</span>
          <p style={{ fontSize: '25px', marginTop: '1rem' }}>{items.description}</p>
        </div>
      </div>
    </div>
  )});

  // React.useEffect(() => setref(componentRef), []);

  const Component = () => {
    return (
      <div>
        <section className="hero is-primary is-small pb-1 mb-1 mt-5" style={{borderRadius: 10}}>
          <div className="has-text-centered">
            <span className="is-uppercase is-family-primary has-text-dark has-text-weight-bold is-size-5 is-size-7-mobile">
              {items.title}
            </span>
          </div>
        </section>
        <section className="hero is-dark is-medium" style={{borderRadius: 10}}>
          <div className="has-text-right mr-2 mt-2" style={{ wordWrap: 'break-word' }}>
            <span
              className="has-text-primary is-size-3 mr-2 is-size-5-mobile"
              style={{ fontFamily: 'arabicFont, serif' }}
            >
              {items.arabic}
            </span>
          </div>
          <div className="has-text-left ml-2 mt-2" style={{ wordWrap: 'break-word' }}>
            <span className=" has-text-primary is-family-primary is-size-6 is-size-7-mobile">
              {items.description}
            </span>
          </div>
          <div className="has-text-centered mt-2 mb-2">
            <span className=" has-text-primary is-family-primary is-size-6 ml-2 is-size-7-mobile">
              {items.sources}
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
      <div className="has-text-right" style={{borderRadius: 10}}>
        <span>
          <button
            type="button"
            className="button is-primary mt-1"
            onClick={async () => {
              await setref(true)
              await toPng(document.getElementById('toDownloadComponent')).then((dataUrl)=>{
                let link = document.createElement('a');
                link.download = "dua.png";
                link.href = dataUrl;
                link.click();
              });
              setref(false);
            }}
          >
            Download
          </button>
        </span>
      </div>
    </div>
  );
};

export default Items;
// import { setRef } from '@material-ui/core';
// import React, { useEffect, useRef, useState } from 'react';
// import { exportComponentAsPNG } from 'react-component-export-image';
// import backgroundPic from './masjid_pic_filtered.jpg';
// import '../arabicFont.css';

// // const useStyle = makeStyles(() => ({
// //   imageTopContent: {
// //     position: 'absolute',
// //     bottom: '85%',
// //     left: '46.5%',
// //     color: 'rgb(64 97 32)',
// //     textAlign: 'center',
// //   },
// //   imageBotContent: {
// //     position: 'absolute',
// //     bottom: '35%',
// //     left: '45.5%',
// //     color: 'white',
// //     fontSize: '2rem',
// //     textAlign: 'center',
// //   },
// // }));

// const Items = ({ items }) => {
//   const componentRef = useRef();
//   const [refer, setref] = useState(false);
//   items.description = 'This is a very ong tag that needs to be automatically broken when it reaches the boundries of the countaining element is a very ong tag that needs to be automatically broken when it reaches the boundries of the countaining element is a very ong tag that needs to be automatically broken when it reaches the boundries of the countaining element is a very ong tag that needs to be automatically broken when it reaches the boundries of the countaining element is a very ong tag that needs to be automatically broken when it reaches the boundries of the cou'
//   const classes = {
//     imageTopContent: {
//       position: 'absolute',
//       bottom: '70%',
//       left: '163px',
//       color: 'rgb(64 97 32)',
//       textAlign: 'center',
//       width: '300px',
//       height: '200px',
//     },
//     imageBotContent: {
//       position: 'absolute',
//       bottom: '25%',
//       left: '163px',
//       color: 'white',
//       fontSize: '2rem',
//       textAlign: 'center',
//       width: '300px',
//       height: '200px',
//     },
//   };

//   const ToDownloadComponent = React.forwardRef((props, ref) => (
//     <div style={refer ? { display: 'block' } : { display: 'none' }}>
//       <div
//         ref={componentRef}
//         style={{
//           position: 'relative',
//           textAlign: 'center',
//           height: '800px',
//           width: '600px',
//         }}
//       >
//         <img
//           src={backgroundPic}
//           alt="Masjid Pic"
//           style={{ width: '600px', height: '800px' }}
//         />
//         <div style={classes.imageTopContent}>
//           <h1 style={{ fontSize: '30px' }}>{items.title}</h1>
//           <h2 style={{ bottom: '80%', fontSize: '25px' }}>{items.sources}</h2>
//         </div>
//         <div style={classes.imageBotContent}>
//           <h2 style={{ fontFamily: 'arabicFont, serif' }}>{items.arabic}</h2>
//           <p style={{ fontSize: '25px', marginTop: '1rem' }}>{items.description}</p>
//         </div>
//       </div>
//     </div>
//   ));

//   // React.useEffect(() => setref(componentRef), []);

//   const Component = () => {
//     return (
//       <div>
//         <section className="hero is-primary is-small pb-1 mb-1 mt-5">
//           <div className="has-text-centered">
//             <span className="is-uppercase has-text-dark has-text-weight-bold is-size-5 is-size-7-mobile">
//               {items.title}
//             </span>
//           </div>
//         </section>
//         <section className="hero is-dark is-medium">
//           <div className="has-text-right mr-2" style={{ wordWrap: 'break-word' }}>
//             <span className=" has-text-primary is-size-3 is-size-5-mobile">
//               {items.arabic}
//             </span>
//           </div>
//           <div className="has-text-left ml-2" style={{ wordWrap: 'break-word' }}>
//             <span className=" has-text-primary is-size-5 is-size-7-mobile">
//               {items.description}
//             </span>
//           </div>
//           <div className="has-text-centered">
//             <span className=" has-text-primary is-size-5 ml-2 is-size-7-mobile">
//               {items.sources}
//             </span>
//           </div>
//           {/* <div>
//             <button className="button">Download</button>
//           </div> */}
//         </section>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <Component />
//       <ToDownloadComponent />
//       <div className="has-text-right">
//         <span>
//           <button
//             type="button"
//             className="button"
//             onClick={async () => {
//               await setref(true);
//               exportComponentAsPNG(componentRef);
//               setref(false);
//             }}
//           >
//             Download
//           </button>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Items;
