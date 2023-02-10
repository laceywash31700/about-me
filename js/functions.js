let userName = prompt('hello what is your name?').toUpperCase();
let gender = prompt('what gender do you identify as?' + 'please answer with: boy, girl, or non-binary').toLowerCase();
alert('Welcome ' + userName + ' thanks for visiting my bio I made a couple of questions for you to answer to get to know me better before, you actually read my about my life. If you would be so kind as to answer with yes or no or y or n. Thanks in advance. ');
let answer0 = prompt('I never been to Chicago?').toLowerCase;
let answer1 = prompt('I can\'t play the saxophone?').toLowerCase;
let answer2 = prompt('Do I like dungeons and dragons]?').toLowerCase;
let answer3 = prompt('I was a A student in Highschool?').toLowerCase;
let answer4 = prompt('I went to college in Colorado?').toLowerCase;
let compliment = ['you\'re a King!', 'you\'re a Queen!', 'You\'re a Star!'];


answer0;

if (answer0 === 'yes' || answer0 === 'y') {
    alert('You fool! LOL Just Kidding but you did get it wrong though.');
} else if (answer0 === 'no' || answer0 === 'n') {
    alert('why do you know my life? you right though.');
} else {
    alert('Hey I asked nicely please use yes or no or with y or n');
    answer0;
}

answer1;

if (answer1 === 'yes' || answer1 === 'y') {
    alert('You fool! LOL Just Kidding but you did get it wrong though.');
} else if (answer1 === 'no' || answer1 === 'n') {
    alert('why do you know my life? you right though.');
} else {
    alert('Hey I asked nicely please use yes or no or with y or n');
    answer1;
}

answer2;

if (answer2 === 'yes' || answer2 === 'y') {
    alert('why do you know my life? you right thought.');
} else if (answer2 === 'no' || answer2 === 'n') {
    alert('You fool! LOL Just Kidding but you did get it wrong though.');
} else {
    alert('Hey I asked nicely please use yes or no or with y or n');
    answer2;
}


answer3;

if (answer3 === 'yes' || answer3 === 'y') {
    alert('You fool! LOL Just Kidding but you did get it wrong though.');
} else if (answer3 === 'no' || answer3 === 'n') {
    alert('why do you know my life? you right though.');
} else {
    alert('Hey I asked nicely please use yes or no or with y or n');
    answer3;
}


answer4;

if (answer4 === 'yes' || answer4 === 'y') {
    alert('why do you know my life? you right though.');
} else if (answer4 === 'no' || answer4 === 'n') {
    alert('You fool! LOL Just Kidding but you did get it wrong though.');
} else {
    alert('Hey I asked nicely please use yes or no or with y or n');
    answer4;
}

alert('Thanks for playing the game I worked pretty hard on it. Dont\'t worry if you didn\'t get a lot or all of the answers right. I mean we just met but, you are welcomed to try again after you read my bio. Thanks again'  +  userName  )


if (gender === 'boy') {
    alert(compliment[0]);
} else if (gender === 'girl') {
    alert(compliment[1]);
} else {
    alert(compliment[2]);
}

