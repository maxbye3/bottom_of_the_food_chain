var didntDie = false;
var total = '';
var specificType = '';
var specific = '';
var general = '';
var generalType = '';
function deathResults(){
  
  // return and add to total number of people playing the game
  total = readSummaryAndAddToTotal('total');
  // death can be three
  var deathTxt = '';
  if(charStatus.indexOf('bird death') > -1 ){
    specific = 'death: bird death';
    readSummaryAndAddToTotal('death: bird death');
    specificType = ' of players were killed by birds.'
    deathTxt += "I'm sorry you died pretty early in it. Kudos for putting your life on the line to help other people and being a tasty treat for deranged birds.</br>";
  }
  if(charStatus.indexOf('Dalmatian death') > -1 ){
    specific = 'death: Dalmatian';
    specificType = ' of players were killed by the Dalmatian.'
    readSummaryAndAddToTotal('death: Dalmatian');
    deathTxt += "Surely the death by Dalmatian could of been avoided right? You literally ran out of the safety of the car towards danger ¯\_(ツ)_/¯</br>";    
  }
  if(charStatus.indexOf('Retriever death') > -1 ){
    specific = 'death: Retriever death';
    specificType = ' of players were killed by the Retriever.'
    readSummaryAndAddToTotal('death: Retriever death');
    deathTxt += "Death by the Retriever is a tricky one to avoid. I tried to make it obvious that the truck is too far. But hey, you make good dog food.</br>";
  }
  
  if(deathTxt.length === 0) {
    readSummaryAndAddToTotal('death: Did not die');
    general = 'death: Did not die';
    deathTxt += "And you didn't die!<br>I actually made it pretty tricky to die but there are three different ways to do so.<br>What is hard to avoid is injuries, so let's see how you did...";
    didntDie = true;
    generalType = ' of players survived.';
  } else {
    generalType = ' of players died in some way.';
    general = 'death: Did die';
    readSummaryAndAddToTotal('death: Did die');
  }
  jQuery('.deathResults').html('Congrats on finishing the game! '  + deathTxt + '</br></br><span class="otherPlayers"></span>')
}

function injuryResults(){
  // death can be three
  var injuryTxt = '';
  var injurySave;  
  if(charStatus.indexOf('bird_injury') > -1 ){
    specificType = ' of players did not wind up their windows.';
    injuryTxt += "Always wind up your windows when deranged birds start attacking.</br>";
    specific = 'injury: Wind up window';
    injurySave = readSummaryAndAddToTotal('injury: Wind up window');
  }
  if(charStatus.indexOf('shop_injury') > -1 ){
    specificType = ' of players did not park properly.';
    injuryTxt += "Regardless of the apocalypse, you should always park. I mean if it weren't for those shutters, you would have been in real hot water.</br>";    
    injurySave = readSummaryAndAddToTotal('injury: Drove through windows');
    specific = 'injury: Drove through windows';
  }
  if(charStatus.indexOf('bird_injury2') > -1 ){
    specificType = ' of players were injured at the back of the store.';
    injuryTxt += "This was a tricky to injury to avoid. At the back of the store, you were exposed and I thought fighting rats should be punished.</br>";
    injurySave = readSummaryAndAddToTotal('injury: Fought rats');
    specific = 'injury: Fought rats';
  }
  if(charStatus.indexOf('bite wine') > -1 ){
    specificType = ' of players were injured using the wine bottle.';
    injuryTxt += "Ah, unlucky! If you had attacked with the wine bottle you would have walked away injury free.</br>";
    injurySave = readSummaryAndAddToTotal('injury: Dog fight: Defended with wine bottle');
    specific = 'injury: Dog fight: Defended with wine bottle';
  }
  if(charStatus.indexOf('bite wine broken') > -1 ){
    specificType = ' of players were injured using the broken bottle.';
    injuryTxt += "Ah, unlucky!  If you had defended with the broken wine bottle you would have walked away injury free.</br>";
    injurySave = readSummaryAndAddToTotal('injury: Dog fight: Attacked with broken bottle');
    specific = 'injury: Dog fight: Attacked with broken bottle';
  }
  if(charStatus.indexOf('bite wine broken') > -1 ){
    specificType = ' of players were injured using the hammer.';
    injuryTxt += "Ah, unlucky! If you had attacked with the hammer you would have walked away injury free. Always keep your eyes on the attacking dog.</br>";
    injurySave = readSummaryAndAddToTotal('injury: Dog fight: Defended with the hammer');
    specific = 'injury: Dog fight: Defended with the hammer';
  }
  if(charStatus.indexOf('bite mop') > -1 ){
    specificType = ' of players were injured using the mop.';
    injuryTxt += "Ah, unlucky! If you had defended with the mop you would have had a better chance of walking away injury free. But honestly, who brings a mop to a fight.</br>";
    injurySave = readSummaryAndAddToTotal('injury: Dog fight: Attacked with a mop');
    specific = 'injury: Dog fight: Attacked with a mop';
  }
  if(charStatus.indexOf('bite hand') > -1 ){
    specificType = ' of players came unarmed to the dog fight.';
    injuryTxt += "Ah, unlucky! You need a weapon to get past this part without injury. Next time!</br>";
    injurySave = readSummaryAndAddToTotal('injury: Dog fight: unarmed');
    specific = 'injury: Dog fight: unarmed';
  }
  if(charStatus.indexOf('bite bread') > -1 ){
    specificType = ' of players brought bread to a dog fight.';
    injuryTxt += "To be honest, you were always going to get injured bringing a loaf of bread to a dog fight.</br>";
    injurySave = readSummaryAndAddToTotal('injury: Dog fight: Bread');
    specific = 'injury: Dog fight: Bread';
  }

  if(injuryTxt.length === 0){
    injuryTxt = "No injuries! <br>Amazing. I think that's actually pretty tricky to do considering you have to pick up the right equipment and then use it in the right way.";
    if(didntDie){
      general = 'injury: Uninjured and did not die';
      generalType = ' of players came away with no injuries and no death.';
      injuryTxt += '<br>Congrats! No injuries and no death!<br>You are a true survivor of the animal apocalypse!';
      injurySave = readSummaryAndAddToTotal('injury: Uninjured and did not die');
    } else {
      general = 'injury: Not injured but died';
      generalType = ' of players came away with no injuries but died.';
      injuryTxt += "<br>If it weren't for all that death, I would have called you a true survivor of the  animal apocalypse.";
      injurySave = readSummaryAndAddToTotal('injury: Not injured but died');
    }
  } else {
    generalType = ' of players came finished the game injured.';
    general = 'injury: Injured';
    injurySave = readSummaryAndAddToTotal('injury: Injured');
  }
  console.log(total);
  console.log(injurySave);
  jQuery('.injuryResults').html("Let's see how you did for injuries! " + injuryTxt + '</br></br><span class="otherPlayers"></span>');
}

function checkCompanion(){
  var companion;
  var checkCompanionTxt = '';
  var companionSave;
  var name = 'Mary';
  if(localStorage.getItem('gender') == 'man'){
    name = 'John';
  }
  if(charStatus.indexOf('companion left') > -1 ){
    specific = 'friend: Rescued man but then chose dog to survive';
    specificType = ' of other players chose dog over man.'
    companionSave = readSummaryAndAddToTotal('friend: Rescued man but then chose dog to survive');
    checkCompanionTxt += "So you saved " + name + " and then let them die at the last minute. You must really like dogs.</br>";
  }
  if(charStatus.indexOf('companion remain') > -1 ){
    specificType = ' of other players made it out with a friend.'
    companionSave = readSummaryAndAddToTotal('friend: Rescued man but then chose dog to survive');
    specific = 'friend: Rescued man but then chose dog to survive';
    checkCompanionTxt += "Yes! You made it out with " + name + "! The world may have gone to hell but at least you aren't lonely. Good work! </br>";
  }
  if(charStatus.indexOf('cpr failed') > -1 ){
    specificType = ' of other players failed CPR.'
    companionSave = readSummaryAndAddToTotal('friend: Failed at life-saving');
    specific = 'friend: Failed at life-saving';
    checkCompanionTxt += "No.  Nice try on trying to save "+ name +" though. Maybe, brush up on your first-aid next time. " + name + " really helps in the end-game. </br>";
  }
  else if(charStatus.indexOf('no_friend') > -1 ){
    companionSave = readSummaryAndAddToTotal('friend: Never helped stranger');
    specific = 'friend: Never helped stranger';
    specificType = ' of other never bothered to help the stranger.'
    checkCompanionTxt += "No. Looks like you ditched the stranger instead of helping. Hey, we do what we need to do to survive. But it really changes the end game if you do this. </br>";
  }
  var genderStatus = 'You can save either a man (John) or a woman (Mary).'
  if(name == 'John' && charStatus.indexOf('no_friend') === -1){
    companionSave = readSummaryAndAddToTotal('friend: Saved John');
    genderStatus = 'Did you know, you can also save a woman (Mary) instead of John?'    
    generalType = ' of players finished the game saving John.';
    general = 'friend: Saved John';
  } else {
    companionSave = readSummaryAndAddToTotal('friend: Saved Mary');
    generalType = ' of players finished the game saving Mary.';
    general = 'friend: Saved Mary'
  }

  jQuery('.checkCompanion').html('Did you get away with a companion? ' + checkCompanionTxt + genderStatus + '</br></br><span class="otherPlayers"></span>');
}

function checkGuilt(){
  var name = 'Mary';
  var checkGuiltTxt = '';

  if(localStorage.getItem('gender') == 'man'){
    name = 'John';
  }

  if(charStatus.indexOf('companion left') > -1 ){
    checkGuiltTxt = "If, you feel bad leaving poor old " + name + " to die, then why not reset that karma with kindness using The Kindness App (another app I built).";
  }
  else{
    checkGuiltTxt = "If, you feel bad killing that angry dog at the end of this game, then why not reset that karma with kindness using The Kindness App (another app I built).";
  }
  jQuery('.checkGuilt').html('Thanks again for finishing the game. ' + checkGuiltTxt);
  saveSummary();
}