/* global Odometer */
/**
 * Punt Club React
 *
 * @package    punt-club-react
 * @author     Chris Dorward <listingslab@gmail.com>
 */

import React, { Component } from 'react';
import './StatusBar.scss';

class StatusBar extends Component {

  componentDidMount (){
    setTimeout (function(){
      this.odometer = new Odometer({
        el: this.refs.balance,
        value: '0'
      });
      this.odometer.update(this.props.puntClubDemo.balance);
    }.bind(this), 1);
    setTimeout (function(){
      this.odometer = new Odometer({
        el: this.refs.roi,
        value: '0'
      });
      this.odometer.update(this.props.puntClubDemo.roi);
    }.bind(this), 250);
    setTimeout (function(){
      this.odometer = new Odometer({
        el: this.refs.wagered,
        value: '0'
      });
      this.odometer.update(this.props.puntClubDemo.wagered);
    }.bind(this), 500);
    setTimeout (function(){
      this.odometer = new Odometer({
        el: this.refs.returned,
        value: '0'
      });
      this.odometer.update(this.props.puntClubDemo.returned);
    }.bind(this), 750);
  }

  render() {
    return (
      <div className="status-bar container">
        <div className="row">
          <div className="col-md-2 indicator with-border">
            <div className="title">
              balance
            </div>
            <div className="value">
              $<span ref="balance">{this.props.puntClubDemo.balance}</span>
            </div>
          </div>
          <div className="col-md-2 indicator with-border">
            <div className="title">
              roi
            </div>
            <div className="value">
              <span ref="roi">{this.props.puntClubDemo.roi}</span>%
            </div>
          </div>
          <div className="col-md-2 indicator with-border">
            <div className="title">
              wagered
            </div>
            <div className="value">
              $<span ref="wagered">{this.props.puntClubDemo.wagered}</span>
            </div>
          </div>
          <div className="col-md-2 indicator with-border">
            <div className="title">
              returned
            </div>
            <div className="value">
              $<span ref="returned">{this.props.puntClubDemo.returned}</span>
            </div>
          </div>
          <div className="col-md-2 indicator with-border">
            <div className="title">
              punting now
            </div>
            <div className="value" id="punting">
              {this.props.puntClubDemo.punting}
            </div>
          </div>
          <div className="col-md-2 indicator">
            <div className="title">
              next up
            </div>
            <div className="value" id="next">
              {this.props.puntClubDemo.next}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatusBar;

/* TO DO - Add redux */

// const mapStateToProps = (state) => {
  // return {
    // store: state
  // }
// }

// const mapDispatchToProps = (dispatch) => {
  // return {
    // dispatchCustomerLoad: (customerId) => dispatch(customerLoad(customerId)),
    // dispatchRewardsLoad: () => dispatch(rewardsLoad()),
    // dispatchRewardsShowNext: () => dispatch(rewardsShowNext()),
    // dispatchRewardsToggle: () => dispatch(appRewardsToggle()),
    // dispatchAuthLogout: () => dispatch(authLogout()),
    // dispatchCustomerReset: () => dispatch(customerReset()),
    // dispatchWishlistShowNext: () => dispatch(wishlistShowNext()),
    // dispatchWishlistLoad: () => dispatch(wishlistLoad()),
    // dispatchWishlistToggle: () => dispatch(appWishlistToggle()),
    // dispatchPreferencesToggle: () => dispatch(appPreferencesToggle()),
    // dispatchPointsToggle: () => dispatch(appPointsToggle())
  // }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(StatusBar);
