const calculateSquare = require('../samples')
const expect = require('chai').expect
const camo = require('camo');

describe('calculateSquare', function() {
    var database = null;

    before(function(done) {
        camo.connect('mongodb://localhost:27017/app_test').then(function(db) {
            database = db;
            return database.dropDatabase();
        }).then(function() {}).then(done, done);
    });


    it('should return 4 if pass 2', function(done) {
        calculateSquare(2, function(error, result){
            expect(result).to.equal(4);
            done();
        })
    })

    it('should return an error if pass a string', function(done) {
        calculateSquare('string', function(error, result){
            expect(error).to.not.equals(null);
            expect(error.message).to.equals('Argument of type number is expected!');
            done();
        })
    })
})