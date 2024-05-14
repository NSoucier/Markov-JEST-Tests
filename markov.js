/** Textual markov chain generator */

class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.chain = this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chain = {};
    let i = 0;
    for (const word of this.words) {
      if (chain[word]) {
        if (!(this.words[i+1])) {
          chain[word] = [...chain[word], null];
        } else {
          chain[word] = [...chain[word], this.words[i+1]]
        }
      } else {
        if (!(this.words[i+1])) {
          chain[word] = [null];
        } else {
          chain[word] = [this.words[i+1]];
        }
      }
      i++;
    }
    return chain;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let word = this.words[Math.floor(Math.random() * this.words.length)]; // picks first random word to start 
    let text = `${word}`;
    let next;

    while (numWords > 1) {
      next = this.chain[word][Math.floor(Math.random() * this.chain[word].length)]; // selectst next random word to follow 
      if (next === null) {
        break
      }
      text = text + ' ' + next;
      word = next;
      numWords--;
    }
    console.log(text);
    return text;
  }
}


// let mm = new MarkovMachine("I do not like them In a house. I do not like them With a mouse. I do not like them Here or there. I do not like them Anywhere. I do not like green eggs and ham. I do not like them, Sam-I-am." );
// mm.makeText(50); 

module.exports = {
  MarkovMachine,
};