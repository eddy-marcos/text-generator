(function () {
getData();

function getData() {
  var httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/comments')
  httpRequest.send();

  httpRequest.onreadystatechange = function () {
      if(httpRequest.readyState === XMLHttpRequest.DONE){
          if (httpRequest.status === 200) {
                console.log('Successfully retrieved data');

              //generateComment(JSON.parse(httpRequest.responseText));

          }else {
            console.log('a problem occured');
}
}
  }
  var btn = document.getElementById('btn');

  btn.addEventListener('click', function () {
          var text = JSON.parse(httpRequest.responseText);
          var randomId = Math.floor(Math.random() * 505);
//console.log(text[0].name);
         var paragraph = document.getElementById('paragraph');

            var currentText = text[randomId].body;

paragraph.innerHTML = currentText;

  });



} //getData

      // var btn = document.getElementById('btn');
      // btn.addEventListener('click', generateComment);

//   function generateComment(data){
//     //console.log(typeof(data)); //object
//
//       var container = document.querySelector('.text');
//       var comment = document.createElement('p');
//       var randomId = Math.floor(Math.random() * 505);
//
//           comment.textContent = data[5].id;
//           container.appendChild(comment);
//
// } //generateComment

}) ();
