'use strict';

describe('Service: QueryService', function () {

  // load the service's module
  beforeEach(module('bobApp'));

  // instantiate service
  var QueryService;
  beforeEach(inject(function (_QueryService_) {
    QueryService = _QueryService_;
  }));

  it('should do something', function () {
    expect(!!QueryService).toBe(true);
  });

});
