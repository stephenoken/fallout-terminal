const Terminal = require('./terminal.js');
const $ = require('jquery');

$(function () {
  console.log("Loaded");
  $("#number-of-rows").change(function () {
    createForm($("#number-of-rows").val());
  });
  $("#search").click(function () {
    var words = [];
    $(".options").each(function() {
      words.push($(this).val());
    });
    words = Terminal.processOptions(words[0],words,$("#correct-chars").val());
    console.log(words);
    createForm(words.length,words);
  });


  function createForm(inputNumber,remainingWords) {
    $("#input-form").empty()
    for (var i = 0; i < inputNumber; i++) {
      if (remainingWords === undefined) {
        $("#input-form").append(
          '<div class="input-field col s6"><input placeholder="Password" type="text" class="options" value=""></div>'
        );
      }else {
        $("#input-form").append(
          '<div class="input-field col s6"><input placeholder="Password" type="text" class="options" value="'+ remainingWords[i] +'"></div>'
        );
      }
    }
  }
});
