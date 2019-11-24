document.title = "Lootbox Simulator";

var money = 2500;
var workenergy = 10;
var worktimeout = 5; //in seconds
var workhunger = 20;
var workhappiness = 10;
var hourlywage = 37.5;

var happiness = 100;
var hunger = 100;


var energy = 100;
var sleeptimeout = 10;


var daylength = 24;
var waketime = 8;
var playenergy = 10;

var ing1 = '';
var ing2 = '';
var ing3 = '';

const lootboxvid = document.getElementById('lootboxopening');
const typing = document.getElementById('typing');
const soundtrack = document.getElementById('soundtrack');
const eating = document.getElementById('eating');
const cooking = document.getElementById('cooking');
const buttonpress = document.getElementById('buttonpress');

var meatprice = 150;
var veggieprice = 80;
var fishprice = 110;

var cookingres = 'Nothing';

var boxprice = 10;
var keyprice = 200;

var boxamount = 0;
var keyamount = 0;

var credits = 210;

var bubblejoeamount = 0;
var hersheysamount = 0;
var boybawangamount = 0;

refresh();
	
	


function refresh(){
	deathchecker();
	document.getElementById('bjcount').innerHTML = "You Have " + bubblejoeamount + " Babble Joes";
	document.getElementById('bbcount').innerHTML = "You Have " + boybawangamount + " Boy Bawangs";
	document.getElementById('hcount').innerHTML = "You Have " + hersheysamount + " Hersheys";
	document.getElementById('creditcount').innerHTML = credits + " Gamer Credits";
	document.getElementById('boxno').innerHTML = boxamount + " Game Boxes";
	document.getElementById('keyno').innerHTML = keyamount + " Game Keys";
	document.getElementById('happiness').innerHTML = happiness;
	document.getElementById('money').innerHTML = money + " PHP";
	document.getElementById('hunger').innerHTML = hunger;
	document.getElementById('energy').innerHTML = energy;
	document.getElementById('cookres').innerHTML = cookingres;
	
	
							if(ing1 == 'meat'){
								document.getElementById('inginput1').src = 'Ingredients/meat.png';
							}
							if(ing1 == 'veggie'){
								document.getElementById('inginput1').src = 'Ingredients/veggie.png';
							}
							if(ing1 == 'fish'){
								document.getElementById('inginput1').src = 'Ingredients/fish.png';
							}
	
														if(ing2 == 'meat'){
															document.getElementById('inginput2').src = 'Ingredients/meat.png';
														}
														if(ing2 == 'veggie'){
															document.getElementById('inginput2').src = 'Ingredients/veggie.png';
														}
														if(ing2 == 'fish'){
															document.getElementById('inginput2').src = 'Ingredients/fish.png';
														}
	
					if(ing3 == 'meat'){
						document.getElementById('inginput3').src = 'Ingredients/meat.png';
					}
					if(ing3 == 'veggie'){
						document.getElementById('inginput3').src = 'Ingredients/veggie.png';
					}
					if(ing3 == 'fish'){
						document.getElementById('inginput3').src = 'Ingredients/fish.png';
					}
	if(gameres == 'draw'){
		document.getElementById('gameresult').innerHTML = 'Draw! Play again!';
	}
	if(gameres == 'lose'){
		document.getElementById('gameresult').innerHTML = 'You lose!';
	}
	if(gameres == 'win'){
		document.getElementById('gameresult').innerHTML = 'You Win! Collect 100 coins!';
	}
	
	
	

}


function workfunc(){
	money = money + hourlywage;
	document.getElementById('eatbutton').disabled = true;
	document.getElementById('cookbutton').disabled = true;
	document.getElementById('workbutton').disabled = true;
	document.getElementById('sleepbutton').disabled = true;
	typing.play();
	setTimeout(
		function(){
		document.getElementById('eatbutton').disabled = false;
		document.getElementById('cookbutton').disabled = false;
		document.getElementById('workbutton').disabled = false;
		document.getElementById('sleepbutton').disabled = false;
		typing.pause()
	}, worktimeout * 1000);
	hunger = hunger - workhunger
	energy = energy - workenergy;
	happiness = happiness - workhappiness;
	refresh();
}

function cookfunc(){
	cookstart();
	if(ing1 == 'meat' && ing2 == 'veggie' && ing3 == 'veggie'){
		cookingres = "Chopsuey"
	}
	if(ing1 == 'veggie' && ing2 == 'veggie' && ing3 == 'veggie'){
		cookingres = "Salad"
	}
	if(ing1 == 'fish' && ing2 == 'fish' && ing3 == 'veggie'){
		cookingres = "Sushi"
	}
	if(ing1 == 'meat' && ing2 == 'meat' && ing3 == 'veggie'){
		cookingres = "Steak"
	}
	if(ing1 == 'veggie' && ing2 == 'meat' && ing3 == 'veggie'){
		cookingres = "Bicol Express"
	}
	if(ing1 == 'fish' && ing2 == 'veggie' && ing3 == 'veggie'){
		cookingres = "Fish Tofu"
	}
	if(ing1 == 'meat' && ing2 == 'meat' && ing3 == 'meat'){
		cookingres = "Lechon"
	}
	ing1 = '';
	ing2 = '';
	ing3 = '';
	document.getElementById('inginput1').src = "Ingredients/none.png";
	document.getElementById('inginput2').src = "Ingredients/none.png";
	document.getElementById('inginput3').src = "Ingredients/none.png";
	refresh();
}



function cookstart(){
	document.getElementById('eatbutton').disabled = true;
	document.getElementById('cookbutton').disabled = true;
	document.getElementById('workbutton').disabled = true;
	document.getElementById('sleepbutton').disabled = true;
	cooking.play()
	setTimeout(
		function(){
		document.getElementById('eatbutton').disabled = false;
		document.getElementById('cookbutton').disabled = false;
		document.getElementById('workbutton').disabled = false;
		document.getElementById('sleepbutton').disabled = false;
		cooking.pause()
	}, worktimeout * 1000);
}

	
function eatfunc(){
	eating.play()
	document.getElementById('eatbutton').disabled = true;
	document.getElementById('cookbutton').disabled = true;
	document.getElementById('workbutton').disabled = true;
	document.getElementById('sleepbutton').disabled = true;
	eateffect();
	setTimeout(
		function(){
		document.getElementById('eatbutton').disabled = false;
		document.getElementById('cookbutton').disabled = false;
		document.getElementById('workbutton').disabled = false;
		document.getElementById('sleepbutton').disabled = false;
		eating.pause()
	}, worktimeout * 1000);
	refresh();
}

function eateffect(){
	if(cookingres != 'Nothing'){
	alert("You've eaten " + cookingres);
	}
	if(cookingres == 'Chopsuey'){
		if(hunger + 40 > 100){
			 alert("You are full");
			 hunger = 100;
		}else{
			hunger = hunger + 40;
			}
	}
	if(cookingres == 'Salad'){
		if(hunger + 30 > 100){
			 alert("You are full");
			 hunger = 100;
		}else{
			hunger = hunger + 30;
			}
	}
	if(cookingres == 'Lechon'){
	if(hunger + 100 > 100){
			 alert("You are full");
			 hunger = 100;
		}else{
			hunger = hunger + 100;
			}
	}
	if(cookingres == 'Sushi'){
	if(hunger + 30 > 100){
			 alert("You are full");
			 hunger = 100;
		}else{
			hunger = hunger + 30;
			}
	}
	if(cookingres == 'Steak'){
	if(hunger + 60 > 100){
			 alert("You are full");
			 hunger = 100;
		}else{
			hunger = hunger + 60;
			}
	}
	if(cookingres == 'Fish Tofu'){
	if(hunger + 20 > 100){
			 alert("You are full");
			 hunger = 100;
		}else{
			hunger = hunger + 20;
			}
	}
	if(cookingres == 'Bicol Express'){
	if(hunger + 50 > 100){
			 alert("You are full");
			 hunger = 100;
		}else{
			hunger = hunger + 50;
			}
	}
	refresh();
	
	if(cookingres == 'Nothing'){
	alert("yo wtf, you can't eat nothing");
	}
	cookingres = "Nothing";
}

function deathchecker(){
	if(hunger <= 0){
		alert("You have starved");
		window.close();
	}
	if(energy <= 0){
		alert("You have lost all energy");
		window.close();
	}
	if(happiness <= 0){
		alert("You have succumbed to depression");
		window.close();
	}
}
	

function sleepfunc(){
	energy = 100;
	hunger = hunger - 20;
	happiness = happiness + 10
	document.getElementById('eatbutton').disabled = true;
	document.getElementById('cookbutton').disabled = true;
	document.getElementById('workbutton').disabled = true;
	document.getElementById('sleepbutton').disabled = true;
	snoring.play()
	setTimeout(
		function(){
		document.getElementById('eatbutton').disabled = false;
		document.getElementById('cookbutton').disabled = false;
		document.getElementById('workbutton').disabled = false;
		document.getElementById('sleepbutton').disabled = false;
		snoring.pause()
	}, sleeptimeout * 1000);
	refresh();
}

function pricecheck(x){
	if(x > money){
	alert("You do not have enough money for that!");
	}else{
	money = money - x;
	}
}

function addmeat1(){
	buttonpress.play();
	ing1 = 'meat';	
	pricecheck(meatprice);
	refresh();
}

function addmeat2(){
	ing2 = 'meat';
	pricecheck(meatprice);
	refresh();
}

function addmeat3(){
	buttonpress.play();
	ing3 = 'meat';
	pricecheck(meatprice);
	refresh();
}

function addveggie1(){
	buttonpress.play();
	ing1 = 'veggie';
	pricecheck(veggieprice);
	refresh();
}

function addveggie2(){
	buttonpress.play();
	ing2 = 'veggie';
	pricecheck(veggieprice);
	refresh();
}

function addveggie3(){
	buttonpress.play();
	ing3 = 'veggie';
	pricecheck(veggieprice);
	refresh();
}

function addfish1(){
	buttonpress.play();
	ing1 = 'fish';
	pricecheck(fishprice);
	refresh();
}

function addfish2(){
	buttonpress.play();
	ing2 = 'fish';
	pricecheck(fishprice);
	refresh();
}

function addfish3(){
	buttonpress.play();
	ing3 = 'fish';
	pricecheck(fishprice);
	refresh();
}


var playerhand = '';
var bothand = '';

function rock(){
	buttonpress.play();
	document.getElementById('rock').disabled = true;
	document.getElementById('paper').disabled = true;
	document.getElementById('scissors').disabled = true;
	setTimeout(
		function(){
		document.getElementById('rock').disabled = false;
		document.getElementById('paper').disabled = false;
		document.getElementById('scissors').disabled = false;
	}, 2000);
	playerhand = 'rock';
	botchance();
	hunger = hunger - 2;
	energy = energy - 2;
	botchoice = 0;
}
function paper(){
	buttonpress.play();
	document.getElementById('rock').disabled = true;
	document.getElementById('paper').disabled = true;
	document.getElementById('scissors').disabled = true;
	setTimeout(
		function(){
		document.getElementById('rock').disabled = false;
		document.getElementById('paper').disabled = false;
		document.getElementById('scissors').disabled = false;
	}, 2000);
	playerhand = 'paper';
	botchance();
	hunger = hunger - 2;
	energy = energy - 2;
	botchoice = 0;
}

function scissors(){
	buttonpress.play();
	document.getElementById('rock').disabled = true;
	document.getElementById('paper').disabled = true;
	document.getElementById('scissors').disabled = true;
	setTimeout(
		function(){
		document.getElementById('rock').disabled = false;
		document.getElementById('paper').disabled = false;
		document.getElementById('scissors').disabled = false;
	}, 2000);
	playerhand = 'scissors';
	botchance();
	hunger = hunger - 2;
	energy = energy - 2;
	botchoice = 0;
}
var gameres = '';
var botchoice = 0;

function botchance(){
	botchoice = Math.random() * 100;
	console.log(botchoice)
	if(botchoice >= 0 && botchoice <= 33.33){
		bothand = 'rock';
		document.getElementById('botplay').innerHTML = bothand;
	}
	if(botchoice > 33.33 && botchoice<= 66.66){
		bothand = 'paper';
		document.getElementById('botplay').innerHTML = bothand;
	}
	if(botchoice > 66.66 && botchoice <= 100){
		bothand = 'scissors';
		document.getElementById('botplay').innerHTML = bothand;
	}
	
	if(bothand == playerhand){
		gameres = 'draw';
		credits = credits + 1; 
		refresh();
	}
	if(bothand == 'paper' && playerhand == 'rock'){
		gameres = 'lose';
		refresh();
	}
	if(bothand == 'rock' && playerhand == 'paper'){
		gameres = 'win';
		credits = credits + 3;
		refresh();
		
	}
	if(bothand == 'scissors' && playerhand == 'paper'){
		gameres = 'lose';
		refresh();
	}
	if(bothand == 'paper' && playerhand == 'scissors'){
		gameres = 'win';
		credits = credits + 3;
		refresh();
	}
	if(bothand == 'rock' && playerhand == 'scissors'){
		gameres = 'lose';
		refresh();
	}
	if(bothand == 'scissors' && playerhand == 'rock'){
		gameres = 'win';
		credits = credits + 3;
		refresh();
	}
}

function buybox(){
	buttonpress.play();
	if(credits - boxprice < 0){
		alert("You can't afford that! Buy some more credits or play the game!")
	}else{
		credits = credits - boxprice;
		boxamount = boxamount + 1;
		refresh()
	}
}

function buykey(){
	buttonpress.play();
	if(credits - keyprice < 0){
		alert("You can't afford that! Buy some more credits or play the game!")
	}else{
		credits = credits - keyprice;
		keyamount = keyamount + 1;
		refresh()
	}
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openbutton");

var roll = 0;
// When the user clicks on the button, open the modal
btn.onclick = function() {
	buttonpress.play();
if(boxamount > 0 && keyamount > 0){
boxamount = boxamount - 1;
keyamount = keyamount - 1;
refresh();
 roll = Math.floor((Math.random()) * 100);
 if(roll >= 0 && roll <= 80){
  modal.style.display = "block";
  lootboxvid.src = 'loot/babblejoevid.mp4'
  lootboxvid.play();
  setTimeout(function(){
	  modal.style.display = "none";
	  bubblejoeamount = bubblejoeamount + 1;
	  if(happiness + 5 > 100){
		  happiness = 100;
	  }else{
	  happiness = happiness + 5;
	  }
	  refresh();
  }, 9000);
 }
 if(roll > 80 && roll <= 96){
  modal.style.display = "block";
  lootboxvid.src = 'loot/boybawangvid.mp4';
  lootboxvid.play();
  setTimeout(function(){
	  modal.style.display = "none";
	  boybawangamount = boybawangamount + 1;
	  if(happiness + 20 > 100){
		  happiness = 100;
	  }else{
	  happiness = happiness + 20;
	  }
	  refresh();
  }, 9000);
 }
 if(roll > 96 && roll <= 100){
  modal.style.display = "block";
  lootboxvid.src = 'loot/hersheysvid.mp4';
  lootboxvid.play();
  setTimeout(function(){
	  modal.style.display = "none";
	  hersheysamount = hersheysamount + 1;
	  if(happiness + 50 > 100){
		  happiness = 100;
	  }else{
	  happiness = happiness + 50;
	  }
	  refresh();
  }, 9000);
 }
 
}else{
	if(keyamount == 0){
		alert("You don't have enough keys! Buy one now!");
	}
	if(boxamount == 0){
		alert("You don't have enough boxes! Buy one now!");
	}
}
}

var cred100price = 100;
var cred500price = 450;
var cred1000price = 800; 

function buy100cred(){
	buttonpress.play();
	pricecheck(cred100price);
	credits = credits + 100;
	refresh();
}
function buy500cred(){
	buttonpress.play();
	pricecheck(cred500price);
	credits = credits + 500;
	refresh();
}

function buy1000cred(){
	buttonpress.play();
	pricecheck(cred1000price)
	credits = credits + 1000;
	refresh();
}

