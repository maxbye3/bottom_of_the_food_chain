
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBTQI0j2zfXK8q-a4haCdEqcHqAil-YIR8",
    authDomain: "bottom-of-the-food-chain.firebaseapp.com",
    databaseURL: "https://bottom-of-the-food-chain.firebaseio.com",
    projectId: "bottom-of-the-food-chain",
    storageBucket: "bottom-of-the-food-chain.appspot.com",
    messagingSenderId: "1089933506419"
  };
  firebase.initializeApp(config);

// write works
//   function writeUserData(userId, name, email, imageUrl) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }
// writeUserData('userId', 'name', 'email', 'imageUrl');

// read works
 firebase.database().ref('/users/').once('value').then(function(snapshot) {
  var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  console.log(snapshot.val());
  console.log(snapshot.val().userId.username); // returns name
});
