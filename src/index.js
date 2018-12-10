// Dependencies
import React from 'react';
import { render } from 'react-dom';

//route
//import AppRoutes from './routes';
import App from './components/App';
//assets
import './index.css';

import * as serviceWorker from './serviceWorker';


render( 
 <App/>,  
document.getElementById('root'));







// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
