/**
 * Punt Club React
 *
 * @package    punt-club-react
 * @author     Chris Dorward <listingslab@gmail.com>
 */

'use strict';

const path = require('path');

module.exports = {
  process(src, filename) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};
