/**
 * Punt Club React
 *
 * @package    punt-club-react
 * @author     Chris Dorward <listingslab@gmail.com>
 */

'use strict';

if (typeof Promise === 'undefined') {
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

require('whatwg-fetch');

Object.assign = require('object-assign');
