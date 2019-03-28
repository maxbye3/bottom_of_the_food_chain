// temp
var MAX = 'temp'; 
// temp
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
  main_text: "You made a mistake learning to drive, now you're Leslie's personal errand boy. Sent to the supermarket to pick up canapés for another of her hideous dinner parties. You suck hard on the cigarette and flick it out of the passenger's window.</br> The supermarket is only a few meters ahead.",
  option_1: { text: "Continue", step : 2 },
},
{
  id: 2,
  main_text: "The radio suddenly cuts out.<br> The static noise interrupts your irritated monologue.",
  option_1: { text: "Change the station", step: 3},
  option_2: { text: "Listen to static", step: 4 },
},
{
  id: 3,
  main_text: "You switch to Jazz 104.9. Still static.</br> Odd, that's one of the main channels.</br> As you play around with the radio you don't see the car pull out into your lane in front.</br></br> You slam on the brakes and horn.</br></br> Birds erupt into the pink evening sky and quickly return to their perch on top of the street lights. <br> <br> 'That's a lot of birds'. You think. <br> <br> A small child pops out from behind the seats in the back of the car in front and starts pulling silly faces at you.",
  option_1: { text: "Honk horn", step: 5 },
  option_2: { text: "Make face", step: 6 },
  option_3: { text: "Ignore Kid", step: 7 },
},
{
  id: 4,
  main_text: "You listen to the static noise, it's weirdly relaxing. A large number of birds break out of a chaotic flying formation in the pink evening sky and come to rest on top of the street lights. You notice birds are perched on top of every light between you and the store.<br><br>'That's a lot of birds'. You think. <br><br> You also notice a car pull out in front without indicating. You slow down and swallow the urge to honk. A small child pops out from behind the seats in the back of the car in front and starts pulling silly faces at you.",
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
  main_text: "The street lights flick to life, signifying the end of the day.<br> You notice hundreds of birds perched above them and below every window. They are motionless. They all have their beady eyes trained on you as you pass under them.<br><br> Then, as if on some silent cue, an enormous number of birds drop from the lamppost directly ahead and dive into the car in front. The loud thumping sound is interrupted by a loud cracking of glass.",
  option_1: { text: "Drive past car", step: 12 },
  option_2: { text: "Roll up window", step: 10 },
  option_3: { text: "Get out and help", step: 9 },
  option_4: { text: "Reverse", step: 11 },
},
{
  id: 9,
  char_addition1: 'death',
  main_text: "You get out of the car to help but immediately, the birds descend on you. Their sharp claws dig into your skin. You run blindly doing what you can to protect yourself but all you can see is feathers and blood. Something grabs you violently by the back of the head and drags you to the floor. Sharp beaks pierce you like tiny daggers as you scream towards a long and agonizing death.",
  option_1: { text: "Try again", step: 8 },
},
{
  id: 10,
  char_addition1: 'windowUp',
  char_reduction: 'windowDown',
  main_text: "You wind up the window. The back window of the car in front erupts with blood. A loud thump on the car door steals your attention. Birds are driving themselves at full speed into your car's doors and windows.<br> A large splinter crosses the window across from you as another bird kamikazes into it.",
  option_1: { text: "Drive forward", step: 12 },
  option_2: { text: "Reverse", step: 11, hide: 'reverse' },
},
{
  id: 11,
  char_addition1: 'reverse',
  main_text: "You slam the gear stick into reverse. Your back windshield is completely smashed and behind it you can see a double-decker bus pummelled by a huge swarm of birds. Thumping and crashing as a few get into the upper-deck. The bus doors open and people run out of them, but they are immediately set upon by a huge the swarm. A sea gull grabs an old woman by the forehead and forces her back into the bus.",
  option_1: { text: "Drive forward", step: 12 },
  option_2: { text: "Get out and help", step: 9 },
  option_3: { text: "Wind up window", step: 10, hide: 'windowUp' },
},
{
  id: 12,
  main_text: "You put your foot to the floor and turn into the wrong side of the road. You do your best to not look at the wreck as you pass it, but your stomach turns as you hear a bone chilling cry from the driver above the thumping, flapping and squawking of birds.",
  option_2: { text: "Continue", step: 13, hide: 'windowUp' }, // you are attacked by bird
  option_1: { text: "Continue", step: 14, hide: 'windowDown' }, // you are not attacked by bird
},
{
  id: 13,
  char_addition1: 'bird_injury',
  main_text: "Something large launches itself through your open window. Between the frantic beating of wings and ungodly screeching you realise it's a pigeon.  Scratching, pecking and fighting its way towards you. Eventually, you manage to grab the pigeon by the scruff of the neck and repeatedly slam its head first into the dashboard of the car. Before you wind up the window, you throw the mangled pulp of blood and feathers out. Your arms are covered in scratches, but you'll survive.",
  option_1: { text: "Continue", step: 15 }, 
},
{
  id: 14,
  main_text: "Something large smashes into the driver window. Feathers explode over the windscreen and the window is cracked like a spider's web. 'Thank goodness, I wound that up' you exhale in relief. You pull the steering wheel hard and the car screeches into the supermarket's car park.",
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
  main_text: "You're not quite sure why you've done this. It's as if you're controlled by some malevolent force that just wants to see you suffer. You're not quite sure which way to run: towards the the Dalmatian now sprinting towards you or the swarm of homicidal birds you just passed. You begin running away from the dog, but it catches up quick. You feel at an agonizing clamp around your thigh. The dog drags you to the ground. The Dalmatian sinks its teeth into your neck. Your screams become spluttered. Your vision dulls, your wild movements get weaker and eventually stop.",
  option_1: { text: "Try again", step: 15 },
},
{
  id: 17,
  char_addition1: 'dog_up',
  main_text: "Before your foot hits the pedal, the Dalmatian begins running at full sprint directly towards you. You swerve out of its trajectory, but it follows your turn with terrifying speed. Slamming with what must be its head into the driver door. You look back in the rear-view mirror, the dog staggers and continues chasing.",
  option_2: { text: "Continue", step: 19 },
},
{
  id: 18,
  char_addition1: 'dog_down',
  main_text: "Before your foot hits the pedal, the Dalmatian begins running full sprint directly towards you. You brace for impact. The dog does not change direction or slow down. The dog slams into the bonnet of your car and with a high pitched whimper, it rolls up the windscreen and over the roof. You slam on the brakes and look in the rear view mirror. From the collision, the Dalmatian's legs are twisted and broken. To your horror, you see the dog do everything in its power to mount another attack while emitting a demonic growling noise.",
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
  main_text: "With your foot planted firmly to the floor, your car hurtles towards the door. You can see shoppers nervously hover behind the storefront. The car lifts off over a speed bump and as you land you yank the wheel to the right. You screech to a halt a few feet away from the store entrance and the car slumps back onto four wheels. Without a second of hesitation you unbuckle, clamber over the passenger seat and out of the car. The automatic doors are forced open by a woman and what appears to be a security guard. You dive inside the store.",
  option_1: { text: "Continue", step: 21 },
},
{
  main_text: "A security guard is trying to ask you something, but you're desperately trying to catch your breath and make sense of what just happened. The guard shakes you by the shoulder. Looking at him, your wild eyes convey some inaudible terrible message. The guard backs away and hits a button on a panel by the entrance. A slow metal shutter begins to descend over the glass doors.",
  id: 21,
  option_1: { text: "Continue", step: 24 },
},
{
  main_text: "With your foot planted firmly to the floor you drive towards the entrance. You can see two shoppers (a woman and what looks like a security guard) apprehensively force open the automatic doors to let you in. But you've made your decision, you keep keep your foot firmly planted to the floor and your hands gripped to the wheel. In the last second, the two at the door realize your intention and throw themselves back as your car crashes through the double doors and into a magazine stand.",
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
  main_text: "'HELP!! WAIT!!!'<br><br> A few meters away a man in the car park is staggering hurriedly towards the closing metal shutters. A Labrador Retriever is in the distance, its golden coat covered in specks of blood. It's sprinting after him, but you reckon there's enough distance between them for the injured man to make it into the store.",
  id: 24,
  option_1: { text: "Hold the metal shutter open", step: 29, hide: 'dog_down' }, // friend is attacked
  option_2: { text: "Hold the metal shutter open", step: 27, hide: 'dog_up' }, // friend is not attacked
  option_3: { text: "Close the metal shutter open", step: 25 },
},
{
  char_addition1: 'no_friend',
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
  main_text: "You help drag the injured <span class='gender'></span> under the metal shutters. The shutters slam shut. The dog collides with the metal grate causing another large bang, followed by desperate barking. The <span class='gender'></span> has a large cut all the way down their upper-arm and they hold it in an odd posture in a sitting position. 'Is anyone a doctor?!' you cry out.",
  id: 28,
  option_1: { text: "Continue", step: 35 },
},
{
  main_text: "With only a few yards away the Dalmatian pounces seemingly out of nowhere. With a vicious bite around the man's arm it drags him to the floor. The man is screaming helplessly, frantically fending off the snarling jaws above him.",
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
  main_text: "Before you have a chance to react the same woman who held one of the doors open for you ducks under the shutter and sprints toward the attacking dog. You follow slightly more hesitantly.",
  id: 31,
  option_1: { text: "Continue", step: 32 },
},
{
  main_text: "The Labrador pounces over the Dalmatian attack and lands on the woman. She is caught completely off guard and hits the floor with a terrible scream.",
  id: 32,
  option_1: { text: "Help woman", step: 34},
  option_2: { text: "Help man", step: 33 },
},
{
  function: "localStorage.setItem('gender', 'man');",
  main_text: "With all your strength you kick the dog off the man and help him to their feet. You can see that they are in a bad way, the Dalmatian has taken a nasty bite into their upper arm.. With their good arm over your shoulder, you escort them quickly back to the store. You do everything in your power to ignore the horrible sound of the Retriever attack as you pass it.",
  id: 33,
  option_1: { text: "Continue", step: 28 },
},
{
  function: "localStorage.setItem('gender', 'woman');",
  main_text: "With all your strength you kick the dog off the woman and help her to their feet. You can see that they are in a bad way, the Retriever has taken a nasty bite into their upper arm. With their good arm over your shoulder, you escort them quickly back to the store. You do everything in your power to ignore the horrible sound of the Dalmatian attack behind you.",
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
  char_addition1: 'aisle_round1',
  main_text: "'It may be rough' he continues 'but we've got more than enough food and supplies to last until help arri...'. The security guards speech is cut short by the sound of an explosion towards the end of the store.",
  id: 36,
  option_1: { text: "Continue", step: 37 },
},
{
  main_text: "Another explosion. Closer and this time you catch a fluorescent light crash to the floor. Two more explosions from your left and right. 'It's the birds!' one of the shoppers cries. The ceiling panel above explodes and a dead seagull flops to the floor. Two more seagulls fly in from the exposed hole and dive into adjacent shoppers.",
  id: 37,
  option_1: { text: "Continue", step: 38 },
},
{
  function: "$('.gender').text(localStorage.getItem('gender'));",
  main_text: "Chaos ensues. You have to move.",
  id: 38,
  option_1: { text: "Drag the wounded <span class='gender'></span> into the pharmacy aisle", step: 49 },
  option_2: { text: "Ditch the stranger for the pharmacy aisle", step: 45 },
  option_3: { text: "Ditch the stranger for the food aisle", step: 40 },
  option_4: { text: "Ditch the stranger for the drinks aisle", step: 39 },
},
{
  char_addition1: 'wine bottle',
  char_addition2: 'no_friend',
  main_text: "You're no doctor and you've done more than enough for the stranger. Without remorse, you hurry down the main drinks aisle as the birds continue to crash through the ceiling. Thankfully, the aisle provides more cover than the store entrance. You find a discarded plastic shopping bag and fill it with water and alcohol. You switch out vodka brand you picked up for the most premium, if the world is going to hell you might as well be picky. You spot a very large bottle of white wine. Holding it by the neck, at a stretch you think it can be used as a weapon.",
  id: 39,
  option_1: { text: "Continue", step: 41 },
},
{
  char_addition1: 'bread',
  char_addition2: 'no_friend',
  main_text: "You're no doctor and you've done more than enough for the stranger. Without remorse, you hurry down the main food aisle as the birds continue to crash through the ceiling. Thankfully, the aisle provides more cover than the store entrance. You find a discarded plastic shopping bag and fill it with dry food. In the bakery section, you find an extremely stale and long baguette. At a stretch, it could be used as a weapon. The thought doesn't fill you with confidence.",
  id: 40,
  option_1: { text: "Continue", step: 41 },
},
{
  main_text: "At the end of the aisle, a stranger is being viciously attacked by a crow. His ripped clothes expose his scratch covered arms. The crow furiously attacks with its razor-like claws and a knife-like beak. 'Please!' the man cries out 'Help me!'.",
  id: 41,
  option_1: { text: "Help the stranger", step: 43, hide: 'wine bottle'  }, // you attack with bread
  option_2: { text: "Help the stranger", step: 65, hide: 'bread'  }, // you attack with wine
  option_3: { text: "Don't help the stranger", step: 42 },
},
{
  main_text: "You stand and watch the bloody spectacle. Eventually, he grabs hold of one of the crow's feet and slams it repeatably against a shelf. 'You could have bloody helped!!' he cries out and throws the pulpy mess of black feathers and blood at your feet. He glares at you and limps his way down the aisle towards the entrance. 'It's worse down there' you chuckle to yourself.",
  id: 42,
  option_1: { text: "Continue", step: 64 },
},
{
  char_reduction: 'bread',
  main_text: "You rush over, wait for an opening and swing the baguette as hard as you can. It's a perfect hit! The baguette explodes and the crow hits the floor while squawking wildly. It quickly recovers, but the man you have saved stamps on its wing. You finish the job, viciously stamping on its fragile head and feeling it give way under your foot. You stamp again for both good measure and to try to vent the frustrations of the day.",
  id: 43,
  option_1: { text: "Continue", step: 44 },
},
{
  main_text: "'Thanks', the man slaps your shoulder. 'It just attacked me while I was shopping'. 'Any idea what's going on?' you ask. 'I have no idea! That bird came out of nowhere. All these birds.. What has this store done? Or is this government? Global warming? Brexit?!' You respond with a shrug. 'I got to get out of here and find my kids!' Before you can say anything, the man turns away and limps quickly away towards the store entrance.",
  id: 44,
  option_1: { text: "Continue", step: 64 },
},
{
  char_addition1: 'no_friend',
  main_text: "You're no doctor and you've done more than enough for the stranger. Without remorse, you hurry down the pharmaceutical aisle as birds continue to crash through the ceiling. Thankfully, the aisle provides a bit of cover. Going down the aisle, you find a discarded plastic shopping bag and fill it with medical supplies. Bottles suddenly explode out of the shelf as a pigeon dives out from an adjacent aisle. Its wing is broken so there's nothing it can do except squawk and roll around wildly.",
  id: 45,
  option_1: { text: "Kill the pigeon", step: 46 },
  option_2: { text: "Ignore it", step: 47 },
},
{
  main_text: "You viciously stamp on its fragile head and you feel it give way underfoot. Again, you stamp for both good measure and to try to vent the frustrations of the day. You wipe your foot on the store laminate floor while looking at the remains in morbid curiosity.",
  id: 46,
  option_1: { text: "Continue", step: 48 },
},
{
  main_text: "The store front is chaos. Shoppers are desperate to re-open the metal shutter to escape the merciless bird attacks but you can hear the security guard yell back at them. You sidestep carefully around the pigeon. Where the aisles break, you can see a man being attacked by a seagull but he's too far away to help.",
  id: 47,
  option_1: { text: "Choose the hardware aisle", step: 66 },
  option_2: { text: "Choose the pet shop aisle ", step: 67 },
  option_3: { text: "Choose another food aisle", step: 68 },
},
{
  main_text: "The storefront is chaos. Shoppers are desperate to re-open the metal shutter to escape the merciless bird attacks but you can hear the security guard yell back at them. Where the aisles stop, you can see a man being attacked by a crow but he's too far away to help.",
  id: 48,
  option_1: { text: "Choose the hardware aisle", step: 66 },
  option_2: { text: "Choose the pet shop aisle ", step: 67 },
  option_3: { text: "Choose another food aisle", step: 68 },
},
{
  function: "getName()",
  main_text: "As birds continue to crash through the ceiling you carefully pick your way to the stranger and hurry them down the pharmaceutical aisle. Thankfully, the aisle provides more cover than the storefront. You sit the <span class='gender'></span> carefully against the aisle shelves. They are passing in and out of consciousness. 'What's your name?' you ask while inspecting the wound. '<span class='name'></span>' <span class='shehe'></span> whispers weakly. 'Okay <span class='name'></span>... Just hang on in there, okay'.",
  id: 49,
  option_1: { text: "Continue", step: 50 },
},
{
  main_text: "Blood is everywhere. The wound looks bad, it appears to be a bite along the forearm. You hope that you can recall some first aid training from that incredibly boring work seminar. ",
  id: 50,
  option_1: { text: "Call emergency services", step: 51 },
  option_2: { text: "Find painkillers", step: 52 },
  option_3: { text: "Try to stop the bleeding", step: 53 },
},
{
  main_text: "You try to call emergency services but nobody picks up. The bleeding is getting worse. You have to do something. ",
  id: 51,
  option_1: { text: "Find painkillers", step: 52 },
  option_2: { text: "Try to stop the bleeding", step: 53 },
},
{
  function: "getName()",
  main_text: "You frantically look and find ibuprofen. You place the pills in <span class='pronoun'></span> mouth and offer a bottle of couch medicine to wash it down. However, <span class='name'></span> seems to have passed out probably from blood loss. You feel like you could have done a better job here.",
  id: 52,
  option_1: { text: "Take <span class='name'></span>", step: 63 },
  option_2: { text: "Leave <span class='name'></span>", step: 58 },
},
{
  main_text: "You look around the surrounding shelf for anything to help with the bleeding and find a long roll of gauze and some antiseptic tissues. You apply both to the wound but the blood quickly seeps through.",
  id: 53,
  option_1: { text: "Raise the arm", step: 54 },
  option_2: { text: "Keep adding cloth and gauze to the wound", step: 56 },
  option_3: { text: "Remove bloody cloth and replace with new material", step: 55 },
},
{
  char_addition1: 'arm',
  main_text: "You raise <span class='name'></span>'s arm above <span class='pronoun'></span> heart. You're fairly confident that's slowed down the bleeding somewhat.",
  id: 54,
  option_2: { text: "Keep adding cloth and gauze to the wound", step: 56 },
  option_3: { text: "Remove bloody cloth and replace with new material", step: 55 },
},
{
  function: "goneWrong()",
  main_text: "As you begin to undo the cloth the bleeding becomes worse. <span class='goneWrong'></span>",
  id: 55,
  option_1: { text: "Shouldn't see text 2" },
  option_1: { text: "Shouldn't see text 1" },
},
{
  function: "getName()",
  main_text: "You add material on top of the old. Confident this was talked about in that dull first aid lecture. After 3 minutes of external pressure on the wound, you conclude that <span class='shehe'></span> is still bleeding out heavily. You're running out of gauze. The birds are getting closer.",
  id: 56,
  option_1: { text: "Move <span class='name'></span>", step: 57 },
  option_2: { text: "Apply tourniquet", step: 59 },
},
{
  function: "getName()",
  main_text: "You move <span class='name'></span> slowly to your shoulder. Standing up carefully, they let out a short groan and before you take your first step, <span class='name'></span> falls away from you. It takes all your strength to stop <span class='pronoun'></span> from crashing back into the shelving units. Before you make another go of it, you realise <span class='name'></span> has passed out.",
  id: 57,
  option_1: { text: "Take <span class='name'></span> with you", step: 63 },
  option_2: { text: "Leave <span class='name'></span>", step: 58 },
},
{
  char_addition1: 'no_friend',
  main_text: "You feel bad leaving but surely the emergency services will be here soon. You try to re-assure <span class='name'></span> but your not sure your words are getting through. You rest your hand on <span class='pronoun'></span> good shoulder and then creep towards the end of the aisle. Finding a discarded plastic shopping bag, you fill it with painkillers and bandages. At the far side of the store, a man is being viciously attacked by a crow but like <span class='name'></span> you cannot help them without putting yourself in danger.<br> Three more aisles lie a head of you.",
  id: 58,
  option_1: { text: "Choose the hardware aisle", step: 66 },
  option_2: { text: "Choose the pet shop aisle ", step: 67 },
  option_3: { text: "Choose another food aisle", step: 68 },
},
{
  function: "getName()",
  main_text: "You remove your belt. 'Okay <span class='name'></span>, we're applying a tourniquet'. Only after you've said the words does the panic of what you're about to do creep in. 'It'll be just like the movies' you say out loud re-assuring no one.",
  id: 59,
  option_1: { text: "Apply below the wound (towards the hand)", step: 60 },
  option_2: { text: "Apply above the wound (towards the heart)", step: 61 },
},
{
  function: "getName()",
  main_text: "You wrap the belt below the wound. It does absolutely nothing, if anything it increases the bleeding. By the time you've got the belt off <span class='pronoun'></span> wrist, <span class='name'></span> seems to have passed out from the loss of blood.",
  id: 60,
  option_1: { text: "Take <span class='name'></span> with you", step: 63 },
  option_2: { text: "Leave <span class='name'></span>", step: 58 },
},
{
  function: "getName()",
  main_text: "You take off your belt and move the belt buckle on the highest notch. It's still pretty loose, so you unbox and jam a thermometer between the buckle, twisting it to make the belt tighter. The birds are getting closer, time is running out. You wrap the remaining gauze over <span class='name'></span>'s wound nice and tight.",
  id: 61,
  option_1: { text: "Continue", step: 62 },
},
{
  char_addition1: 'friend_conscious',
  char_addition2: 'medical_supplies',
  function: "getName()",
  main_text: "Finding a discarded plastic shopping bag you fill it with painkillers and bandages. Next, you move <span class='name'></span> onto your shoulder. <span class='name'></span> curses softly. Still conscious, that's good. You carry them gently towards the end of the aisle. On the far side of the store, a man is being viciously attacked by a crow but you have your hands full and he's too far to help. You have three more aisles in front of you.",
  id: 62,
  option_1: { text: "Choose the hardware aisle", step: 66 },
  option_2: { text: "Choose the pet shop aisle ", step: 67 },
  option_3: { text: "Choose another food aisle", step: 68 },
},
{
  function: "getName()",
  char_addition2: 'medical_supplies',
  main_text: "Finding a discarded plastic shopping bag you fill it with painkillers and bandages. Next, you move <span class='name'></span> onto your shoulder. <span class='name'></span> is limp and the full weight of their body falls on you. That's not good. You drag <span class='name'></span> as gently as you can by their good shoulder towards the end of the aisle. On the far side of the store, a man is being viciously attacked by a crow but you have your hands full and he's too far to help. You have three more aisles in front of you.",
  id: 63,
  option_1: { text: "Choose the hardware aisle", step: 66 },
  option_2: { text: "Choose the pet shop aisle ", step: 67 },
  option_3: { text: "Choose another food aisle", step: 68 },
},
{
  main_text: "You can hear the carnage and chaos of the storefront and feel for the man limping towards it. You decide to head the other way. The back of the store lies behind three more aisles.",
  id: 64,
  option_1: { text: "Choose the hardware aisle", step: 66 },
  option_2: { text: "Choose the pet shop aisle ", step: 67 },
  option_3: { text: "Choose another food aisle", step: 68 },
},
{
  char_addition1: 'broken bottle',
  char_reduction: 'wine bottle',
  main_text: "You rush over, wait for an opening and swing the the wine bottle as hard as you can. It's a perfect hit! The crow hits the floor squawking and before it recovers, you bring the bottle down hard. The bottle explodes into little bits of glass and the crow underneath is killed immediately.",
  id: 65,
  option_1: { text: "Continue", step: 44 },
},
{
  function: "hasFriends()",
  char_addition1: 'hammer',
  main_text: "Birds are zipping and crashing into products like stray bullets. Crouching low you swiftly cross over and enter the hardware aisle. <span class='friend'> Dragging <span class='name'></span> behind you, T</span><span class='solo'>t</span>he tall shelves provide a small relief. Scanning the range of tools, you pick out a pretty meaty looking hammer. It's got a long wooden handle which (after a few practice swings) gives it a decent amount of hitting power. A sickening realization passes over: you you might have to use this on something soon. Still, holding it in your hand feels good. It gives you a small boost in confidence.",
  id: 66,
  option_1: { text: "Continue", step: 69, hide: 'aisle_round2'  }, // first aisle round
  option_2: { text: "Continue", step: 84, hide: 'aisle_round1' }, // second aisle round
},
{
  function: "hasFriends()",
  main_text: "You're not quite sure why you've entered the pet aisle, all things considered. Thankfully, besides food and cleaning products, the only animals the store stocks are fish and mice. You <span class='friend'>hold <span class='name'></span> steady and</span> peer into a thick glass box. A mouse sprints into the glass and instead of shying away, it keeps ramming its little head over and over again. Morbid curiosity holds you transfixed, little flecks of blood rain down on its white fur. A splash of water. Two tropical fish have leapt out of their tanks and flapping madly at your feet. Mouths gaping, there beady eyes staring up at you. You take a few cans of dog food. At a real stretch, it could be dinner.",
  id: 67,
  option_1: { text: "Continue", step: 69, hide: 'aisle_round2' }, // first aisle round
  option_2: { text: "Continue", step: 84, hide: 'aisle_round1' }, // second aisle round
},
{
  function: "checkWeapon()",
  char_addition1: 'mop',
  main_text: "You head down the second food aisle<span class='friend'>, dragging <span class='name'></span> with you</span>. You stop at where the canapés are kept. 'Leslie' you sigh. A pang of guilt strikes at your heart. 'God, I hope she's okay'. The police would have arrived by now if this type of attack had only occurred at the store. You fill your plastic bag up with food you think will last. You find a discarded mop. <span class='weaponResult'></span>",
  id: 68,
  option_1: { text: "Continue", step: 69, hide: 'aisle_round2' }, // first aisle round
  option_2: { text: "Continue", step: 84, hide: 'aisle_round1' }, // second aisle round
},
{
  function: "hasFriends()",
  main_text: "<span class='solo'>You're at the back of the store</span><span class='friend'>With <span class='name'></span> over your shoulder you have made it to the back of the store</span>, you feel more exposed here then the aisles. To the right, is a glass door leading outside. To the left is a door to what you can only assume is a backroom or store room.",
  id: 69,
  option_1: { text: "Go left (store room)", step: 74 },
  option_2: { text: "Go right (glass door)", step: 70 },
},
{
  function: "hasFriends()",
  main_text: "As you approach, something large sprints and crashes through the bottom of the glass door. <span class='friend'>Out of shock you drop <span class='name'></span> off your shoulder.</span> Icicles of glass slide across the shop floor. It takes a second to recover from the shock to recognize The Dalmatian as the culprit. It now lies savagely snarling on its side, sharp needles of glass extend from its back like porcupine needles. It struggles for its lasts breaths, kicking glass gently with its paws.",
  id: 70,
  option_1: { text: "Continue", step: 71 },
},
{
  main_text: "Rats begin to climb through the hole in the door left by the Dalmatian.",
  id: 71,
  option_1: { text: "Fight the rats and proceed through the glass doors", step: 72 },
  option_2: { text: "Get to storeroom", step: 73 },
},
{
  char_addition1: 'bird_injury2',
  char_addition2: 'no_friend',
  function: "hasFriends()",
  main_text: "A bird dive-bombs and hits you square in the face. The impact is so incredible, it spins you round. You can feel blood trickle from a newly formed cut under your eye. <span class='friend'>A terrible scream brings you to your senses. Rats are all over <span class='name'></span>, climbing and biting at their existing wounds. Pure terror takes hold and you run frantically in the other direction. The backroom door is unlocked (luckily) and you slam it behind you. You can still hear <span class='name'></span>'s horrible yells.</span><span class='solo'>A rat climbs onto your foot. Crying out, you twist, throw it off and hightail it to the other side of the shop. The door to the supply room is luckily unlocked. You still have the sensation of the little rat claws on you.</span>",
  id: 72,
  option_1: { text: "Continue", step: 75 },
},
{
  function: "hasFriends()",
  main_text: "You <span class='friend'> pick <span class='name'></span> up and </span>hightail it to the backroom. The door is (fortunately) unlocked. <span class='friend'>You quickly lower <span class='name'></span> inside and with</span><span class='solo'>With</span> the rats only a few feet behind, slam the door shut.",
  id: 73,
  option_1: { text: "Continue", step: 75 },
},
{
  function: "hasFriends()",
  main_text: "You <span class='friend'> pick <span class='name'></span> and </span>hightail it to the backroom. There's a large crashing sound behind you. Something has smashed through the glass door leading outside. You have no idea what but you sure hope it doesn't catch up. The door to the storeroom is fortunately unlocked. <span class='friend'>You lower <span class='name'></span> inside and look</span><span class='solo'>You look</span> at the carnage at the other side of the store: the Dalmatian from before seems to have died throwing itself through the glass door and rats are running over its corpse towards your direction.<br><br> You quickly slam the door shut.",
  id: 74,
  option_1: { text: "Continues", step: 75 },
},
{
  function: "hasFriends()",
  main_text: "<span class='friend'>You lay <span class='name'></span> down slowly onto their uninjured side and redress the wound. They look pale, breathing softly and covered in a thin sheen of sweat. 'Don't die on me <span class='name'></span>' but <span class='pronoun'></span> provides no response.</span> You look around the backroom room: it's small, dark and empty. On the far side of the room is another door, you move over to inspect it.",
  id: 75,
  option_1: { text: "Continue", step: 76 },
},
{
  main_text: "You push on the release bar of the door and slowly push it open, a chilly gust confirms that this door also leads outside. You peer round, it's the car park again. You look up following dark black plumes of smoke that pollute the night sky accompanied by the sound of sirens and chaos. This door must be some sort of alternate store entrance for staff and deliveries. One hundred or so meters ahead is a large semi-trailer truck, the driver's door is ajar.<br><br> This could be your means of escape.",
  id: 76,
  option_1: { text: "Continue", step: 77 },
},
{
  main_text: "The question of the truck's keys is answered when you spot a dark silhouette of a body below the driver's door. Above, the golden labrador pulls meaty strings from the corpse's neck. This forces your gag reflex into overdrive and you close the door quickly.",
  id: 77,
  option_1: { text: "Continue", step: 78 },
},
{
  function: "hasFriends()",
  main_text: "Returning to the door leading to the store, you take a seat against the cold wall<span class='friend'> by <span class='name'></span></span>. You take out your phone and knowing it will fail try to call the police, then Leslie but predictably both are disconnected.",
  id: 78,
  option_1: { text: "Continue", step: 79 },
},
{
  main_text: "Fear creeps in. It is exhausting. You lay your head back on the cold stone wall, close your eyes and think of Leslie.",
  id: 79,
  option_1: { text: "Wake up", step: 81 },
},
{
  main_text: "Leslie... <br><br><br>You wish you weren't here. <br>That this was all a bad dream. A nightmare. <span class='friend'><br>'<span class='name'></span>...' you cry out.<br>No response.</span>",
  id: 80,
  option_1: { text: "Continue", step: 81 },
},
{
  function: "woundCheck()",
  main_text: "<span class='woundCheck'></span>",
  id: 81,
  option_1: { text: "Stand up", step: 82 },
},
{
  main_text: "Through a window on the door, you can see back into the store. There's still birds zipping about but it looks relatively less busy. You feel like you could make it into one of the final three aisles if you needed more supplies.<br><br>You move to the other door and open it as slowly as possible. The truck and truck driver's body is still there but the dog is gone.",
  id: 82,
  option_1: { text: "Go back into the store", step: 83 },
  option_2: { text: "Run to the truck", step: 89 },
},
{
  char_addition1: 'aisle_round2',
  char_reduction: 'aisle_round1',
  main_text: "You steal your nerves and re-enter the store. You feel a large number of eyes turn and bear down on you. Better make this quick.", // going back into store
  id: 83,
  option_1: { text: "Choose the hardware aisle", step: 66 },
  option_2: { text: "Choose the pet shop aisle ", step: 67 },
  option_3: { text: "Choose the food aisle", step: 68 },
},
{
  char_reduction: 'aisle_round2',
  function: "hasFriends()",
  main_text: "The race back to the backroom is a tense one. You close the door to the backroom behind you and look back through the door's window back into the store. All the bird's eyes are fixed on you.<span class='friend'>From the corner of the storeroom, <span class='name'></span> stirs. Clutching <span class='pronoun'></span> injured arm, <span class='shehe'></span> sits up and curses like a pirate.</span>",
  id: 84,
  option_1: { text: "Go back into the store", step: 85 },
  option_2: { text: "Run to the truck", step: 89 },
  option_3: { text: "Check on <span class='name'></span>", step: 87, hide: 'no_friend' },
},
{
  main_text: "As soon as you enter the store something hits hard you in the chest. Not sure if the surprise or the impact but you fall back into the storeroom. Now on all fours, you watch a seagull scream around the small storeroom room before it dives at you for another attack.",
  id: 85,
  option_1: { text: "Continue", step: 86 },
},
{
  function: "loseWeapons();",
  id: 86,
  main_text: "This time you manage to swat it away <span class='friend'>but it changes direction and begins attacking <span class='name'></span>. <span class='shehe'></span> cries out a long and horrible moan. You swat at the bird but </span><span class='solo'>but it doesn't take look before it mounts another attack, worse</span> you've left the door open and more birds stream into the small room. You stumble out into the car park and slam the door behind you. In the chaos, you've forgotten your bag of items. <span class='friend'>From the backroom, you hear <span class='name'></span>'s wails turn to screams.</span>",
  option_1: { text: "Continue", step: 90 },
},
{
  function: "hasFriends()",
  main_text: "You help prop <span class='name'></span> into a sitting position and sip on some water.<br>'How you feeling?' you ask.<br>'Terrible' they respond.<br>'I have to get home. There's a truck with its keys in out there. Are you coming with me?'. <span class='name'></span> closes her eyes and processes your question.",
  id: 87,
  option_1: { text: "Continue", step: 88 },
},
{
  main_text: "'Are we in the store still?'<br>'A backroom but yeah' you respond.<br>'In that case, I'm going to stay here and wait for help'<br>'Are you sure?' You are somewhat disappointed by their decision. <br><span class='name'></span> drinks more water and with eyes still closed concludes 'Yes, I'll be fine. Go.'",
  id: 88,
  option_1: { text: "Go back into the store", step: 85 },
  option_2: { text: "Run to the truck", step: 89 },
},
{
  main_text: "You take a few deeps breaths, slowly open the door leading to the car park and carefully scan your surroundings. Between you and the truck someone has dropped a box of wine, the blood red wine runs from the scattered glass. You slip out. The door clicks behind you.",
  id: 89,
  option_1: { text: "Continue", step: 90 },
},
{
  main_text: "You test the door back to the store but it only opens one way.<br><br> No going back now.",
  id: 90,
  option_1: { text: "Run", step: 91 },
},
{
  main_text: "A bark. <br><br> The terror hits you like a stone to the gut.<br> While running, you steal a glance behind hoping your ears have deceived you. But the nightmare is real, the Retriever has rounded the corner of the store and is sprinting after you. <br>The distance to the truck is further than the distance between you and the dog.",
  option_1: { text: "Race to the truck", step: 92 },
  option_2: { text: "Stand ground by broken bottles", step: 93 },
  id: 91,
},
{
  char_addition1: 'death',
  main_text: "You sprint towards the truck but you can hear over the mad gasping the dog approaching closer and closer. A red hot vice grabs your back leg and you trip over yourself. The <span class='weaponEquipped'></span> skids out of reach across the pavement. Before you have a chance to recover, the Retriever is over you and sinks its teeth into your neck. Your screams become spluttered. Your vision dulls, your wild movements get weaker and eventually stop.",
  id: 92,
  option_1: { text: "Try again", step: 91 },
},
{
  function: "weaponConsequence()",
  main_text: "You get to the bag of broken bottles and spin around. The Retriever is sprinting. A hysterical madness is in its eyes. The vicious teeth bearing closer in on your position. <span class='weaponStance'></span>",
  id: 93,
  option_1: { text: "Attack with wine bottle", step: 94, show: 'wine bottle' },
  option_2: { text: "Defend yourself with the wine bottle", step: 95, show: 'wine bottle' },
  option_3: { text: "Attack with broken bottle", step: 96, show: 'broken bottle' },
  option_4: { text: "Defend yourself with the broken bottle", step: 97, show: 'broken bottle' },
  option_5: { text: "Attack with the hammer", step: 99, show: 'hammer' },
  option_6: { text: "Defend yourself with the hammer", step: 101, show: 'hammer' },
  option_7: { text: "Attack with the mop", step: 104, show: 'mop' },
  option_8: { text: "Defend yourself with the mop", step: 105, show: 'mop' },
  option_9: { text: "Attack with the bread", step: 126, show: 'bread' },
  option_10: { text: "Defend yourself with the bread", step: 127, show: 'bread' },
  option_11: { text: "Attack barehanded", step: 108, hide: 'friend_conscious' },
  option_12: { text: "Defend barehanded", step: 109, hide: 'friend_conscious' },
  option_12: { text: "Attack with <span class='weaponEquipped'></span>", step: 116, show: 'friend_conscious' },
  option_12: { text: "Defend with <span class='weaponEquipped'></span>", step: 117, show: 'friend_conscious' },
},
{
  // wine bottle attack
  main_text: "One foot in front of the other, as if you were playing tennis. As the dog leaps, you throw the bottle across yourself like a forehand. On it's way across, the bottle smashes into a million pieces perfectly uppercutting the Retriever and sending it to the floor. You are left  holding just the neck of the bottle, everything is covered in wine and glass. Before you have time to think, the dog recovers to it's feet. With it's jaw hanging limp, it bears it's ferocious fangs and leaps again.",
  id: 94,
  option_1: { text: "Continue", step: 97  }, // broken bottle defend
},
{
  // wine bottle defend
  main_text: "You prepare yourself for impact and as the dog connects, you thrust the bottle between it's teeth. For a few precious seconds, it keeps its ferocious fangs at bay. But then the Retriever bites through the glass and without hesitation, sinks its sharp teeth into your shoulder.",
  id: 95,
  option_1: { text: "Continue", step: 98 },
},
{
  // broken bottle attack
  main_text: "You hold the broken bottle out in the direction of the incoming Retriever. You time it perfectly so that as the dog leaps, you side step the attack and slash across it's side. Unfortunately, besides the new streak of blood across it's golden coat, the Retriever is fine. It attacks with terrifying speed, grabbing you by the leg and dragging you to the floor. With your other foot, you violently kick the dog but instead of retreating it pounces on you and sinks its sharp teeth into your shoulder.",
  id: 96,
  option_1: { text: "Continue", step: 98 },
},
{
  // broken bottle defend
  main_text: "The Retriever hits you like a wrecking ball. Sometimes the best offense is a good defence. As you fall back with the dog on top, you angle the broken wine bottle up and under the its jaw. As you hit the tarmac, you hear a high and soft whimper. You look down, the broken bottle has impaled itself under the dog's jaw. The dog is flapping wildly. Blood flows out of the bottle like wine. You reach up and your hand finds a beer bottle. You hold the neck of the bottle and smash it on the hard concrete. You then shove the remains into the Retriever's soft golden fur.",
  id: 97,
  option_1: { text: "Continue", step: 114 },
},
{
  // fail state dog
  main_text: "The pain is incredible. Like being branded by hot-iron poker. You scream and the throw your arm with the broken bottle against the dog. The dog makes a horrible howling noise as the glass penetrates it's cheek. You stab again and again into the soft fur, covering yourself in it's blood. Eventually, you lodge the bottle so hard you have not enough strength to remove it. Blood trickles out of the impaled bottle like wine.",
  id: 98,
  option_1: { text: "Continue", step: 112 },
},
{
  // hammer attack
  main_text: "One foot in front of the other, as if you were playing tennis. As the dog leaps, you throw the hammer across yourself in a forehand motion. On it's way across, the hammer collides perfectly uppercutting the dog and sending it to the floor. For a second, the Retriever lies there looking serene and innocent like a Labrador sleeping after a long walk. But then it recovers and with its bottom jaw hanging limp it bears its horrible fangs as it readies for another attack.",
  id: 99,
  option_1: { text: "Strike the dog again", step: 100 },
  option_2: { text: "Don't strike the dog", step: 101 },
},
{
  // hammer attack part 2
  main_text: "The Retriever leaps up but you quickly respond by bringing the hammer down on its nose. The dog falls forward and you strike it again for good measure. Exhausted, you let the hammer slip through your fingers.",
  id: 100,
  option_1: { text: "Continue", step: 128 },
},
{
  // hammer defend
  main_text: "The impact is like the force of a wrecking ball.  As you fall, you thrust the handle of the hammer between the dog's jaws. It protects you for a few precious seconds from the snapping ferocious fangs above.",
  id: 101,
  option_1: { text: "Throw the dog off", step: 102 },
  option_2: { text: "Look for another weapon", step: 103 },
},
{
  // hammer: throw off
  main_text: "With all your strength you throw the dog off. It lands on it's back, rolls, growls and attacks again. Fortunately, you're back on your feet too and swing hammer in a forehand motion perfectly uppercutting the Retriever and sending it reeling backwards.",
  id: 102,
  option_1: { text: "Strike the dog again", step: 100 },
  option_2: { text: "Don't strike the dog", step: 101 },
},
{
  // hammer: look for anther weapon
  main_text: "Concentrating hard on the hammer handle between the Retriever's teeth you frantically search with your other hand for another weapon.<br>Nothing.</br>You glance up and see a broken glass bottle. You grab the bottle by the neck but your diverted attention has left you venerable. The Retriever noses the handle out of its attack path and sinks its enormously sharp teeth into your shoulder.",
  id: 103,
  option_1: { text: "Continue", step: 98 },
},
{
  // mop: attack
  main_text: "One foot in front of the other, you mentally prepare yourself for the attack and as the Retriever leaps, you jab the mop into it's jaw. The dog barely reacts. Instead, it grabs your trouser leg by it's teeth and jerks its head back. With only one foot planted on the floor, you are thrown off balance and fall back.",
  id: 104,
  option_1: { text: "Continue", step: 110 },
},
{
  // mop: defend part one
  main_text: "The impact is like the force of a wrecking ball. As you fall, you thrust the handle of the mop between the dog's jaws. It protects you for a few precious seconds from the snapping ferocious fangs above.",
  id: 105,
  option_1: { text: "Throw the dog off", step: 106 },
  option_2: { text: "Look for another weapon", step: 107 },
},
{
  // mop: defend throw off
  main_text: "With all your strength you throw the dog off. It lands on it's back, rolls, growls and attacks again. You're back on your feet too and swing the mop as hard as you can down on the Retriever's head. It does nothing. The Retriever sinks its enormously sharp teeth into your shoulder, dragging you down in the process.",
  id: 106,
  option_1: { text: "Continue", step: 111 },

},
{
  // mop: defend bottle search
  main_text: "Concentrating hard on the mop handle between the Retriever's teeth you frantically search with your other hand for another weapon. You grab a broken glass bottle and swing it downwards. The dog makes a horrible howling noise as the glass penetrates its soft golden fur. You stab again and again, covering yourself in it's blood. Eventually, you lodge the bottle so hard you have not enough strength to remove it. Blood trickles out of the impaled bottle like wine.",
  id: 107,
  option_1: { text: "Continue", step: 114 },
},
{
  // hands: attack
  main_text: "One foot in front of the other, you mentally prepare yourself for the attack and as the Retriever leaps, you arc your foot catching it square in the jaw. The dog doesn't go down though. Instead, it grabs your trouser leg by it's teeth and jerks its head back. With only one foot planted on the floor, this action throws you off balance and you fall back.",
  id: 108,
  option_1: { text: "Continue", step: 110 },
},
{
  // hands: defend
  main_text: "One foot in front of the other, you mentally prepare yourself for the attack and as the Retriever leaps you ball up and fold your arms over your face and chest. The impact hits you like a wrecking ball. It knocks the wind out of you and throws you backward.",
  id: 109,
  option_1: { text: "Continue", step: 110 },
},
{
  // hands: result (not good)
  main_text: "Before you have a chance to recover, the dog is on top. You desperately kick at the vicious fangs edging towards your face, doing everything in your power to ward off the attack. Your prone position has left you venerable and the dog ducks and dives, exploits an opening and sinks its enormous teeth into your shoulder.",
  id: 110,
  option_1: { text: "Continue", step: 111 },
},
{
  // hands: kill dog
  main_text: "The pain is incredible. Like a hot-iron poker held against your neck. You scream and the throw your arms around frantically. One hand passes something sharp, a broken bottle. You feel for the bottle neck and throw the sharp end into the jaw clamped around your shoulder. The dog makes a horrible howling noise as the glass penetrates its soft fur. You stab again and again, covering yourself in it's blood. Eventually, you lodge the bottle so hard you have not enough strength to remove it. Blood trickles out of the impaled bottle like wine.",
  id: 111,
  option_1: { text: "Continue", step: 112 },
},
{
  // hurt conclusion  part one
  main_text: "You lie there panting hard. Your hand wet grasping at the searing pain in your shoulder. The dead dog draped across you like a warm blanket. Eventually, you push it off and it slumps to the floor and you rise slowly. You are totally exhausted. You crawl over and pat down the truck driver's corpse. A wave of relief washes over as you pull the keys from his shirt's top pocket.",
  id: 112,
  option_1: { text: "Continue", step: 113 },
},
{
  // hurt conclusion part two
  main_text: "You limp to the truck door. The pain is incredible but with the un-bitten arm ease yourself into the drivers seat. You slam the door shut, lie back in the seat and close your eyes. 'I need to get home'. The reminder jolts you awake. You repeat the mantra out loud as you insert the key. The truck rumbles to life. Crossing your arms so your injured shoulder is relaxed you find first gear and slowly you pull out of the lot, in the direction of home.",
  id: 113,
  option_1: { text: "The End", step: 125 },
},
{
  // NOT  hurt conclusion part one
  main_text: "You lie there panting hard. The dead dog draped across you like a warm blanket, its body is heavy. Eventually, you push it off, it slumps to the floor and you rise slowly. Every action is exhausting.",
  id: 114,
  option_1: { text: "Continue", step: 128 },
},
{
  // NOT  hurt conclusion part two
  main_text: "You  ease yourself into the drivers seat and insert the key. The truck rumbles to life. You find first gear and as you navigate your way to the car park's exit, you notice the surrounding chaos. Buildings on fire, cars destroyed and corpses littering the streets. The world has gone to hell. You pull out of the lot and head in the direction of home. ",
  id: 115,
  option_1: { text: "The End", step: 125 },
},
{
  // Friend is alive: attack
  main_text: "You swing <span class='weaponEquipped'></span> as hard as you physically can but to your horror the Retriever has read your movements and ducks left, narrowly missing impact. The momentum of the swing has thrown you off balance and the dog takes advantage.",
  id: 116,
  option_1: { text: "Continue", step: 117 },
},
{
  // friend: defend
  main_text: "The dog throws itself at you, the impact feels like a wrecking ball and forces you backwards off your feet. Using the <span class='weaponEquipped'></span> you desperately try and defend yourself from the snapping jaws inching its way towards your face. Suddenly the dog is thrown off you backwards. It takes a second to recover from the shock and process what you're seeing..",
  id: 117,
  option_1: { text: "Continue", step: 118 },
},
{
  // friend: save
  function: "hasFriends()",
  main_text: "<span class='name'></span> seems to be cuddling the Retriever.<br>No. <span class='name'></span> has her arms around the dogs neck and head in a vice-like grip. Using all their strength to immobilize the beast. 'I can't hold on forever' <span class='name'></span> cries out.",
  id: 118,
  option_1: { text: "Help <span class='name'></span>", step: 119 },
  option_2: { text: "Leave <span class='name'></span>", step: 123 },
},
{
  // friend: kill dog
  main_text: "From the discarded pile you pickup a wine bottle. With a quick flick of the wrist you break the bottle below the neck on the smooth tarmac. The warm liquid runs over your hands making them sticky. You approach <span class='name'></span> and plunge the jagged glass like a dagger into the soft golden fur before them. The Retriever howls and twists violently. You pull the bottle, an arc of blood across the lot. Stabbing again, the Retriever's erratic movements become less intense. By the third stab, the dog has gone limp. <span class='name'></span> carefully releases her hold and it slumps to the floor." ,
  id: 119,
  option_1: { text: "Continue", step: 120 },
},
{
  // friend: kill dog final 1
  main_text: "For a moment, you both sit panting and staring at the corpse. 'Thank you' you say finally manage to muster. 'I owed you one' <span class='name'></span> responds between deep gulps of breath. 'Besides, I thought about your offer. I think our chances are better sticking together'. 'Clearly. Now, let's get out of here.'",
  id: 120,
  option_1: { text: "Continue", step: 121 },
},
{
  // friend: kill dog final 1
  main_text: "You pat down the truck driver's corpse. The hard body is nauseating to touch. <span class='name'></span> finds the truck keys in the driver's shirt pocket. <br><br>'Let's hope it works' <span class='pronoun'></span> mutters approaching the truck. Without a word, you walk around the truck and ease yourself into the passenger's seat. <span class='name'></span> turns the key, a wave of relief as the truck rumbles to life." ,
  id: 121,
  option_1: { text: "Continue", step: 122 },
},
{
  // friend: kill dog final 
  main_text: "'So, where are we going?' <span class='name'></span> asks pulling the truck out of the lot. For the first time you notice the surrounding chaos. Buildings on fire, cars destroyed and corpses littering the streets. The world has gone to hell. You look down at the blood on your hands and respond 'home'." ,
  id: 122,
  option_1: { text: "Continue", step: 125 },
},
{
  // friend: leave <span class='name'></span>
  main_text: "You turn away and walk towards the body of the truck driver.<br>'No please! I've come to help you!!'.</br>You pat down the truck driver's corpse. A pang of guilt, maybe you should help <span class='name'></span> before you leave. But, by the time you've fished the keys from the driver's shirt pocket, the dog has escaped <span class='name'></span>'s grip and her incessant pleas have turned to screams. For your own safety, you board the truck and shut the door." ,
  id: 123,
  option_1: { text: "Continue", step: 124 },
},
{
  // friend: leave <span class='name'></span> in truck
  main_text: "The engine rumbles to life and drowns out <span class='name'></span>'s horrible screams. A sense of betrayal feels heavy on your shoulders. Regardless, you are safe and you are going home." ,
  id: 124,
  option_1: { text: "End", step: 125 },
},
{
  // friend: leave <span class='name'></span> in truck
  main_text: "Final report" ,
  id: 125,
  option_1: { text: "End", step: MAX },
},
{
  // Bread attack
  main_text: "One foot in front of the other, as if you were playing tennis. As the dog leaps, you throw the baguette across yourself like a forehand. On it's way across, the bread smashes into a million pieces. Unfortunately, it doesn't deter the dog's attack at all. Its ferocious attack continues and the dog sinks its sharp teeth into your shoulder." ,
  id: 126,
  option_1: { text: "Continue", step: 98 },
},
{
  // Bread defend
  main_text: "You prepare yourself for impact and as the dog connects, you thrust the bread between it's teeth. For a few precious seconds, it ferociously chews at the stale baguette. But then the Retriever makes easy work of it and without hesitation, sinks its sharp teeth into your shoulder." ,
  id: 127,
  option_1: { text: "Continue", step: 98 },
},
{
  // Find body unharmed
  main_text: "You limp over to the truck driver. The stiff corpse is nauseating to the touch but the feeling is replaced with relief as you pull out keys from the shirt's top pocket.",
  id: 128,
  option_1: { text: "Continue", step: 115 },
}
];

localStorage.setItem('gender', 'woman');
charStatus = ['aisle_round1', 'broken bottle', 'bird_injury2', 'friend_conscious'];
tellStory(content, 78);