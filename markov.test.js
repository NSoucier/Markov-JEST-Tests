const { MarkovMachine } = require("./markov");

describe('MarkovMachine', function () {
    test('testing makeChains()', function () {
        let mm = new MarkovMachine("a b c d" );
        chain = {'a':['b'], 'b':['c'], 'c':['d'], 'd':[null]};
        expect(mm.chain).toEqual(chain)
    })

    test('testing makeText() ends with last word', function () {
        let mm = new MarkovMachine("a b c d" );
        let story = mm.makeText(10);        
        expect(story.slice(-1)).toEqual('d')        
    });

    test('testing makeText() limits length', function () {
    let mm = new MarkovMachine("a b c d" );
    let story = mm.makeText(1);   
    expect(story).toHaveLength(1)        
    });
     
});