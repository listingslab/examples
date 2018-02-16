/**
 * Aligent
 *
 * @package     firestore-events
 * @author      Chris Dorward <chris.dorward@aligent.com.au>
 * @repo        https://bitbucket.org/aligent/aligent-pwaboiler
 *
 */

import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAx8jX1R2fgoeysszwcsvgfOAdFVIrxiSw",
  authDomain: "puntclub-staging.firebaseapp.com",
  databaseURL: "https://puntclub-staging.firebaseio.com",
  projectId: "puntclub-staging",
  storageBucket: "puntclub-staging.appspot.com",
  messagingSenderId: "962732330152"
};
const firebaseRealTime = firebase.initializeApp(config);
export default firebaseRealTime;
