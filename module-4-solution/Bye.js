(function (window) {



var bye = {};


var word = "Good Bye";


bye.speak = function (name) {
  console.log(word + " " + name);
}


window.bye = bye;

})(window);