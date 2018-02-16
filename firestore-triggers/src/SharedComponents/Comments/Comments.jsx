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
import './Comments.scss';

function Comments(props) {
  return (
    <div className="comments">
      <h2>Comments</h2>
      <div className="pad-normal">
        <p>punt-club-react 0.1.2</p>
        <a
          title="Dashboard home"
          href="/?dashboard-home">
          <img
            className="logo"
            alt="Punt Club Logo"
            src="/images/png/Punt-Club-Logo.png" /></a>

        <a href={props.repoURL}
           target="_blank"
           rel="noopener noreferrer">
          <img
            className="icon_button_white-bg"
            src="/images/png/icon_bitbucket_364.png"
            alt="Bitbucket" />
        </a>

        <a href="https://firestore-console.com"
           target="_blank"
           rel="noopener noreferrer">
          <img
            className="icon_button_white-bg"
            src="/images/png/icon-firestore-console-512.png"
            alt="Bitbucket" />
        </a>
        <div className="clear" />
      </div>
    </div>
  );
}

Comments.propTypes = {
  repoURL: PropTypes.string
};

export default Comments;
