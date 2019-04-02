var didntDie = false;
function deathResults(){
  // death can be three
  var deathTxt = '';
  if(charStatus.indexOf('bird death') > -1 ){
    deathTxt += "I'm sorry you died pretty early in it. Kudos for putting your life on the line to help other people and being a tasty treat for deranged birds.</br>";
  }
  if(charStatus.indexOf('Dalmatian death') > -1 ){
    deathTxt += "Surely the death by Dalmatian could of been avoided right? You literally ran out of the safety of the car towards danger ¯\_(ツ)_/¯</br>";    
  }
  if(charStatus.indexOf('Retriever death') > -1 ){
    deathTxt += "Death by the Retriever is a tricky one to avoid. I tried to make it obvious that the truck is too far. But hey, you make good dog food.</br>";
  }
  
  if(deathTxt.length === 0) {
      deathTxt += "And you didn't die!<br>I actually made it pretty tricky to die but there are three different ways to do so.<br>What is hard to avoid is injuries, so let's see how you did...";
      didntDie = true;
  }
  jQuery('.deathResults').html('Congrats on finishing the game! '  + deathTxt)
}

function injuryResults(){
  // death can be three
  var injuryTxt = '';
  if(charStatus.indexOf('bird_injury') > -1 ){
    injuryTxt += "Always wind up your windows when deranged birds start attacking.</br>";
  }
  if(charStatus.indexOf('shop_injury') > -1 ){
    injuryTxt += "Regardless of the apocalypse, you should always park. I mean if it weren't for those shutters, you would have been in real hot water.</br>";    
  }
  if(charStatus.indexOf('bird_injury2') > -1 ){
    injuryTxt += "This was a tricky to injury to avoid. At the back of the store, you were exposed and I thought fighting rats should be punished.</br>";
  }
  if(charStatus.indexOf('bite wine') > -1 ){
    injuryTxt += "Ah, unlucky! If you had attacked with the wine bottle you would have walked away injury free.</br>";
  }
  if(charStatus.indexOf('bite wine broken') > -1 ){
    injuryTxt += "Ah, unlucky!  If you had defended with the broken wine bottle you would have walked away injury free.</br>";
  }
  if(charStatus.indexOf('bite wine broken') > -1 ){
    injuryTxt += "Ah, unlucky!  If you had defended with the broken wine bottle you would have walked away injury free.</br>";
  }
  if(charStatus.indexOf('bite wine broken') > -1 ){
    injuryTxt += "Ah, unlucky! If you had attacked with the hammer you would have walked away injury free. Always keep your eyes on the attacking dog.</br>";
  }
  if(charStatus.indexOf('bite mop') > -1 ){
    injuryTxt += "Ah, unlucky! If you had defended with the mop you would have had a better chance of walking away injury free. But honestly, who brings a mop to a fight.</br>";
  }
  if(charStatus.indexOf('bite hand') > -1 ){
    injuryTxt += "Ah, unlucky! You need a weapon to get past this part without injury. Next time!</br>";
  }
  if(charStatus.indexOf('bite bread') > -1 ){
    injuryTxt += "To be honest, you were always going to get injured bringing a loaf of bread to a dog fight.</br>";
  }
  if(injuryTxt.length === 0){
    injuryTxt = "No injuries! <br>Amazing. I think that's actually pretty tricky to do considering you have to pick up the right equipment and then use it in the right way.";
    if(didntDie){
      injuryTxt += '<br>Congrats! No injuries and no death!<br>You are a true survivor of the animal apocalypse!';
    } else {
      injuryTxt += "<br>If it weren't for all that death, I would have called you a true survivor of the  animal apocalypse.";
    }

  }
  jQuery('.injuryResults').html("Let's see how you did for injuries! " + injuryTxt)
}

function checkCompanion(){
  var checkCompanionTxt = '';
  var name = 'Mary';
  if(localStorage.getItem('gender') == 'man'){
    name = 'John';
  }
  if(charStatus.indexOf('companion left') > -1 ){
    checkCompanionTxt += "So you saved " + name + " and then let them die at the last minute. You must really like dogs.</br>";
  }
  if(charStatus.indexOf('companion remain') > -1 ){
    checkCompanionTxt += "Yes! You made it out with " + name + "! The world may have gone to hell but at least you aren't lonely. Good work! </br>";
  }
  if(charStatus.indexOf('cpr failed') > -1 ){
    checkCompanionTxt += "No.  Nice try on trying to save "+ name +" though. Maybe, brush up on your first-aid next time. " + name + " really helps in the end-game. </br>";
  }
  else if(charStatus.indexOf('no_friend') > -1 ){
    checkCompanionTxt += "No. Looks like you ditched the stranger instead of helping. Hey, we do what we need to do to survive. But it really changes the end game if you do this. </br>";
  }
  var genderStatus = 'As you probably guessed, you can save a man (John) instead of Mary.'
  if(name == 'John' && charStatus.indexOf('no_friend') == -1){
    genderStatus = 'Did you know, you can also save a woman (Mary) instead of John?'    
  }

  jQuery('.checkCompanion').html('Did you get away with a companion? ' + checkCompanionTxt + genderStatus);
}

function checkGuilt(){
  var name = 'Mary';
  var checkGuiltTxt = '';

  if(localStorage.getItem('gender') == 'man'){
    name = 'John';
  }

  if(charStatus.indexOf('companion left') > -1 ){
    checkGuiltTxt = "If, you feel bad leaving poor old " + name + " to die, then why not fill that consciousness up with kindness using The Kindness App (another app I built).";
  }
  else{
    checkGuiltTxt = "If, you feel bad killing that angry dog at the end of this game, then why not fill that consciousness up with kindness using The Kindness App (another app I built).";
  }

  jQuery('.checkGuilt').html('Thanks again for finishing the game. ' + checkGuiltTxt);
}