/**
 * Punt Club React
 *
 * @package    punt-club-react
 * @author     Chris Dorward <listingslab@gmail.com>
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';


import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<Dashboard />, document.getElementById('punt-club-dashboard'));
registerServiceWorker();
