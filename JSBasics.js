//Exercise 1

var e = 12;
var r = 14;

console.log(e + r);

var t = "hello";
var g = "friend";


//Exercise 2

console.log(t + g);

var interests = [["hockey", "dogs", "beer"], ["internetz", "nature", "travel"]];

console.log(interests[0][1], interests[1][0]);

//Exercise 2 continued for fun
var MyInfo = {
	First: "Adam", 
	Last: "Deer", 
	Birth: "March19",
	likes:["hockey", "internetz", "dogs"]
};

var MyInterest = ["hockey", "internetz", "dogs"];

console.log(MyInfo['Last']);
console.log(MyInterest[1]);
console.log(MyInterest[0], MyInfo['First']);
console.log(MyInterest[2], MyInfo['Birth']);
console.log(MyInfo.likes[1]);
console.log(MyInfo["Last"], interests[0][2], interests[1][1]);
console.log("hello my name is " + MyInfo["First"] + ", I like " + MyInfo.likes[2]);


//Exercise 3

var x = 101;

if (x <= 100){
	alert ("your number is less than 100")
} else{
	alert ("your number " + x + " is greater than 100")
}

//Exercise 4


function WhatName (userinput){
	console.log (userinput);
}

var userinput = "Fred";

WhatName(userinput);

//Exercise 5

function PrizeAlert (doorChoice){
	if (typeof doorChoice !=="number"){
		return alert ("not a number bro.")
	}
	if (doorChoice === 1){
		return alert ("you win a new dog")
	}else if (doorChoice === 2){
		return alert ("you win a new car")
	}else if (doorChoice === 3){
		return alert ("you win a new pen")
	}else{
		return alert ("you need to pick a door between 1 and 3")
	}
}



PrizeAlert(2);
PrizeAlert(3);
PrizeAlert("door number Zero");
PrizeAlert(66);











