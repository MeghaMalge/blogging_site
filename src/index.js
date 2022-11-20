import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthState from './context/AuthState';
import { Provider } from 'react-redux';
import store from './redux/store';
import ImageState from './context/ImageState';
import AppState from './context/AppState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <AuthState>
      <AppState>
      <ImageState>
      <App />
      </ImageState>
      </AppState>
    </AuthState> 
  </BrowserRouter>
  </Provider>
);
