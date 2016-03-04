$(document).ready(function() {
  $("#translate form").submit(function(event) {
    event.preventDefault();
    var $entry = $( "input" ).val().toLowerCase();
    console.log($entry);
    var Answer = "";

    function print(Answer) {
      var Resultdiv = document.getElementById("result");
      Resultdiv.innerHTML = "<h2>Your Result is:</h2>" +Answer;
    }

    var PigLatin = function(word) {
      var translatedWord = word;
      if (word[0] === "a" || word[0] === "e" || word[0]=== "i" || word[0] === "o" || word[0] === "u") {
        var translatedWord = word;
      } else if (word[0] === "q"){
        var translatedWord = word.slice(2) + word[0] + word[1];
      } else if (word[1] === "q"){
        var translatedWord = word.slice(3) + word[0] +word[1] + word[2];
      } else if (word[1] === "a" || word[1] === "e" || word[1]=== "i" || word[1] === "o" || word[1] === "u") {
        var translatedWord = word.slice(1) + word[0];
      } else if (word[2] === "a" || word[2] === "e" || word[2]=== "i" || word[2] === "o" || word[2] === "u") {
        var translatedWord = word.slice(2) + word[0] + word[1];
      } else if (word[3] === "a" || word[3] === "e" || word[3]=== "i" || word[3] === "o" || word[3] === "u") {
          var translatedWord = word.slice(3) + word[0] + word[1] + word[2];
      }
      return translatedWord + "ay";
    };

    var Answer = (PigLatin($entry));
    print(Answer);

    });
  });
