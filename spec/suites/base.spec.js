describe("stubble", function() {

  it("should be callable", function() {
    stubble({});
  });

  it("should support chaining", function() {
    var target = {};
    expect(stubble({target: target})).toBe(target);
  });

  it("should use 'this' as default target", function() {
    var target = {stubble: stubble};
    expect(target.stubble()).toBe(target);
  });

  it("should stubble through lookup", function() {
    expect(stubble({
      target: {month: 1},
      source: {
        month_name: {1: 'January', 2: 'February'},
      },
    }).month_name).toEqual('January');
  });

  it("should stubble with localization", function() {
    expect(stubble({
      target: {month: 1},
      source: {
        month_name_en: {1: 'January', 2: 'February'},
      },
      culture: 'en',
    }).month_name).toEqual('January');
  });

  it("should localize to provided default", function() {
    expect(stubble({
      target: {month: 1},
      source: {
        month_name: {1: 'January', 2: 'February'},
      },
      culture: 'en',
    }).month_name).toEqual('January');
  });

  it("should localize to nearest match", function() {
    expect(stubble({
      target: {month: 1},
      source: {
        month_name_en: {1: 'January', 2: 'February'},
      },
      culture: 'en-CA',
    }).month_name).toEqual('January');
  });

});
