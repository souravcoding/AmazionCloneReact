import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './StateProvider';
import { initialState,reducer } from './reducer';

ReactDOM.render(
   <> 
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
    </>
 ,
  document.getElementById('root')
);

reportWebVitals();
