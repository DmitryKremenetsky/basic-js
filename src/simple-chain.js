const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push('( ' + value + ' )');
    return this
  },
  removeLink(position) {
    const el = position - 1; 
    if(this.arr[el] === undefined) {
      this.arr = [];
      throw new Error(`You can't remove incorrect link!`)
    }

    this.arr.splice(el, 1)
    return this
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const endChain = this.arr.join('~~')
    this.arr = []
    return endChain
  }
};

module.exports = {
  chainMaker
};
