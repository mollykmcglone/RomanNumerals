


    var romanNumerals = function(number) {
      var romanOnes = [];
      for (i = 0; i < number; i ++) {
        if (number >= 5) {
          romanOnes.push("V");
          number = (number % 5) + 1;
        } else if (number === 4) {
          romanOnes.push("IV");
          number = 0;
        } else if (number <= 3) {
          romanOnes.push("I")
        }
      }

      return romanOnes.join("");
    };
