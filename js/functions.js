/* eslint-disable no-multi-spaces */
/* eslint-disable no-useless-escape */
'use strict';


let gender = prompt('what gender do you identify as?' + 'please answer with: boy, girl, or non-binary').toLowerCase();
let userName = prompt('hello what is your name?').toUpperCase();
alert('Welcome ' + userName + ' thanks for visiting my bio I made a couple of questions for you to answer to get to know me better before, you actually read about my life. If you would be so kind as to answer with yes or no or y or n. Thanks in advance. ALSO YOU WILL BE SCORED SO DONT MESS UP! you can have a grand total of 8 points');





let score = 0;
let totalCorrect = 0;
let totalIncorrect = 0;


function noIsCorrect(question) {

    let answer = prompt(question).toLowerCase();
    if (answer === 'yes' || answer === 'y') {
        alert('You fool! LOL Just Kidding but you did get it wrong though.');
        totalIncorrect++;
    } else if (answer === 'no' || answer === 'n') {
        alert('Why do you know my life? YOU\RE CORRECT THOUGH! GOOD JOB!.');
        score++;
        totalCorrect++;
    } else {
        while (answer !== 'yes' && answer !== 'no' && answer !== 'y' && answer !== 'n') {
            answer = prompt('Hey I asked nicely please use yes or no or with y or n');
        }
    }
}

noIsCorrect('I never step foot into Chicago?');



noIsCorrect('I can\'t play the saxophone?');

function yesIsCorrect(question) {
    let answer = prompt(question).toLowerCase();
    if (answer === 'yes' || answer === 'y') {
        alert('YOU ARE CORRECT! you must have rolled a nat 20. DOPE!');
        score++;
        totalCorrect++;
    } else if (answer === 'no' || answer === 'n') {
        alert('You fool! LOL Just Kidding but you did get it wrong though.');
        totalIncorrect++;
    } else {
        while (answer !== 'yes' && answer !== 'no' && answer !== 'y' && answer !== 'n') {
            answer = prompt('Hey I asked nicely please use yes or no or with y or n');
        }
    }
}

yesIsCorrect('Do I like dungeons and dragons?');



noIsCorrect('I was a A student in Highschool?');


yesIsCorrect('I went to college in Colorado?');

let myAge = 28;
let attempts = 4;
function ageGuess() {
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

        } else if (!attempts) {
            alert('You ran out of attempts tuff luck try again next time.');
            totalIncorrect++;
        }
    }
}

ageGuess();


function bonusQuestion() {
    alert('This next question answers won\'t be in the bio but it\s a fun thing I love and if you can guess it right you get extra points.');
    let favoriteAnime = ['one piece', 'naruto', 'sailor moon', 'that time i got reincarnated as a slime', 'bleach', 'vinland saga', 'goblin slayer', 'black clover'];
    for (let bonusQuestionAttempts = 6; bonusQuestionAttempts > 0; bonusQuestionAttempts--) {
        console.log(bonusQuestionAttempts);
        let userGuessForExtraPoints = prompt(`What is one of my favorite anime\s? You have ${bonusQuestionAttempts} attempt(s) left`).toLowerCase();
        for (let i = 0; i < favoriteAnime.length; i++) {
            if (userGuessForExtraPoints === favoriteAnime[i]) {
                alert('YOU GUESSED CORRECTLY 12 POINTS FOR GRYFFINDOR HOUSE! not really though thats way too many points for this game. I\ll give you like 2 points');
                score += 2;
                totalCorrect++;
                bonusQuestionAttempts = 0;
                break;
            } else if (userGuessForExtraPoints !== favoriteAnime[i]) {
                alert('Try again buddy.');
                break;
            }
        }
    }
}

bonusQuestion();


let totalScore = score;
console.log(totalScore);
console.log(totalCorrect);
console.log(totalIncorrect);
alert('Hey you did it! You got a score of ' + totalScore + ' POINTS GOOD JOB! ' + 'you got ' + totalCorrect + ' correct and ' + totalIncorrect + ' incorrect.');



alert('Thanks for playing the game I worked pretty hard on it. Dont\'t worry if you didn\'t get a lot or all of the answers right. I mean we just met but, you are welcomed to try again after you read my bio. Thanks again ' + userName );


function genderedCompliment() {
    let compliment = ['you\'re a King!', 'you\'re a Queen!', 'You\'re a Star!'];
    if (gender === 'boy') {
        alert(compliment[0]);
    } else if (gender === 'girl') {
        alert(compliment[1]);
    } else {
        alert(compliment[2]);
    }
}

genderedCompliment();
