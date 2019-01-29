var savedSlide = 2;
var X = 'hello world';

var disclaimer = [{
  main_text: "Warning: this story contains graphic content.",
  option_1: { text: "Continue", step : 1 },
}];

var content = [{
  id: 0, 
  main_text: "Bottom of the food chain",
  option_1: { text: "Start", step : 0, disclaimer: true },
  option_2: { text: "Continue", step : localStorage.getItem("saveData") },
},
{
  id: 1, 
  main_text: "You made a mistake learning to drive, now you're Leslie's personal errand boy. Sent to the supermarket to pick up canapés for another of her hideous dinner parties. You suck hard on the cigarette and flick it out of the passenger's window.</br> At least you've arrived.",
  option_1: { text: "Continue", step : 2 },
},
{
  id: 2,
  main_text: "The radio suddenly cuts out.<br> The static noise interupts your irritated monologue.",
  option_1: { text: "Change the station", step: 3},
  option_2: { text: "Listen to static", step: 4 },
},
{
  id: 3,
  main_text: "You switch to Jazz 104.9. Still static.</br> Odd, that's 1 of your main channels.</br> As you play around with the radio you don't see the car pull out into your lane in front.</br></br> You slam on the brakes and horn.</br></br> Birds erupt into the pink evening sky and quickly return to their perch on top of the street lights. <br> <br> 'That's a lot of birds'. You think. <br> <br> A small child pops out from behind the seats in the back of the car in front and pulls silly faces at you.",
  option_1: { text: "Honk horn", step: 5 },
  option_2: { text: "Make face", step: X },
  option_3: { text: "Ignore Kid", step: X },
},
{
  id: 4,
  main_text: "You listen to the static noise, it's weirdly relaxing. A large number of birds break out of a chaotic flying formation in the pink evening sky and come to rest on top of the street lights. You notice birds are perched on top of every street light betweem you and the supermarket.<br><br>'That's a lot of birds'. You think. <br><br> You also notice a car pull out suddenly in front. You slow down and swallow the urge to honk them. A small child pops out from behind the seats in the back of the car in front and pulls silly faces at you.",
  option_1: { text: "Honk horn", step:  5 },
  option_2: { text: "Make face", step:  X },
  option_3: { text: "Ignore Kid", step:  X },
},
{
  id: 5,
  main_text: "You press the long and horn hard and the kid re-cowers behind the seats. <br> You feel a mixture between embarrassment and triumph. <br> You're about a block away from the supermarket and you begin to worry your actions will cause an altercation with his parent in the car park.",
  option_1: { text: "Continue", step: 8 },
},
{
  id: 6,
  main_text: "You make a face back. The kid winces and re-cowers behind the seats.<br> You feel a mixture between embarrassment and triumph.<br> You're about a block away from the supermarket and you wonder if the kid is currently telling his father what's happened. 'Should be telling his parent how to drive' you think.",
  option_1: { text: "Continue", step: 8 },
},
{
  id: 7,
  main_text: "You watch the child make faces at you.<br> The static hiss of the radio has swept a zen like calm over you.<br> The kid doubles his efforts. You remain stoic and still.<br> The turning for the supermarket car park is a block a head.<br> You wonder if this kid is going to keep making these faces at you in the store.",
  option_1: { text: "Continue", step: 8 },
},
{
  id: 8,
  main_text: "The street lights flick to life, signifying the end of the day.<br> You notice hundreds of birds perched above them and below every window. They are motionless. They all have their beady eyes trained on you as you pass under them.<br><br> Then, as if on some silent cue, an enormous number of birds dive from the top of a lamppost and dive into the car in front. The loud thumping sound is interrupted by a loud cracking of glass.",
  option_1: { text: "Continue", step: 8 },
},
{
  id: 9,
  main_text: "The street lights flick to life, signifying the end of the day.<br> You notice hundreds of birds perched above them and below every window. They are motionless. They all have their beady eyes trained on you as you pass under them.<br><br> Then, as if on some silent cue, an enormous number of birds dive from the top of a lamppost and dive into the car in front. The loud thumping sound is interrupted by a loud cracking of glass.",
  option_1: { text: "Continue", step: 8 },
},
];

tellStory(content, 0);


function tellStory(arr, id){
  // store in local storage
  localStorage.setItem('saveData', id);
  // populate main story
  jQuery('.story').html(arr[id].main_text);

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
    }
    else{
      jQuery('.option' + i).hide()
    }
  }
}



