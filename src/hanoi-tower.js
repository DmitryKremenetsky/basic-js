const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let turn = 0;
  let second = 0;

  turn = Math.pow(2, disksNumber) - 1;
  second = Math.floor(turn / (turnsSpeed / 3600))

  const tunrAndSpeed = {
  	turns: turn,
    seconds: second
  };

/*   tunrAndSpeed.turns = turn;
  tunrAndSpeed.seconds = second; */
	
  return tunrAndSpeed
}

module.exports = {
  calculateHanoi
};
