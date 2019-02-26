/*

The Movie Database
It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie:
title (a string), duration (a number), and stars (an array of strings).
Create a function to print out the movie information like so:
"Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

*/

/*
-------------
JOEL'S ANSWER
-------------
*/

const oBrother = {
  title: "O! Brother, Where Art Thou?",
  duration: 127,
  stars: ["George Clooney", "Gillian Welch", "John Goodman", "The really slinty guy"]
};

const alien = {
  title: "Alien",
  duration: 116,
  stars: ["Sigourney Weaver", "John Hurt", "Xenomorph"]
};

const movieInfo = function (movie) {
  const info = `${ movie.title } lasts for ${ movie.duration } minutes. Stars: ${ movie.stars.join(', ') }`;
  return info;
};

console.log(movieInfo(oBrother));
console.log(movieInfo(alien));
