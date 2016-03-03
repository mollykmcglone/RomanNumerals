$(document).ready(function() {
  $("#translate form").submit(function(event) {

    var entry = $( "input" ).val();
    console.log(entry);

    var PigLatin = function(word) {
      if (word[0] === "a" || word[0] === "e" || word[0]=== "i" || word[0] === "o" || word[0] === "u") {
        return word + "ay";
      }
      // } else {
      //   var translatedWord = word.slice(1) + word(0) + "ay";
      // }
      // return translatedWord + "ay";
    };

    PigLatin(entry);

    event.preventDefault();
    });
  });
