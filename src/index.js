// import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './index.css';
import App from './App';
import {ContextProvider} from './components/Context'
//////////////////////////// REDUX ////////////////////////////////////////
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import store from './components/Redux/Store/store';  // first store for learn redux
import store from './components/Redux/MoviesDBRedux/Store/store'; // second store for make moviesDB with redux

//////////////////////////// REACT ////////////////////////////////////////

//4- wrap all app with provider
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ContextProvider>
//       <App />
//     </ContextProvider>
//   </React.StrictMode>
// );

// reportWebVitals();

//////////////////////////// REDUX ////////////////////////////////////////

//3- wrap all app with redux provider and pass the store to it 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>      {/* for Redux */}
    <React.StrictMode>
      <ContextProvider>
        <App />
      </ContextProvider>
    </React.StrictMode>
  </Provider>
);
