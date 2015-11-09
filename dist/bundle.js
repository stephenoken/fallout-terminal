(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const Terminal = require('./terminal.js');
const $ = require('jquery');

$(function () {
  console.log("Loaded");
  $("#number-of-rows").change(function () {
    createForm($("#number-of-rows").val());
  });
  $("#search").click(function () {
    var words = [];
    $(".options").each(function () {
      words.push($(this).val());
    });
    words = Terminal.processOptions(words[0], words, $("#correct-chars").val());
    console.log(words);
    createForm(words.length, words);
  });

  function createForm(inputNumber, remainingWords) {
    $("#input-form").empty();
    for (var i = 0; i < inputNumber; i++) {
      if (remainingWords === undefined) {
        $("#input-form").append('<div class="input-field col s6"><input placeholder="Password" type="text" class="options" value=""></div>');
      } else {
        $("#input-form").append('<div class="input-field col s6"><input placeholder="Password" type="text" class="options" value="' + remainingWords[i] + '"></div>');
      }
    }
  }
});

},{"./terminal.js":2,"jquery":"jquery"}],2:[function(require,module,exports){
const _ = require('lodash');

var Terminal = {
  processOptions: function (keyword, passwords, correctCharacters) {
    return _.rest(_.filter(passwords, function (word) {
      var correctCharacterCount = 0;
      _.forEach(word.split(""), function (n) {
        if (_.includes(keyword, n)) {
          correctCharacterCount++;
        }
      });
      if (correctCharacterCount >= correctCharacters) {
        console.log(word);
        return word;
      }
    }));
  }
};

module.exports = Terminal;

},{"lodash":"lodash"}]},{},[1])


//# sourceMappingURL=bundle.js.map
