var charStatus = [];


// push character additions
function addAddition(arr){
  if(charStatus && arr){
    charStatus.push(arr);
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

