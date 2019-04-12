
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
  setTimeout(function(){ 
    firebase.database().ref('summary/').set({
      max
    });
  }, 500); 
}

function workOutPercents(){
  if(currentTotal && userGeneralAction){
    var ratio = userGeneralAction / currentTotal;
    var percent = Math.round(ratio * 100);
    $('.otherPlayers').html(percent+ '%' + generalType);
  }
  // if(currentTotal && userSpecificAction){
  //   var ratio = userSpecificAction / currentTotal;
  //   var percent = Math.round(ratio * 100);
  //   $('.otherPlayers').html(percent+ '%' + generalType);
  // }
}

// report write
var max;
var currentTotal;
var userSpecificAction;
var userGeneralAction;
function readSummaryAndAddToTotal(what){
  firebase.database().ref('/summary/').once('value').then(function(snapshot) {
    if(snapshot.val()){
      if(!max){
        max = snapshot.val().max;
      }  

      max.report[what] = (max.report[what] + 1) || 0;
      if(what === 'total'){
        currentTotal = max.report['total'];        
      } else if(general === what){
        userGeneralAction = max.report[what];      
      } else if(general === specific){
        userSpecificAction = max.report[what];
      }
      workOutPercents();        
      
    }
  });

  
  setTimeout(function(){ return currentTotal; }, 2000);
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




