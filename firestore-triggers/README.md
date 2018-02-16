```bash
	/**
	 * Aligent
	 *
	 * @package     firestore-triggers
	 * @author      Chris Dorward <chris.dorward@aligent.com.au>
	 * @repo        https://bitbucket.org/aligent/aligent-pwaboiler
	 *
	 */
```
# firestore-triggers

## Features  

* PWA Ready Client Application
* Responsive Sashboard StatusBar widget
* Sharable, reusable React & Node components
* Shared Sass library
* Bootstrap 4
* [Cloud Firestore integration](https://firebase.google.com) & Firestore
* Dev tooling: Webpack, babel, css precompiler, service workers, [Jest Unit testing](https://facebook.github.io/jest/)

## 1) Dev Setup
Install the node dependencies locally. note: Latest versions of npm automatically generate a [package-lock.json](https://docs.npmjs.com/files/package-lock.json) file

```bash
git clone git@bitbucket.org:puntclub/punt-club-react.git
cd punt-club-react
npm install
cd functions && npm install && cd ../
```

### 2) Verify install

Start the development server. If everything is working correctly, the app will be running on http://localhost:3000.
```bash
npm start
```

Run the Jest testing suite
```bash
npm test
```

Create the first optimised production build in the ./build directory.
```bash
npm run build
```

### 3) Setup Firebase

Login to the [Firebase console](https://console.firebase.google.com/u/0/) (create an account if you do not already have one). Create a new project in the console. Open `/.firebaserc` and replace `<firebase-project-id>` with your newly created Firebase Project ID.

### Firebase Authentication

Enable the [Identity Toolkit API](https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com/overview?project=269080579378).

In firebase console for your project, we will enable 2 sign in methods. We will use Google to allow Client users to quickly register their devices and Email/Password to control access to the Manager App.

Select Authentication from the left hand menu and in the Sign-in method tab, enable the email/password and Google providers.

Switch to the Users tab and set up a user account for the manager app.

### Firebase Setup

 Install the [Firebase CLI tools](https://firebase.google.com/docs/cli/) and log the CLI in.

```bash
sudo npm install -g firebase-tools
firebase login
```

### Deploying to Firebase Staging

How to Create a new deployment to Firebase. This updates both Dashboard and FirebaseConsole on Firebase Hosting.

start webpack
```bash
cd ~/path-to/punt-club-react/ && npm start
cd ~/path-to/punt-club-react/ && npm run build
```
[http://localhost:3000](local dev)

Serve build
```bash
cd ~/path-to/punt-club-react/ && npm run serve
```
[http://localhost:5000](local prod)

Deploy build to Firebase
```bash
cd ~/path-to/punt-club-react/ && npm run deploy
```
[https://puntclub-staging.firebaseapp.com](firebase staging)

### Resources

- https://bitbucket.org/puntclub/punt-club-vagrant
- https://bitbucket.org/puntclub/punt-club-sass
- https://firebase.google.com/docs/firestore/security/get-started?authuser=0
- https://slicejack.com/fullscreen-html5-video-background-css/
- http://github.hubspot.com/odometer/

```
          ____      _   _   _   _     _____     ____   _       _   _    ____
        U|  _"\ uU |"|u| | | \ |"|   |_ " _| U /"___| |"|   U |"|u| |U | __")u
        \| |_) |/ \| |\| |<|  \| |>    | |   \| | u U | | u  \| |\| | \|  _ \/
         |  __/    | |_| |U| |\  |u   /| |\   | |/__ \| |/__  | |_| |  | |_) |
         |_|      <<\___/  |_| \_|   u |_|U    \____| |_____|<<\___/   |____/
         ||>>_   (__) )(   ||   \\,-._// \\_  _// \\  //  \\(__) )(   _|| \\_
        (__)__)      (__)  (_")  (_/(__) (__)(__)(__)(_")("_)   (__) (__) (__)

```
