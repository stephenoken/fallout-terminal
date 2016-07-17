const _ = require('lodash');

var Terminal = {
  processOptions: function (keyword,passwords,correctCharacters) {
    console.log(keyword[0]);
    return passwords.filter(
      (word) => {
        return true//word.split("").map((letter))
      }
    );
  }
}

module.exports = Terminal;
