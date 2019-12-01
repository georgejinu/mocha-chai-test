const calculateSquare = require('../samples-promise')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const expect = chai.expect;

describe('calculate-Square-Promise', function() {
    it('should resolve with number 4 if passed number 2', function(done) {
        expect(calculateSquare(2)).to.eventually.be.equal(4).notify(done);
    })
    
    it('should become fullfilled when passed number 2', function() {
        return expect(calculateSquare(2)).to.be.fulfilled;
    })

    it('should become rejected when pass a string instead of number', function() {
        return expect(calculateSquare('string')).to.be.rejected;
    })
})
