var expect = require('chai').expect;
describe("Fallout Terminal", function () {
  var Terminal;

  beforeEach(function () {
    Terminal = require('./../src/terminal.js');
  });

  it("imports Terminal", function () {
    expect(Terminal).not.to.be.empty;
  });

  it("process an array of words", function () {
    var words = ["Ghost","Globe","Catch","Fender","Blast"];
    expect(Terminal.processOptions(words[0],words,2)).to.be.equal(["Globe","Blast"]);
  });
});
