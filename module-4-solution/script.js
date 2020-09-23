(function (window) {




var names = ["Yaakov", "John", "Joe", "Laura"];


for (var i in names) {

  
  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

  
  if (firstLetter == 'j') {
     window.bye.speak(names[i]);
  } else {
     window.hello.speak(names[i]);
  }
}
})(window);