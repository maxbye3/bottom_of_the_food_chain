// var ref = firebase.database().ref();                           
// ref.on("value", function(snapshot){
//   console.log('snapshot');
//   console.log(snapshot);
//   output.innerHTML = JSON.stringify(snapshot.val(), null, 2);
// });


var database = firebase.database();
console.log('hello');
database.ref('/').once('value', function(snapshot){
  console.log(snapshot.val());
});

var rootRef = database.ref('/');
rootRef.once('value', function(snapshot){
    console.log(snapshot.val());
});


pushDataRef = database.ref("/pushData");
pushDataRef.on("child_added", function(snapshot){
  console.log("Below is the data from child_added");
  console.log(snapshot.val());
});


setDataRef = database.ref("/setData");
setDataRef.on('child_changed', function(snapshot) {
  console.log("Below is the data from child_changed");
  console.log(snapshot.val());
});