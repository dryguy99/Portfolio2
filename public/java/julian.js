var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {

		$scope.information = [

			{
			 src: "images/flashcard.jpeg",
			 dataname: "Flashcard Machine",
			 datalink: "https://flashcard-dryguy.herokuapp.com/",
			 alt: "Flashcard Machine",
			 text: "I designed this app to create flashcards to use as a study tool."
			 },

			{
			 src: "images/rpsls.jpeg",
			 dataname: 'Rock Paper Scissors Lizard Spock',
			 datalink: 'https://rpsls-dryguy.herokuapp.com/',
			 alt: "Rock, Paper, Scissors, Lizard, Spock app",
			 text: "I designed this app as a multiplayer game."
			},

			{
			 src: "images/hangman.jpeg",
			 dataname: 'Movie Hangman',
			 datalink: "https://hangman-dryguy.herokuapp.com/",
			 alt: "Hangman",
			 text: "I designed this app as a fun, interactive game."
			}

		];


});
