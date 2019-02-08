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
  char_addition1: 'death',
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
  main_text: "You put your foot to the floor and turn into the wrong side of the road. You do your best to not look at the wreck as you pass it, but your stomach turns as you hear a bone chilling cry from the driver above the thumping, flapping and squawking of birds.",
  option_2: { text: "Continue", step: 13, conditional: 'windowUp' }, // you are attacked by bird
  option_1: { text: "Continue", step: 14, conditional: 'windowDown' }, // you are not attacked by bird
},
{
  id: 13,
  char_addition1: 'bird_injury',
  main_text: "Something large launches itself through your open window. Between the frantic beating of wings and ungodly screeching you realise it's a pigeon.  Scratching, pecking and fighting its way towards your face. You instinctively cover your eyes the shock has winded you. Recovering, you grab the pigeon by the scruff of the neck and repeatedly slam the bird's head first into the dashboard of the car. Before you wind up the window, you throw the mangled pulp of blood and feathers out. Your arms are covered in scratches, but you'll survive.",
  option_1: { text: "Continue", step: 15 }, 
},
{
  id: 14,
  main_text: "Something large smashes into the driver window. You instinctively cover your face and the shock has winded you. Feathers explode over the windscreen and the window is cracked like a spider's web. 'Thank goodness, I wound that up' you exhale in relief. You pull the steering wheel hard and the car screeches into the supermarket's car park.",
  option_1: { text: "Continue", step: 15 },
},
{
  id: 15,
  main_text: "Between you and the store sits a Dalmatian.<br> It's looking right at you, panting stupidly. The leash attached to its collar lies limp on the floor. It's some distance away, but you're fairly certain some of its spots are blood red.",
  option_1: { text: "Try and avoid the Dalmatian", step: 17 },
  option_2: { text: "Drive directly into it", step: 18 },
  option_3: { text: "Get out of the car and run", step: 16 },
},
{
  id: 16,
  char_addition1: 'death',
  main_text: "You're not quite sure why you've done this. It's as if you're controlled by some malevolent force that just wants to see you suffer. You're not quite sure which way to run. Towards the The Dalmatian now sprinting towards you or the swarm of homicidal birds you just passed. You begin running away from the dog, but it catches up quick. You feel at an agonising clamp around your arm. It drags you to the ground. The Dalmatian sinks its teeth into your neck. Your screams become spluttered. Your vision dulls, your wild movements get weaker and eventually stop.",
  option_1: { text: "Try again", step: 15 },
},
{
  id: 17,
  char_addition1: 'dog_up',
  main_text: "Before your foot hits the pedal The Dalmatian begins running at full sprint directly towards you. You swerve out of its trajectory, but it follows your turn with terrifying speed. Slamming with what must be its head into the driver door. You look back in the rear-view mirror, the dog staggers and continues chasing.",
  option_2: { text: "Continue", step: 19 },
},
{
  id: 18,
  char_addition1: 'dog_down',
  main_text: "Before your foot hits the pedal, The Dalmatian begins running full sprint directly towards you. You brace for impact. The dog does not change direction or slow down. At impact, it slams into the bonnet of your car. With a high pitched whimper, it rolls up the windscreen and over the roof. You slam on the brakes and look in the rear view mirror. Its legs are twisted and broken, but the dog is making a demonic growling noise and doing everything in its power to mount another attack.",
  option_1: { text: "Continue", step: 19 },
},
{
  id: 19,
  main_text: "The supermarket is dead ahead.",
  option_1: { text: "Drive as close as you can to the supermarket doors", step: 20 },
  option_2: { text: "Drive through the supermarket doors", step: 22 },
},
{
  id: 20,
  main_text: "With your foot planted firmly to the floor you drive towards the entrance. You can see shoppers nervously at the door. The car lifts off over a speed bump and as you land you yank the wheel to the right. You screech to a halt a few feet away from the door and the car slumps back onto four wheels and grinds to a halt. Without a second of hesitation you unbuckle, clamber over the passenger seat and out of the car. The automatic doors are forced open by a woman and what appears to be a security guard as you throw yourself inside the store.",
  option_1: { text: "Continue", step: 21 },
},
{
  main_text: "A security guard is trying to ask you something, but you're desperately trying to catch your breath and make sense of what just happened. The guard shakes you by the shoulder. Looking at him, your wild eyes convey some inaudible terrible message. The guard backs away to a panel by the entrance. A slow metal shutter begins to descend over the glass doors.",
  id: 21,
  option_1: { text: "Continue", step: 24 },
},
{
  main_text: "With your foot planted firmly to the floor you drive towards the entrance. You can see two shoppers (a woman and what looks like a security guard) apprehensively force open the automatic doors to let you in. But you've made your decision, you keep keep your foot firmly planted to the floor and your hands gripped to the wheel. The car slams back down and bounces awkwardly. The two at the door realise last second your intention and throw themselves back as you crash through the double doors and into a magazine stand.",
  id: 22,
  option_1: { text: "Continue", step: 23 },
},
{
  char_addition1: 'shop_injury',
  main_text: "Your ears are ringing. You fall out of the car. Blood is pouring from a cut above your eye and everything is falling in and out of focus. The security guard is staring at you in complete shock. Then he turns and runs over to a panel by the entrance. A slow metal shutter begins to descend over the carnage that was once a door.",
  id: 23,
  option_1: { text: "Continue", step: 24 },
},
{
  main_text: "'HELP!! WAIT!!!'<br><br> A few meters away a man in the car park is staggering hurriedly towards the closing metal shutters. A Labrador Retriever is in the distance, its golden coat covered in blood. It's sprinting after him, but you reckon there's enough distance between them for the injured man to make it into the store.",
  id: 24,
  option_1: { text: "Hold the metal shutter open", step: 29, conditional: 'dog_down' }, // you are attacked
  option_2: { text: "Hold the metal shutter open", step: 27, conditional: 'dog_up' }, // not attacked
  option_3: { text: "Close the metal shutter open", step: 25 },
},
{
  main_text: "The metal shutter hits the floor with a dull clunk. You can hear on the other-side a frantic banging and pleading. The dog catches up. Then the man screams a blood-curdling wail as the dog rips him apart. Then there is silence.",
  id: 25,
  option_1: { text: "Continue", step: 26 },
},
{
  main_text: "A heavy silence falls upon the room. <br> A dozen or so shoppers cast their anxious eyes to the floor.  <br> 'Listen up' the guard steps up cutting the tension.  <br> 'That rabid dog would have got in. There was nothing we could have done.'",
  id: 26,
  option_1: { text: "Continue", step: 36  },
},
{
  function: "localStorage.setItem('gender', 'man');",
  main_text: "The Dalmatian has somehow made it back to its feet. It limps in pursuit, but it is so deformed and twisted it doesn't make much progress. The man has made it to the metal shutter, his arms are covered in blood and the retriever is a few yards behind him.",
  id: 27,
  option_1: { text: "Continue", step: 28 },
},
{
  function: "$('.gender').text(localStorage.getItem('gender'));",
  main_text: "You help drag the injured <span class='gender'></span> under the metal shutters. It is quickly slammed shut as the dog pounces on it in an attempt to finish the job. The <span class='gender'></span> has a large cut all the way down their upper-arm and they hold it in an odd posture in a sitting position. 'Is anyone a doctor?!' you cry out.",
  id: 28,
  option_1: { text: "Continue", step: 35 },
},
{
  main_text: "With only a few yards away the Dalmatian pounces seemingly out of nowhere. It drags the man down by his arm with a vicious bite. The man is screaming helplessly, trying to avoid the snarling jaws above him.",
  id: 29,
  option_1: { text: "Help", step: 31 },
  option_2: { text: "Close the shutter", step: 30 },
},
{
  main_text: "The metal shutter hits the floor with a dull clunk. You hear manic barking and the man screams a blood-curdling cry as the dog finally rips him apart. Then there is silence.",
  id: 30,
  option_1: { text: "Continue", step: 26 },
},
{
  main_text: "Before you have a chance to react the woman shopper who held one of the doors open for you ducks under the shutter and sprints toward the attacking dog. You follow slightly more hesistantly.",
  id: 31,
  option_1: { text: "Continue", step: 32 },
},
{
  main_text: "The Retreiver jumps over the other attack and pounces on the woman. She hits the floor with a peircing scream.",
  id: 32,
  option_1: { text: "Help woman", step: 34},
  option_2: { text: "Help man", step: 33 },
},
{
  function: "localStorage.setItem('gender', 'man');",
  main_text: "With all your strength you kick the dog off the man and help him to their feet. You can see that they are in a bad way. With their arm over your shoulder you escort them quickly back to the store doing everything in your power to ignore the horrible sound of the other attack as you pass it.",
  id: 33,
  option_1: { text: "Continue", step: 28 },
},
{
  function: "localStorage.setItem('gender', 'woman');",
  main_text: "With all your strength you kick the dog off the woman and help her to their feet. You can see that they are in a bad way. With their arm over your shoulder you escort them quickly back to the store doing everything in your power to ignore the horrible sound of the other attack behind you.",
  id: 34,
  option_1: { text: "Continue", step: 28 },
},
{
  function: "$('.gender').text(localStorage.getItem('gender'));",
  main_text: "A heavy silence falls upon the room. A dozen or so shoppers cast their anxious eyes to the floor. The <span class='gender'></span> is rocking and moaning softly.<br><br> 'Listen up' the security guard steps up cutting the tension. 'There may be no doctors, but there's plenty of pharmaceuticals in here. We can work together to help them.'",
  id: 35,
  option_1: { text: "Continue", step: 36 },
},
{
  main_text: "'It may be rough' he continues 'but we've got more than enough food and supplies to last until help arri...'. The security guards speech is cut short by the sound of an explosion down the bottom of the store.",
  id: 36,
  option_1: { text: "Continue", step: 37 },
},
{
  main_text: "Another, closer and this time you catch a fluorescent light crash to the floor. Two more explosions from your left and right. 'It's the birds!' one of the shoppers cries. Immediately, the ceiling panel above explodes and a dead seagull flops to the floor. Two more seagulls fly in from the exposed hole and dive into adjacent shoppers.",
  id: 37,
  option_1: { text: "Continue", step: 38 },
},
{
  function: "$('.gender').text(localStorage.getItem('gender'));",
  main_text: "Absolute chaos ensues. You have to move.",
  id: 38,
  option_1: { text: "Aisle choices", step: 39 },
},
{
  function: "$('.gender').text(localStorage.getItem('gender'));",
  main_text: "Absolute chaos ensues. You have to move.",
  id: 39,
  option_1: { text: "", step: 39 },
},



];

tellStory(content, 37);
localStorage.setItem('gender', 'woman');