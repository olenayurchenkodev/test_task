// @ts-ignore
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from "./screens/app/App";
import React from 'react';


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

