/* eslint-disable radix */
const { EventEmitter } = require('events');

module.exports = function getTicker(audioContext) {
  const ticker = new EventEmitter();

  let pos = 0;
  let length = 25;
  // let timeout = 0;

  function time() {
    if (audioContext) {
      return audioContext.currentTime * 1000;
    } if (global.process && process.hrtime) {
      const t = process.hrtime();
      return (t[0] + (t[1] / 10 ** 9)) * 1000;
    }
    return Date.now();
  }

  function tick() {
    if (!pos) {
      pos = time();
    }
    pos += length;
    const diff = pos - time();
    ticker.emit('tick');
    setTimeout(tick, diff);
  }

  ticker.setInterval = (tempo) => {
    length = parseInt(tempo) || 25;
  };

  tick();

  return ticker;
};
