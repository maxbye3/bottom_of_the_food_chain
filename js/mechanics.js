var charStatus = [];


// push character additions
function addAddition(arr){
  if(charStatus && arr){
    charStatus.push(arr);
  }
}

function woundCheck(){
  var birdWound = charStatus.indexOf('bird_injury');
  var shopWound = charStatus.indexOf('shop_injury');
  var birdWound2 = charStatus.indexOf('bird_injury2');
  var medicalSupplies = charStatus.indexOf('medical_supplies');
  var woundCondition = ""; 
  var medicalCondition = ""; 
  var gotMedicine = "";
  

  
  
  // bird wound only  
  if(birdWound !== -1){
    woundCondition += 'You roll up your sleeves they are sticky with blood from scratches on your forearms.'
    medicalCondition += " You apply ointment and wrap bandages around each set of cuts."
  }  

  // bird wound 
  if(shopWound !== -1){
    woundCondition += 'You have a pounding headache. While totalling your car, you hit your head on the steering wheel pretty hard.'
    medicalCondition += " You dab at the cut above the eye with alcohol, the spirit burns like the sun but you persevere. Using your phone's camera, you also apply a plaster over the cut. ";
  }

  // bird wound 2 
  if(birdWound2 !== -1){
    woundCondition += "Looking at your phone's camera, the recent cut under your eye is still bleeding.";
    medicalCondition += " You clean the blood with cotton wool, hold it there till the bleeding has stopped and then you cover the cut with a plaster. "    
  }

  // injured - medical supply stock
  if(medicalSupplies === -1){
    gotMedicine = " You really wish you had grabbed some bandages or other medical supplies in the store earlier. You try and swallow your fear but you cannot keep the terror from creeping."
    medicalCondition = "";
  } else{
    gotMedicine = ' To keep the terror from creeping in, you rummage through the bag of medical supplies you collected earlier and layout the supplies in front of you.';
  }   


  // uninjured
  if(shopWound === -1 && birdWound === -1 && birdWound2 === -1){
    woundCondition += "You roll up your sleeves. Unbelievable, despite the chaos, there's not a scratch on you.";
    // check for medical supplies
    if(medicalSupplies !== -1){
      gotMedicine = " You still have plenty, all things considered, you're doing pretty well."
    } else{
      gotMedicine = " A relief considering you didn't grab any medical supplies or bandages from the store."
    }
  }


  $('.woundCheck').html(woundCondition + gotMedicine + medicalCondition);
}

function hasFriends(){
  getName();
  if(charStatus.indexOf('no_friend') > -1 || charStatus.indexOf('aisle_round2') > -1){
    $('.friend').hide();
  }
  else{
    $('.solo').hide();
  }
}

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
      deathTxt += "And you didn't die!<br>I actually made it pretty tricky too die but there are three different ways to to do.<br>What is hard to avoid is injuries, so let's see how you did...";
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
    injuryTxt += "To be honest, you were always going to get injured bringing bread to a dog fight.</br>";
  }
  if(injuryTxt.length === 0){
    injuryTxt = "No injuries! Amazing. I think that's actually pretty tricky to do considering you have to pick up the right equipment and then use it in the right way.";
    if(didntDie){
      injuryTxt += '<br>Congrats! No injuries and no death!<br>You are a true survivor of the animal apocalypse!';
    } else {
      injuryTxt += "<br>If it weren't for all that death, I would have called you the true survivor of the  animal apocalypse.";
    }

  }
  jQuery('.injuryResults').html("Let's see how you did for injuries! " + injuryTxt)
}

function getName(){
  $('.gender').text(localStorage.getItem('gender'));
  if(localStorage.getItem('gender') === 'man'){
    $('.name').html('John');
    $('.pronoun').html('his');
    $('.shehe').html('he');
  } else {
    $('.name').html('Mary');
    $('.pronoun').html('her');
    $('.shehe').html('she');
  }
}

function weaponType(){
  var weaponObj = {};
  if(charStatus.indexOf('hammer') > -1 ){
    weaponObj.weaponEquipped = 'the hammer';
    weaponObj.stance = 'You grip the hammer by the handle and hold it out like a bat. Your heart is pumping out of your chest.'
  }
  else if(charStatus.indexOf('wine bottle') > -1 ){
    weaponObj.weaponEquipped = 'the wine bottle';
    weaponObj.stance = 'You grip the wine bottle by the handle and hold it out like a bat. Your heart is pumping out of your chest.'
  }
  else if(charStatus.indexOf('mop') > -1 ){
    weaponObj.weaponEquipped = 'the mop';
    weaponObj.stance = 'You grip the mop by the handle and hold it out like a bat. Your heart is pumping out of your chest.'
  }
  else if(charStatus.indexOf('broken bottle') > -1){
    weaponObj.weaponEquipped = 'the sharp end of the bottle';
    weaponObj.stance = 'You fish the the short broken bottle from the bag and hold it out like a knife. Your heart is pumping out of your chest.'
  }
  else if(charStatus.indexOf('bread') > -1 ){
    weaponObj.weaponEquipped = 'the stale baguette';
    weaponObj.stance = 'You grip the bread by the stiff stale crust and hold it out like a bat. Your heart is pumping out of your chest.'
  }
  else {
    weaponObj.weaponEquipped = 'your fists';
    weaponObj.stance = 'You clench your fists and hold them out like a boxer. Your heart is pumping out of your chest.'
  }
  setTimeout(function (){
    $('.weaponEquipped').html(weaponObj.weaponEquipped );
    $('.weaponStance').html(weaponObj.stance);
}, 15);
}

function weaponConsequence(){
  // wine bottle
  // hammer
  // broken bottle
  // bread
  // mop
  // nothing
  // friend_conscious

  weaponType();
  
  // friend still alive
  setTimeout(function (){
    if(charStatus.indexOf('friend_conscious') > -1 ){
      for (var i = 1; i <= 12; i++) { 
        jQuery('.option' + i).hide();
      }
      jQuery('.option13').show();
      jQuery('.option14').show();
    }
  }, 10);
}

function checkWeapon(){
  hasFriends();
  function weaponCheck(weapon){
    var weaponType = charStatus.indexOf(weapon);
    if(weaponType > -1){  
      $('.weaponResult').html('You feel the ' + String(weapon) + ' you have already is a better weapon but you take the mop anyway.');
      return true;
    } else{
      $('.weaponResult').html('At a stretch, you think, this could be used as a weapon.');
      return false
    }
  }
  if(!weaponCheck('hammer')){
    weaponCheck('wine bottle');
  }
}

function loseWeapons(){
  function loseWeapon(weapon){
    for (var i=charStatus.length-1; i>=0; i--) {
        if (charStatus[i] === weapon) {
            charStatus.splice(i, 1);
            // break;       //<-- Uncomment  if only the first term has to be removed
        }
    }
  }
  hasFriends();
  loseWeapon('wine bottle');
  loseWeapon('hammer');
  loseWeapon('broken bottle');
  loseWeapon('mop');
  loseWeapon('bread');
  
}

function goneWrong(){
  var index = charStatus.indexOf('arm');
  
  if(localStorage.getItem('gender') === 'man'){
    var name = 'John'
  } else {
    name = 'Mary';
  }
  if (index == -1) {
    $('.goneWrong').html('By the time more gauze is applied they have lost consciousness. You feel like you could have done a better job here.'); 
    setTimeout(function (){
      $('.option1').html('Leave ' + name); 
      $('.option1').attr('onclick', 'tellStory(content, "MAX INSERT LEAVE")');
      $('.option2').show().html('Take ' + name); 
      $('.option1').attr('onclick', 'tellStory(content, 58)');
    }, 0)
  } else{
    $('.goneWrong').html("Seeing the situation worsen. You wrap the material back across the wound and apply pressure. " + name + "'s skin is as pale as the white floor laminate, you better not make any more mistakes."); 
    setTimeout(function (){
      $('.option1').html('Continue'); 
      $('.option1').attr('onclick', 'tellStory(content, 56)');
    }, 0)
  }
}


function checkGender(){
  return localStorage.getItem("gender");
}


function tellStory(arr, id){
  console.log(id);
  // store in local storage
  localStorage.setItem('saveData', id);
  // populate main story
  jQuery('.story').html(arr[id].main_text);

  // push character additions
  addAddition(arr[id]['char_addition1']);
  addAddition(arr[id]['char_addition2']);


    // add gender
    if(arr[id].gender){
      localStorage.setItem('gender', arr[id].gender);
    }

    if(arr[id].function){
      eval(arr[id].function)
    }
  
  // remove character reductions
  if(charStatus && arr[id].char_reduction){
    var index = charStatus.indexOf(arr[id].char_reduction);
    if (index > -1) {
      charStatus.splice(index, 1);
    }
  }

  // populate options
  var intI = []; 
  var intJ = [];
  
  setTimeout(function (){
    for (var m = 0; m < intI.length; m++) {
      jQuery('.option' + intI[m]).show()
    }
  });
  setTimeout(function (){
    for (var n = 0; n < intJ.length; n++) {
      jQuery('.option' + intJ[n]).hide()
    }
  });


  for (var i = 1; i <= 14; i++) { 
    if(arr[id]["option_" + i]){
      jQuery('.option' + i).show();

      // populate option text
      jQuery('.option' + i).html(arr[id]["option_" + i].text);
      
      // populate options 
      $('.gender').text(localStorage.getItem('gender'));
      getName(); 
      
      // assign option click
      jQuery('.option' + i).attr('onclick', 'tellStory(content, ' + arr[id]["option_" + i].step + ')');
      if(arr[id]["option_" + i].disclaimer){
        jQuery('.option' + i).attr('onclick', 'tellStory(disclaimer, ' + arr[id]["option_" + i].step + ')');
      }

      // show conditional is only shown if in charStatus 
      if(charStatus && arr[id]["option_" + i].show){
        jQuery('.option' + i).hide()        
        for (var j = 0; j < charStatus.length; j++) {
          if(charStatus[j] === arr[id]["option_" + i].show){             
            intI.push(i); 
          }
        }
      }

      // hide conditional is only shown if in charStatus 
      if(charStatus && arr[id]["option_" + i].hide){
        for (var j = 0; j < charStatus.length; j++) {
          if(charStatus[j] === arr[id]["option_" + i].hide){ 
            intJ.push(i); 
          }
        }       
      }
    }
    else{
      jQuery('.option' + i).hide()
    }
  }
}

