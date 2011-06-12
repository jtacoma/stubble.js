describe("stubble (base)", function() {

  it("should exist and be a well-formed module", function() {
    expect(stubble).toBeDefined();
    expect(stubble.version_).toBeDefined();
    expect(stubble.version_.major).toBeDefined();
  });

  it("should be callable", function() {
    stubble({target: {}});
  });

});
