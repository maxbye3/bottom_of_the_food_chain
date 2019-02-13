var charStatus = [];


// push character additions
function addAddition(arr){
  if(charStatus && arr){
    charStatus.push(arr);
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

function checkWeapon(){
  var hammer = charStatus.indexOf('arm');
  var smashBottle = charStatus.indexOf('smash_bottle');
  var bottle = charStatus.indexOf('bottle');
  if(hammer > -1 || smashBottle > -1 || bottle > -1){  
    $('.weaponResult').html('You feel the weapon you have already is better.');
  } else{
    $('.weaponResult').html('At a stretch, you think, this could be used as a weapon.');
  }
}

function goneWrong(){
  var index = charStatus.indexOf('arm');
  
  if(localStorage.getItem('gender') === 'man'){
    var name = 'John'
  } else {
    name = 'Mary';
  }
  if (index > -1) {
    $('.goneWrong').html('By the time more gauze is applied they have lost consciousness. You feel like you could have done a better job here.'); 
    $('.option1').html('Leave ' + name); 
    $('.option1').attr('onclick', 'tellStory(content, "MAX INSERT LEAVE")');
    $('.option2').html('Take ' + name); 
    $('.option1').attr('onclick', 'tellStory(content, 58)');
  } else{
    $('.goneWrong').html("Seeing the situation worsen. You wrap the material back across the wound and apply pressure. " + name + "'s skin is as pale as the white floor laminate, you better not make any more mistakes."); 
    $('.option2').html('Continue'); 
    $('.option1').attr('onclick', 'tellStory(content, 56)');
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

      // assign option click
      jQuery('.option' + i).attr('onclick', 'tellStory(content, ' + arr[id]["option_" + i].step + ')');
      if(arr[id]["option_" + i].disclaimer){
        jQuery('.option' + i).attr('onclick', 'tellStory(disclaimer, ' + arr[id]["option_" + i].step + ')');
      }

      if(charStatus && arr[id]["option_" + i].conditional){
        for (var j = 0; j < charStatus.length; j++) {
          if(charStatus[j] === arr[id]["option_" + i].conditional){ 
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

