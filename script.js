const Pokemon1 ={
    name: "Charmander",
    type: "Fire",
    moves: ['Scratch','Bite','Ember','Metal Claw'],
 };
 const Pokemon2 ={
     name: "Squirtle",
     type: "Water",
     moves: ['Tackle','Bite','Bubble','Rapid Spin'],
  };
  const Pokemon3 ={
     name: "Bulbasaur",
     type: "Grass",
     moves: ['Tackle','Headbutt','Vine Whip','Sludge'],
  };
  const Player ={
    name: null,
    playGame: null,
    pokeChoice: null,
    hasDied: 0,
    playAgain : true
  };
  const Rival ={
    name: "Barry",
    starterPoke : ["Charmander","Squirtle","Bulbasaur"]
  };
  const trainerPokes ={
    trainerNames : ['Jerry','Micheal','Joey','Danny','Maja','Daisy','Penelope','Dexter'],
    pokeNames : ['Rattata','Caterpie','Pidgey','Mankey','Weedle','Butterfree','Pikachu'],
  };    
  
  pickedMove = (playerPoke) =>{
    let hasPicked = false
    let attackChoice
    while(!hasPicked){
         attackChoice = prompt(`What move do you want to use 1.${playerPoke.moves[0]}
    2.${playerPoke.moves[1]} 3.${playerPoke.moves[2]} 4.${playerPoke.moves[3]}(Enter 1,2,3, or 4)`);
    attackChoice = parseInt(attackChoice);
        if(attackChoice > 0 && attackChoice < 5)
            hasPicked = true;
         else
            alert('Please enter one of the numbers shown');
    }
    return attackChoice - 1;
  }
  const playGame = () =>{
    if(Player.playGame){
        alert("Alright lets go!");
    }else{
        alert("We hope to see you soon!");
    }
  }
  const rivalPokemon = (playerPoke) =>{
    if(playerPoke.name === Pokemon1.name)
        return 1;
    else if(playerPoke.name === Pokemon2.name)
        return 2
    else 
        return 0;
  }
  const pickStarter = () => {
    alert(`Hi there trainer ${Player.name} today were going to start your Pokemon journey`);
    let hasPicked= 0;
    while(hasPicked === 0){
        let userPick = prompt(`Lets pick your starter! 1.${Pokemon1.name} 2.${Pokemon2.name} 3.${Pokemon3.name}(Enter 1,2, or 3)`)
        if(parseInt(userPick)=== 1){
            Player.pokeChoice = 1;
            hasPicked = 1;
        }else if(parseInt(userPick)==2){
            Player.pokeChoice = 2;
            hasPicked = 1;
        }else if(parseInt(userPick) === 3){
            Player.pokeChoice = 3;
            hasPicked = 1;
        }else{
            alert('Please enter one of the numbers shown');
        }
    }
  }
  const battleRandom = (playerPoke,wildPoke) =>{
    
    let trainerName = Math.random()*trainerPokes.trainerNames.length;
    let pokeName = Math.random()*trainerPokes.pokeNames.length;
     trainerName = Math.floor(trainerName);
     pokeName = Math.floor(pokeName);
    if(wildPoke){
    alert(`Trainer ${trainerPokes.trainerNames[trainerName]} has challenged you to a battle. It sent out ${trainerPokes.pokeNames[pokeName]}`);

     alert(`${Player.name} sent out ${playerPoke.name}`)
    let attackChoice = pickedMove(playerPoke);
    if(playerPoke.name === Pokemon1.name){
        alert(`Oh no you missed and your ${playerPoke.name} got suplexed by the enemy ${trainerPokes.pokeNames[pokeName]}.Your adventure is over`)
        Player.hasDied = 1;
        return;
    }else{
        alert(`${playerPoke.moves[attackChoice]} hit and you KO'd the enemy pokemon goodjob! Now move onto Viridian Forest`);
    }
   }
   else{
    let fightMon = confirm(`A wild ${trainerPokes.pokeNames[pokeName]} has appeared would. Fight or run away!!`);
        if(fightMon){
            alert(`Alright! You sent out your ${playerPoke.name}`);
            let attackChoice = pickedMove(playerPoke);
        if(playerPoke.moves[attackChoice] === playerPoke.moves[3]){
            alert(`Oh no ${playerPoke.name} missed his attack and KO'd by the wild pokemon. Game Over`)
            Player.hasDied = 1;
        }else{
            alert(`Amazing you KO'd the wild pokemon. Procced through Virdian forest`);
        }

        }
   }
}
  const viridianForest = (playerPoke) =>{
   let wildPokemon = confirm("Welcome to Viridian Forest trainer. Would you like to step into the tall grass or take the long way around. *cough* coward ")
    if(wildPokemon){
        battleRandom(playerPoke,0)
    }else if(wildPokemon === false && playerPoke.name === Pokemon3.name){
        alert('Since you went the long way your Pokemon got scared of all the bug Pokemon and ran away forever. Game over')
        Player.hasDied = 1;
        return;
    }else{
        alert(`You succsifuly went the long way around and have now arrived in Peweter City!!!`)
    }
  }
  const rivalBattle = (playerPoke) =>{
    let rivalMon = rivalPokemon(playerPoke);
    let fightRival = confirm('You made it to Pewter city home of the Rock type gym. However you see your rival by the Pokemon Center. Do you ask to battle?')
    if(fightRival){
        alert(`Alright you battle your rival ${Rival.name}`)
        alert(`${Rival.name} sent out ${Rival.starterPoke[rivalMon]}`)
        alert(`You sent out ${playerPoke.name}`)
        let moveChoice = pickedMove(playerPoke);
        if(playerPoke.name === Pokemon1.name && playerPoke.moves[moveChoice]=== Pokemon1.moves[1]){
            alert(`Oh no your move missed and Barry and his poke tag team'd you and took your lunch money. Game Over`)
            Player.hasDied = 1;
        }else if(playerPoke.name === Pokemon2.name && playerPoke.moves[moveChoice]=== Pokemon2.moves[0]){
            alert(`Oh no your move missed and Barry and his poke screamed out for help and got you arrested. Game Over`)
            Player.hasDied = 1;
        }else if(playerPoke.name === Pokemon3.name && playerPoke.moves[moveChoice]=== Pokemon3.moves[2]){
            alert(`Oh no your move missed and Barry and his poke started crying and the towns people beat you up. Game Over`)
            Player.hasDied = 1;
        }else{
            alert(`Well done you beat your rival ${Rival.name}!! Continue on to the Pewter City Gym `)
        }
    }else{
        if(playerPoke.name === Pokemon2.name){
            alert(`Since you were to scared to fight your rival.${Pokemon2.name} put on sunglasses and joined a ${Pokemon2.name} gang. Game Over`)
            Player.hasDied = 1;
        }else{
            alert('You saftely avoided your rival and made it to the Pewter City Gym!!!')
        }
    }
}
const pewterGym = (playerPoke) =>{
    alert(`Welcome to your first gym challenge trainer ${Player.name}. You will be battling Brock the Rock Type Gym Leader`)
    alert(`You are challenged by Pewter City Gym Leader Brock to a battle and he sends out his Onix!!! You send out ${playerPoke.name}.`)
    let moveChoice = pickedMove(playerPoke);
    if(playerPoke.moves[moveChoice]=== Pokemon1.moves[3]){
        alert(`${playerPoke.moves[moveChoice]} is super effective. You took down Brocks Onix in one hit!`)
    }else if(playerPoke.moves[moveChoice] === playerPoke.moves[2]){
        alert(`${playerPoke.moves[moveChoice]} is super effective. You took down Brocks Onix in one hit!`)
    }else{
        alert(`Oh no ${playerPoke.moves[moveChoice]} isn't effective. Brock's Onix laid you out like a pancake. Game Over`)
        Player.hasDied = 1;
        return;
    }
    alert(`Amazing job trainer ${Player.name} for beating Gym Leader Brock you earned your very first gym badge!!`);
    alert(`In the next adventure we move to Cerulean City. For now though our adventure is over.`)
    Player.hasDied = 1;
    return;

}       

  const Journey1 = () =>{
    alert(`Congrats you picked ${Pokemon1.name} the ${Pokemon1.type} type pokemon.`);
    let trainerBattle = confirm("Now would you like to fight the trainer on the right? If no you procced to Viridian Forest");
    if(trainerBattle){
        battleRandom(Pokemon1,1);
    }
    if(Player.hasDied != 1)
        viridianForest(Pokemon1)
    if(Player.hasDied != 1)
        rivalBattle(Pokemon1)
    if(Player.hasDied != 1)
        pewterGym(Pokemon1)
    
  }
  const Journey2 = () =>{
    alert(`Congrats you picked ${Pokemon2.name} the ${Pokemon2.type} type pokemon.`);
    let trainerBattle = confirm("Now would you like to fight the trainer on the right? If no you procced to Viridian Forest");
    if(trainerBattle){
        battleRandom(Pokemon2,1);
    }
    if(Player.hasDied != 1)
        viridianForest(Pokemon2)
    if(Player.hasDied != 1)
        rivalBattle(Pokemon2)
    if(Player.hasDied != 1)
        pewterGym(Pokemon2)
  }
  const Journey3 = () =>{
    alert(`Congrats you picked ${Pokemon3.name} the ${Pokemon3.type} type pokemon.`);
    let trainerBattle = confirm("Now would you like to fight the trainer on the right? If no you procced to Viridian Forest");
    if(trainerBattle){
        battleRandom(Pokemon3,1);
    }
    if(Player.hasDied != 1)
        viridianForest(Pokemon3)
    if(Player.hasDied != 3)
        rivalBattle(Pokemon3)
    if(Player.hasDied != 3)
        pewterGym(Pokemon3)

  }

  while(Player.playAgain != false){
  Player.name = prompt("What is your name?");
  Player.playGame = confirm("Do you want to go a Pokemon adventrue?!")
  if(Player.playGame === true){
    playGame();
    pickStarter();
    switch(Player.pokeChoice){
        case 1:
            Journey1();
            break;
        case 2:
            Journey2();
            break;
        case 3:
            Journey3();
            break;
    }
    Player.playAgain = confirm('Would you like to play again?');
   }else{
        playGame();
        Player.playAgain = false;
    }
}       
