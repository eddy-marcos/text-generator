//iife function
(function () {
  getData();

  function getData() {

    var httpRequest = new XMLHttpRequest(); //create a new instance
    httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/comments')
    httpRequest.send(); //send to server

    httpRequest.onreadystatechange = function () {
      if(httpRequest.readyState === XMLHttpRequest.DONE){
        if (httpRequest.status === 200) { //if successfull
          console.log('Successfully retrieved data');
        }else {
          console.log('a problem occured');
        }
      }
    }

    var btn = document.getElementById('btn'); // grab button element
    // add a click event
    btn.addEventListener('click', function () {
      var text = JSON.parse(httpRequest.responseText);
      //generate random num
      var randomId = Math.floor(Math.random() * 505);

      var paragraph = document.getElementById('paragraph');

      var currentText = ' " ' + text[randomId].body + ' " ';
        //show in browser
      paragraph.innerHTML = currentText;

    });

  } //getData

}) ();
