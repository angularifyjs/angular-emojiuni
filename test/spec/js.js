describe('angular-emojiuni', function() {
  this.timeout(5000);

  beforeEach(module('angular-emojiuni'));

  it('should filter emojiuni', inject(function($filter) {
    var emojiuni = $filter('emojiuni');
    
    var src = '<div>hello moto 😁</div>';
    var dest = '<div>hello moto <img class="emojiuni" src="/1f601.png" /></div>';

    expect(emojiuni(src)).to.be.equal(dest);
  }));

});
