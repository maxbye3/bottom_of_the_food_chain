
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

// save summary
function saveSummary() {
  firebase.database().ref('summary/').set({
    max
  });
}

// report write
var max;
function readSummaryAndAddToTotal(what){
  var currentTotal;
  firebase.database().ref('/summary/').once('value').then(function(snapshot) {
    if(snapshot.val()){
      // currentTotal = snapshot.val().max.report[what];      
      // currentTotal = snapshot.val()[what];
      if(!max){
        max = snapshot.val().max;
      }  
      max.report[what] = (max.report[what] + 1) || 0;
      currentTotal = max.report[what];
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




