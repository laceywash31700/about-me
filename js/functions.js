/* eslint-disable no-multi-spaces */
/* eslint-disable no-useless-escape */
'use strict';
let userName = prompt('hello what is your name?').toUpperCase();

let gender = prompt('what gender do you identify as?' + 'please answer with: boy, girl, or non-binary').toLowerCase();

alert('Welcome ' + userName + ' thanks for visiting my bio I made a couple of questions for you to answer to get to know me better before, you actually read about my life. If you would be so kind as to answer with yes or no or y or n. Thanks in advance. ALSO YOU WILL BE SCORED SO DONT MESS UP! you can have a grand total of 8 points');

let score = 0;

let favoriteAnime0 = 'one piece';
let favoriteAnime3 = 'naruto';
let favoriteAnime5 = 'sailor moon';
let favoriteAnime6 = 'that time i got reincarnated as a slime';

let totalScore = score;

let totalCorrect = 0;


let compliment = ['you\'re a King!', 'you\'re a Queen!', 'You\'re a Star!'];

let answer0 = prompt('I never step foot into Chicago?').toLowerCase();

if (answer0 === 'yes' || answer0 === 'y') {
    alert('You fool! LOL Just Kidding but you did get it wrong though.');
} else if (answer0 === 'no' || answer0 === 'n') {
    alert('Why do you know my life? YOU\RE CORRECT THOUGH! GOOD JOB!.');
    score++;
    totalCorrect++;
} else {
    while (answer0 !== 'yes' && answer0 !== 'no' && answer0 !== 'y' && answer0 !== 'n') {
        answer0 = prompt('Hey I asked nicely please use yes or no or with y or n');
    }
}

let answer1 = prompt('I can\'t play the saxophone?').toLowerCase();

if (answer1 === 'yes' || answer1 === 'y') {
    alert('You fool! LOL Just Kidding but you did get it wrong though.');
} else if (answer1 === 'no' || answer1 === 'n') {
    alert('YOU GUESSED IT! GOOD JOB!');
    score++;
    totalCorrect++;
} else {
    while (answer1 !== 'yes' && answer1 !== 'no' && answer1 !== 'y' && answer1 !== 'n') {
        answer1 = prompt('Hey I asked nicely please use yes or no or with y or n');
    }
}

let answer2 = prompt('Do I like dungeons and dragons]?').toLowerCase();

if (answer2 === 'yes' || answer2 === 'y') {
    alert('YOU ARE CORRECT! you must have rolled a nat 20. DOPE!');
    score++;
    totalCorrect++;
} else if (answer2 === 'no' || answer2 === 'n') {
    alert('You fool! LOL Just Kidding but you did get it wrong though.');
} else {
    while (answer2 !== 'yes' && answer2 !== 'no' && answer2 !== 'y' && answer2 !== 'n') {
        answer2 = prompt('Hey I asked nicely please use yes or no or with y or n');
    }
}


let answer3 = prompt('I was a A student in Highschool?').toLowerCase();

if (answer3 === 'yes' || answer3 === 'y') {
    alert('You fool! LOL Just Kidding but you did get it wrong though.');
} else if (answer3 === 'no' || answer3 === 'n') {
    alert('How do you know that information? Who told you my secrets you know my greatest shame. YOU RIGHT THOUGH!');
    score++;
    totalCorrect;
} else {
    while (answer3 !== 'yes' && answer3 !== 'no' && answer3 !== 'y' && answer3 !== 'n') {
        answer3 = prompt('Hey I asked nicely please use yes or no or with y or n');
    }
}

let answer4 = prompt('I went to college in Colorado?').toLowerCase();

if (answer4 === 'yes' || answer4 === 'y') {
    alert('Okay thats kinda stalker level I need you to chill LOL Im just playing GOOD JOB!');
    score++;
    totalCorrect++;
} else if (answer4 === 'no' || answer4 === 'n') {
    alert('You fool! HaHa! Just kidding your not a fool But, you did get it wrong though better luck next time.');
} else {
    while (answer4 !== 'yes' && answer4 !== 'no' && answer4 !== 'y' && answer4 !== 'n') {
        answer4 = prompt('Hey I asked nicely please use yes or no or with y or n');
    }
}

let myAge = 28;
let attempts = 4;
while (attempts > 0) {
    let userGuessForMyAge = parseInt(prompt(`what is my age? You have ${attempts} attempt(s) left.`));
    attempts--;
    if (userGuessForMyAge === myAge) {
        alert('GOOD JOB! YOU WIN A FREE TOASTER! okay not really but still good job though.');
        score++;
        totalCorrect++;
        break;
    } else if (userGuessForMyAge < myAge) {
        alert('Oh stop you I\'m not that young. Try again.');
    } else if (userGuessForMyAge > myAge) {
        alert('Okay calm down I\'m not that old. Try again.');
    }
}

alert('This next question answers won\'t be in the bio but it\s a fun thing I love and if you can guess it right you get extra points.');


for (let bonusQuestionAttempts = 6 ;bonusQuestionAttempts > 0; bonusQuestionAttempts-- ) {
    let userGuessForExtraPoints = prompt(`What is one of my favorite anime\s? You have ${bonusQuestionAttempts} attempt(s) left`).toLowerCase();
    if (userGuessForExtraPoints === favoriteAnime0 || userGuessForExtraPoints === favoriteAnime3 || userGuessForExtraPoints === favoriteAnime5 || userGuessForExtraPoints === favoriteAnime6) {
        alert('YOU GUESSED CORRECTLY 12 POINTS FOR GRIFFINDOR HOUSE! not really though I\ll give you like 2 points');
        score += 2;
        totalCorrect++;
        break;
    }else {
        alert('Try again buddy.');
    }
}

console.log(totalScore);
console.log(totalCorrect);
alert( 'Hey you did it! Your score is ' + totalScore + ' POINTS GOOD JOB! ' +  ' you got ' + totalCorrect + ' CORRECT ' );



alert('Thanks for playing the game I worked pretty hard on it. Dont\'t worry if you didn\'t get a lot or all of the answers right. I mean we just met but, you are welcomed to try again after you read my bio. Thanks again'    +         userName);


if (gender === 'boy') {
    alert(compliment[0]);
} else if (gender === 'girl') {
    alert(compliment[1]);
} else {
    alert(compliment[2]);
}

