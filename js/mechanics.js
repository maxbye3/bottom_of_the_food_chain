charStatus = JSON.parse(localStorage.getItem('characterSave')) || [];

// push character additions
function addAddition(arr){
  if(charStatus && arr){
    charStatus.push(arr);
  }
}


function startAgain(){
  // MAX DO THIS
  localStorage.setItem('characterSave', '[]');
  charStatus = [];
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
      gotMedicine = " You still have plenty of medical supplies left, you're doing pretty well all things considered."
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

function weaponType(attack){
  
  function showWeaponChoice(defend, attack){
    setTimeout(function (){
      for (var i = 1; i <= 14; i++) { 
        jQuery('.option' + i).hide();
      }
      jQuery('.option' + attack).show();
      jQuery('.option' + defend).show();
    }, 5);
  }

  var weaponObj = {};
  var stanceArr1;
  var stanceArr2;
  if(charStatus.indexOf('hammer') > -1 ){
    weaponObj.weaponEquipped = 'the hammer';
    weaponObj.stance = 'You grip the hammer by the handle and hold it out like a bat. Your heart is pumping out of your chest.';
    stanceArr1 = 5;
    stanceArr2 = 6;
  }
  else if(charStatus.indexOf('wine bottle') > -1 ){
    weaponObj.weaponEquipped = 'the wine bottle';
    weaponObj.stance = 'You grip the wine bottle by the handle and hold it out like a bat. Your heart is pumping out of your chest.';
    stanceArr1 = 1;
    stanceArr2 = 2;
  }
  else if(charStatus.indexOf('mop') > -1 ){
    stanceArr1 = 7;
    stanceArr2 = 8;
    weaponObj.weaponEquipped = 'the mop';
    weaponObj.stance = 'You grip the mop by the handle and hold it out like a bat. Your heart is pumping out of your chest.';
  }
  else if(charStatus.indexOf('broken bottle') > -1){
    stanceArr1 = 3;
    stanceArr2 = 4;
    weaponObj.weaponEquipped = 'the sharp end of the bottle';
    weaponObj.stance = 'You fish the the short broken bottle from the bag and hold it out like a knife. Your heart is pumping out of your chest.';
  }
  else if(charStatus.indexOf('bread') > -1 ){
    stanceArr1 = 9;
    stanceArr2 = 10;
    weaponObj.weaponEquipped = 'the stale baguette';
    weaponObj.stance = 'You grip the bread by the stiff stale crust and hold it out like a bat. Your heart is pumping out of your chest.';
  }
  else {
    stanceArr1 = 11;
    stanceArr2 = 12;
    weaponObj.weaponEquipped = 'your barehands';
    weaponObj.stance = 'You clench your fists and hold them out like a boxer. Your heart is pumping out of your chest.';
  }
  // turn this off if not attacking being attacked
  if(attack){
    showWeaponChoice(stanceArr1, stanceArr2);
  }


  setTimeout(function (){
    $('.weaponEquipped').html(weaponObj.weaponEquipped );
    $('.weaponStance').html(weaponObj.stance);
}, 15);
}

function weaponConsequence(attack){
  // wine bottle
  // hammer
  // broken bottle
  // bread
  // mop
  // nothing
  // friend_conscious

  weaponType(attack);
  // friend still alive
  setTimeout(function (){
    console.log('no john')
    if(charStatus.indexOf('no_friend') === -1 && charStatus.indexOf('friend_conscious') > -1 ){
      for (var i = 1; i <= 12; i++) { 
        jQuery('.option' + i).hide();
      }
      jQuery('.option13').show();
      jQuery('.option14').show();
    } else { }
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

var storyId;
function tellStory(arr, id){
  console.log(id);
  storyId = id;
  $('.currentSlide').html(id);

  // store in local storage
  localStorage.setItem('saveData', id);
  // save an array
  console.log(charStatus);
  localStorage.setItem("characterSave", JSON.stringify(charStatus));

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

  // CHECK SAVE 
  var save = localStorage.getItem("characterSave");
  if(!save || save == '[]'){
    jQuery('.option2').hide();
  } // check save

}

