(function (window) {


var hello = {};


var word = "Hello";


hello.speak = function (name) {
  console.log(word + " " + name);
}


window.hello = hello;

})(window);