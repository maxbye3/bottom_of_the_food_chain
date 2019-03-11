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
  
  // injured but you didn't grab medical supplies
  if(medicalSupplies === -1){
    gotMedicine = " You really wish you had grabbed some bandages or other medical supplies in the store earlier. You try and swallow your fear but you cannot keep the terror from creeping in."
  } else{
    gotMedicine = 'To keep the terror from creeping in, you rummage through the bag of medical supplies you collected earlier and layout the supplies in front of you.';
  }   
  
  
  // bird wound only  
  if(birdWound !== -1){
    woundCondition += 'You roll up your sleeves they are sticky with blood from scratches on your forearms.'
    medicalCondition += " You apply ointment and wrap bandages around each of your wrists to your elbows."
  }  

  // bird wound 
  if(shopWound !== -1){
    woundCondition += 'You have a pounding headache. While totalling your car, you hit your head on the steering wheel pretty hard.'
    medicalCondition += " You dab at the cut above the eye with alcohol, the spirit burns like the sun but you persevere. Using your phone's camera, you apply a plaster over the cut. ";
  }

  // bird wound 2 
  if(birdWound2 !== -1){
    woundCondition += "Looking at your phone's camera, the recent cut under your eye is still bleeding.";
    medicalCondition += " You clean the blood with cotton wool and hold it there for a short period of time and then you cover it with a plaster. "    
  }

  // uninjured
  if(shopWound === -1 && birdWound === -1 && birdWound2 === -1){
    woundCondition += "You roll up your sleeves. Unbelievable, despite the chaos not a scratch";
    // check for medical supplies
    if(medicalSupplies !== -1){
      medicalCondition += " You still have plenty, all things considered, you're doing pretty well."
    } else{
      medicalCondition += " A relief considering you didn't grab any medical supplies or bandages."
    }
  }
  $('.woundCheck').html(woundCondition + gotMedicine + medicalCondition);
}

function hasFriends(){
  getName();
  var hasFriends = charStatus.indexOf('no_friend');
  if(hasFriends > -1){
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
  } else {
    $('.name').html('Mary');
  }
}

function weaponConsequence(){
  // wine bottle
  // hammer
  // broken bottle
  // mop
  // nothing
  if(charStatus.indexOf('fists')){
    var stance = 'You clench your fists and hold them out like a boxer. Your heart is pumping out of your chest.'
  }
  if(charStatus.indexOf('broken bottle')){
    stance = 'You fish the the short broken bottle from the bag and hold it out like a knife. Your heart is pumping out of your chest.'
  }
  else{
    stance = 'You grip the ' + weapon + ' by the handle and hold it out like a bat. Your heart is pumping out of your chest.'
  }
  $('.weaponStance').html(stance);
}

function checkWeapon(){
  function weaponCheck(weapon){
    var weaponType = charStatus.indexOf(weapon);
    if(weaponType > -1){  
      $('.weaponResult').html('You feel the ' + String(weapon) + ' you have already is a better weapon.');
    } else{
      $('.weaponResult').html('At a stretch, you think, this could be used as a weapon.');
    }
  }
  weaponCheck('hammer');
  weaponCheck('wine bottle');
}

function loseWeapons(){
  hasFriends();

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
  for (var i = 1; i <= 4; i++) { 
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
      if(charStatus && arr[id]["option_" + i].hide){
        jQuery('.option' + i).hide()        
        for (var j = 0; j < charStatus.length; j++) {
          if(charStatus[j] === arr[id]["option_" + i].hide){ 
            jQuery('.option' + i).show()
          }
        }
      }

      // hide conditional is only shown if in charStatus 
      if(charStatus && arr[id]["option_" + i].hide){
        for (var j = 0; j < charStatus.length; j++) {
          if(charStatus[j] === arr[id]["option_" + i].hide){ 
            jQuery('.option' + i).hide()
          }
        }
      }
    }
    else{
      jQuery('.option' + i).hide()
    }
  }
}

