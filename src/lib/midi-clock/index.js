/* eslint-disable max-len */
const { EventEmitter } = require('events');
// const Ticker = require('./tick');

// var execFile = require('child_process').execFile

module.exports = function midiClock(context, ticker) {
  const clock = new EventEmitter();

  const state = {
    tickLength: 60,

    nextTickAt: 0,
    position: 0,

    playing: false
  };

  // const ticker = Ticker(context);
  const onTick = () => {
    if (state.playing) {
      // console.log(state.playing);
      state.position += 1;
      clock.emit('position', state.position);
    }
  };
  clock.on('stop', () => {
    ticker.removeListener('tick', onTick);
  });
  clock.on('start', () => {
    ticker.on('tick', onTick);
  });
  // console.log(state);
  // var tickProcess = execFile('/usr/local/bin/node', [__dirname + '/tick_process.js'], function(err){
  //  if (err) throw err
  // })
  // tickProcess.stdout.on('data', function(){
  //  if (state.playing){
  //    state.position += 1
  //    clock.emit('position', state.position)
  //  }
  // })

  clock.setTempo = (tempo) => {
    state.tickLength = 60000 / (tempo * 24);
    // tickProcess.stdin.write(state.tickLength + '\n')
    ticker.setInterval(state.tickLength);
    clock.emit('tempo', tempo);
  };

  clock.setPosition = (/* pos */) => {
    state.position -= 1;
  };

  clock.start = () => {
    state.nextTickAt = 0;
    state.position = -1;
    clock.emit('start');
    state.playing = true;
  };

  clock.stop = () => {
    state.playing = false;
    clock.emit('stop');
  };

  return clock;
};
