import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './defaultStyle.css';
import App from './App';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <>
  //   <div>
  //     <Router>
  //       <Switch>
  //         <Route path='/' />
  //       </Switch>
  //     </Router>
  //   </div>
  // </>,
  document.getElementById('root'),
),
  //u want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
