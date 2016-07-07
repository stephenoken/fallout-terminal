var chai = require('chai');
var expect = chai.expect;
describe("Fallout Terminal", function () {
  var Terminal;

  beforeEach(function () {
    Terminal = require('./../src/terminal.js');
  });

  it("imports Terminal", function () {
    expect(Terminal).not.to.be.empty;
  });

  it("process an array of words", function () {
    var words = ["Ghost","Globe","Catch","Fists","Blast"];
    var newOptions = Terminal.processOptions(words[0],words,2);
    console.log(newOptions);
    expect(newOptions.length).to.be.equal(2);
    newOptions = Terminal.processOptions(newOptions[0],newOptions,1);
    expect(newOptions.length).to.be.equal(1);
  });
});
