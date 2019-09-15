import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBheguLMTsKMXp1LeYHrNPWP7PevgO40sE",
  authDomain: "hackthenorth-6767c.firebaseapp.com",
  databaseURL: "https://hackthenorth-6767c.firebaseio.com",
  projectId: "hackthenorth-6767c",
  storageBucket: "hackthenorth-6767c.appspot.com",
  messagingSenderId: "254695673635",
  appId: "1:254695673635:web:3d33c2f0546cb04fcf4696"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();
}

export default Firebase;
