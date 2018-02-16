/**
 * Aligent BNT
 *
 * @category   Aligent
 * @package    bnt-point-of-sale
 * @copyright  Copyright (c) 2017 Aligent
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 *
 */

/*
    OroCommerce API Firebase Proxy Function

    HTTPS endpoint which can only be accessed by Firebase Users
    If the request is authorised, then it proxies to the Oro REST API
    https://crmpreprod.bnt.aligent.cloud using the URL and WSSE Authentication

    Test url: https://pos-staging.firebaseapp.com/api/countries
    You will need to authorise here https://pos-staging.firebaseapp.com/firebase-auth

*/

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const express = require('express');
const cookieParser = require('cookie-parser')();
const cors = require('cors')({origin: true});
const unirest = require('unirest');
const wsse = require('wsse');

const app = express();

const unauthorizedResponse = {
  endpoint: '',
  status: "fail",
  message: "Unauthorized Request",
  auth_url: "Authorise url: /firebase-auth"
}

const validateFirebaseIdToken = (req, res, next) => {
  unauthorizedResponse.endpoint = req.url;
  if ((!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) &&
    !req.cookies.__session) {
    res.status(200).send(unauthorizedResponse);
    return;
  }
  let idToken;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else {
    idToken = req.cookies.__session;
  }
  admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
    req.user = decodedIdToken;
    next();
  }).catch(error => {
    unauthorizedResponse.error = error;
    res.status(200).send(unauthorizedResponse);
  });
};
app.use(cors);
app.use(cookieParser);
app.use(validateFirebaseIdToken);
app.get('/*', (req, res) => {
  const apiBaseUrl = 'https://crmpreprod.bnt.aligent.cloud/app_dev.php';
  const username = 'chris.dorward';
  const password = '685496aba837f8bdb180090636799663914e453b';
  const token = wsse({ username: username, password: password });
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/vnd.api+json",
    "Authorization": "WSSE profile=\"UsernameToken\"",
    "X-WSSE": token.getWSSEHeader({
      nonceBase64: true
    })
  }
  unirest.get(apiBaseUrl + req.url)
    .headers(headers)
    .end(function (response) {
      res.status(200).send(response.body);
    });
});
exports.api = functions.https.onRequest(app);
