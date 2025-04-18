import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'font-awesome/css/font-awesome.min.css';
import {Provider as ReduxProvider} from "react-redux";
import { store } from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReduxProvider store={store} >
    <App />
  </ReduxProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



//import "./styles/global.css"
/**
 * 
 import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./styles/global.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'font-awesome/css/font-awesome.min.css'; 
import {Provider as ReduxProvider} from "react-redux";
import { store } from './redux/store';
import { Provider as AuthProvider } from './contexts/AuthContext'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <AuthProvider>
      <ReduxProvider store={store} >
        <App />
      </ReduxProvider>
    </AuthProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


 */