import React from 'react'
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import {Provider} from "react-redux"
import store from './Store.js'
// import {Provider as Alertprovider, positions, transitions} from "react-alert"
// import AlertTemplete from "react-alert-template-basic"

// const position ={
//   position:positions.BOTTOM_CENTER,
//   timeout:5000,
//   transitions:transitions.SCALE,
// };

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       {/* <Alertprovider template={AlertTemplete} {...position}>  */}
//         <App />
//       {/* </Alertprovider> */}
//     </Provider>
//   </React.StrictMode>,
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
