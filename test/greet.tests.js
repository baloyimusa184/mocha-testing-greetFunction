//console.log(" in greet.tests.js ")

console.log(greetName("Musa"));

describe('Test greet function:' , function(){
    it('should return the name put on parameter' , function(){
        assert.equal("Hello Musa",greetName("Musa"));

        assert.deepEqual([2,2],[2,2]);
    });

});
describe('Test greet function:' , function(){
    it('should return the name put on parameter' , function(){
        assert.equal("Hello Me",greetName("Me"));

        assert.deepEqual([2,2],[2,2]);
    });

});