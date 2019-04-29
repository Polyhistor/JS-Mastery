var storm = function () {} 
storm.prototype.precip = 'rain'

var WinterStorm = function() {}
WinterStorm.prototype = new storm()
WinterStorm.prototype.precip = 'snow'
var bob = new WinterStorm()

console.log(bob.precip)