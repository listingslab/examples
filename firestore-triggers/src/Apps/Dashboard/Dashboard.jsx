/**
 * Punt Club React
 *
 * @package    punt-club-react
 * @author     Chris Dorward <listingslab@gmail.com>
 */

import React, { Component } from 'react';
import firebase from 'firebase';
import firestore from 'firebase/firestore'; // eslint-disable-line no-unused-vars
import StatusBar from './containers/StatusBar/StatusBar';
// import '../../scss/screen.scss';

class Dashboard extends Component {

  constructor (props) {
    super(props);

    const connection = firebase.initializeApp({
      apiKey: 'AIzaSyAx8jX1R2fgoeysszwcsvgfOAdFVIrxiSw',
      authDomain: 'puntclub-staging.firebaseapp.com',
      projectId: 'puntclub-staging'
    });
    this.state = {
      ready: false,
      connection: connection,
      db: firebase.firestore(),
      docId: null,
      puntClubDemo: null
    }
  }

  componentWillMount(){
    this.state.db.collection("punt-club-react")
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          this.setState({
            ready: true,
            docId: doc.id,
            puntClubDemo: doc.data()
          });
        });
      });
  }

  render() {
    let statusB = (<div className="status-bar">Connecting ...</div>);
    if (this.state.ready){
      statusB = (<StatusBar puntClubDemo={this.state.puntClubDemo} />);
    }
    return (
      <div  className="container">
        <div className="row punt-club-status-bar">
          <div className="col-12">
            {statusB}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

/*

import TopClubs from '../../components/TopClubs/TopClubs';
import Comments from '../../components/Comments/Comments';

  <div className="row">
    <div className="col-8">
      <Comments />
    </div>
    <div className="col-4">
      <TopClubs />
    </div>
  </div>
*/
