
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

// summary write
function iterateDataType(userId, what) {
  firebase.database().ref('summary/' + userId).set({
    what: int+=1,
  });
}

// report write
function readSummaryAndAddToTotal(what){
  var currentTotal;
  firebase.database().ref('/summary/').once('value').then(function(snapshot) {
    if(snapshot.val()){
      currentTotal = snapshot.val().report.total;
      iterateDataType('report', currentTotal, what);
    }
  });
  return currentTotal;
}

// user write
function feedbackWrite(userId, int) {
  firebase.database().ref('/feedback/').once('value').then(function(snapshot) {
    if(snapshot.val()){
      var currentId = snapshot.val().length; // unique Id
      firebase.database().ref('feedback/' + currentId).set({
        feedback: 'hello 2',
        email: 'world 2',
      });
    }
  });
}

feedbackWrite();


