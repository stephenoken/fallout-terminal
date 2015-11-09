const _ = require('lodash');

var Terminal = {
  processOptions: function (keyword,passwords,correctCharacters) {
    return _.rest(_.filter(passwords,function (word) {
      console.log(word);
      var correctCharacterCount = 0;
      _.forEach(word.split(""),function (n) {
        if (_.includes(keyword,n)) {
          correctCharacterCount++;
        }
      });
      console.log(correctCharacterCount);
      if (correctCharacterCount >= correctCharacters) {
        return word;
      }
    }));
  }
}

module.exports = Terminal;
