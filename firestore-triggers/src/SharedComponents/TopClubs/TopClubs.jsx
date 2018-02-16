/**
 * Aligent
 *
 * @package     firestore-events
 * @author      Chris Dorward <chris.dorward@aligent.com.au>
 * @repo        https://bitbucket.org/aligent/aligent-pwaboiler
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import './TopClubs.scss';

function TopClubs(props) {
  return (
    <div className="top-clubs">
      <h2>TOP CLUBS</h2>
        <div className="pad-normal">
            <div>#</div>
            <div>Name</div>
            <div>ROI</div>
        </div>
    </div>
  );
}

TopClubs.propTypes = {
  topClubs: PropTypes.string
};

export default TopClubs;
