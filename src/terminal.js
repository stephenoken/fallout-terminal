const _ = require('lodash');

var Terminal = {
  processOptions: function (keyword,passwords,correctCharacters) {
    return _.rest(_.filter(passwords,function (word) {
      var correctCharacterCount = 0;
      _.forEach(word.split(""),function (n) {
        if (_.includes(keyword,n)) {
          correctCharacterCount++;
        }
      });
      if (correctCharacterCount >= correctCharacters) {
        console.log(word);
        return word;
      }
    }));
  }
}

module.exports = Terminal;
