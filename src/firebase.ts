import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyBIoEUAm5_g6WVFunpfEC6eRaXFfPCajz4',
    appId: '1:819948432892:web:f11acfbb98da6fa38b9679',
    authDomain: 'recipe-collection-b50d5.firebaseapp.com',
    databaseURL: 'https://recipe-collection-b50d5.firebaseio.com',
    messagingSenderId: '819948432892',
    projectId: 'recipe-collection-b50d5',
    storageBucket: 'recipe-collection-b50d5.appspot.com',
  };

firebase.initializeApp(config);
export default firebase;
