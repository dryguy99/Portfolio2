var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {

  $scope.information = [
  {
    src: "./images/openfridge.jpeg",
    dataname: "Open Fridge",
    datalink: "https://open-fridge.herokuapp.com/",
    alt: "Open Fridge App",
    text: "Open Fridge helps keep track of what's is in your refridgerator & finds recipies with the ingredients on hand.",
    datalinkname: 'Open Fridge'
  },

  {
   src: "./images/flashcard.jpeg",
   dataname: "Flashcard Machine",
   datalink: "https://flashcard-dryguy.herokuapp.com/",
   alt: "Flashcard Machine",
   text: "I designed this app to create flashcards to use as a study tool.",
   datalinkname: 'Use Flashcard Machine'
   },

   {
     src: "./images/trivia.jpeg",
     dataname: "Music Trivia",
     datalink: 'https://trivia-dryguy.herokuapp.com/',
     alt: "Music Trivia App",
     text: "I designed to set timers to control gameplay. Once started, Gameplay continues until time expires.",
     datalinkname: 'Play Music Trivia'
   },

  {
   src: "./images/rpsls.jpeg",
   dataname: 'Rock Paper Scissors Lizard Spock',
   datalink: 'https://rpsls-dryguy.herokuapp.com/',
   alt: "Rock, Paper, Scissors, Lizard, Spock app",
   text: "I designed this app as a multiplayer game backed with Google's firebase.",
   datalinkname: 'Rock, Paper, Scissors, Lizard, Spock'
  },

  {
   src: "./images/hangman.jpeg",
   dataname: 'Movie Hangman',
   datalink: "https://hangman-dryguy.herokuapp.com/",
   alt: "Hangman",
   text: "I designed this app as a fun, interactive game that may be played on almost any device.",
   datalinkname: 'Play Hangman'
 },

 {
   src: "./images/giphy.jpeg",
   dataname: 'Find Movie Moving Images',
   datalink: "https://giphy-dryguy.herokuapp.com/",
   alt: "Find moving images app",
   text: "I used jQuery and AJAX to create a fun movie app.",
   datalinkname: 'Find Movie Moving Images'
 }

];

});
