var disclaimer = [{
  main_text: "Warning: this story contains graphic content.",
  option_1: { text: "Continue", step : 1 },
}];

var content = [{
  id: 0, 
  char_addition1: {},
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
  option_2: { text: "Make face", step: 6 },
  option_3: { text: "Ignore Kid", step: 7 },
},
{
  id: 4,
  main_text: "You listen to the static noise, it's weirdly relaxing. A large number of birds break out of a chaotic flying formation in the pink evening sky and come to rest on top of the street lights. You notice birds are perched on top of every street light betweem you and the supermarket.<br><br>'That's a lot of birds'. You think. <br><br> You also notice a car pull out suddenly in front. You slow down and swallow the urge to honk them. A small child pops out from behind the seats in the back of the car in front and pulls silly faces at you.",
  option_1: { text: "Honk horn", step: 5 },
  option_2: { text: "Make face", step: 6 },
  option_3: { text: "Ignore Kid", step: 7 },
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
  char_addition1: 'windowDown',
  char_reduction: 'reverse',
  main_text: "The street lights flick to life, signifying the end of the day.<br> You notice hundreds of birds perched above them and below every window. They are motionless. They all have their beady eyes trained on you as you pass under them.<br><br> Then, as if on some silent cue, an enormous number of birds drop from the next lamppost and dive into the car in front. The loud thumping sound is interrupted by a loud cracking of glass.",
  option_1: { text: "Drive past car", step: 12 },
  option_2: { text: "Roll up window", step: 10 },
  option_3: { text: "Get out and help", step: 9 },
  option_4: { text: "Reverse", step: 11 },
},
{
  id: 9,
  main_text: "You get out of the car to help but immediately, the birds descend on you. Their sharp claws dig into your skin. You run blindly doing what you can to protect yourself but all you can see is feathers and blood. Something grabs you violently by the back of the head and drags you to the floor. Sharp beaks pierce you like tiny daggers as you scream towards a long agonising death.",
  option_1: { text: "Try again", step: 8 },
},
{
  id: 10,
  char_addition1: 'windowUp',
  char_reduction: 'windowDown',
  main_text: "You wind up the window. The back window of the car in front erupts with blood. A loud thump on the car door, steals your attention. Birds are driving themselves at full speed into your car's doors and windows.<br> A large splinter crosses the window across from you as another bird kamikazes into it.",
  option_1: { text: "Drive forward", step: 12 },
  option_2: { text: "Reverse", step: 11, conditional: 'reverse' },
},
{
  id: 11,
  char_addition1: 'reverse',
  main_text: "You slam the gear stick into reverse. Your back windshield is badly smashed, but behind it you can see a double-decker bus pummelled by a huge swarm of birds. Thumping and crashing as a few get into the upper-deck. The bus doors open and people run out of them, but they are immediately set upon by a huge the swarm. A sea gull grabs an old woman by the forehead and forces her back into the bus.",
  option_1: { text: "Drive forward", step: 12 },
  option_2: { text: "Get out and help", step: 9 },
  option_3: { text: "Wind up window", step: 10, conditional: 'windowUp' },
},
{
  id: 12,
  main_text: "You put your foot to the floor and turn into the wrong side of the road. Your car bumps gently over the dead bird corpses. You do your best to not look at the wreck as you pass it, but your stomach turns as you hear a bone chilling cry from the driver above the thumping, flapping and squawking of birds.",
  option_2: { text: "Continue", step: 13, conditional: 'windowUp' }, // you are attacked by bird
  option_1: { text: "Continue", step: 14, conditional: 'windowDown' }, // you are not attacked by bird
},
{
  id: 13,
  main_text: "You are attacked by bird",
  option_1: { text: "Continue", step: 15 }, 
},
{
  id: 14,
  main_text: "You are not attacked by bird",
  option_1: { text: "Continue", step: 15 },
},
{
  id: 15,
  main_text: "Car park",
  option_1: { text: "Continue", step: 16 },
},
];

tellStory(content, 7);