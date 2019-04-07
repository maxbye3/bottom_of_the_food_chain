
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
function iterateDataType(int, what) {
  var dataType = what;
  var hello = { dataType: int+=1 }
  var str = JSON.stringify(hello);
  str = str.replace(/dataType/g, what);
  var report  = JSON.parse(str);

  firebase.database().ref('summary/').set({
    report
  });
}

// report write
function readSummaryAndAddToTotal(what){
  var currentTotal;
  firebase.database().ref('/summary/').once('value').then(function(snapshot) {
    if(snapshot.val()){
      currentTotal = snapshot.val().report[what];      
      // currentTotal = snapshot.val()[what];      
      iterateDataType(currentTotal, what);
    }
  });
  return currentTotal;
}

// user write
function feedbackWrite(feedbackMsg, emailMsg, where) {
  firebase.database().ref('/feedback/').once('value').then(function(snapshot) {
    if(snapshot.val()){
      var currentId = snapshot.val().length; // unique Id
      firebase.database().ref('feedback/' + currentId).set({
        where: where,
        feedback: feedbackMsg,
        email: emailMsg || 'no email address provided',
      });
    }
  });
}




