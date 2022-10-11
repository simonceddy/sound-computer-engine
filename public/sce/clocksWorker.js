let mainClock;
const clocks = {};
const counters = {}

const ms = 5;

function initMainClock(tempo) {
  const stepln = (60 / (tempo * multiplier)) * 1000;
  mainClock = function clkFn() {
    let counter = 0;
    const step = stepln / ms;
    console.log(step);
    const interval = setInterval(() => {
      // tick
      if (counter >= step) {
        postMessage({ type: 'step' });
        // console.log(`ticked: ${id}`);
        counter = 0;
      } else {
        counter++;
      }
    }, ms);
    return function clkStop() {
      clearInterval(interval);
    }
  }
}

function initClock(id, tempo, multiplier = 1) {
  if (!clocks[id]) {
    counters[id] = 0;
    const stepln = (60 / (tempo * multiplier)) * 1000;
    clocks[id] = function clkFn() {
      let counter = 0;
      const step = stepln / ms;
      console.log(step);
      const interval = setInterval(() => {
        // tick
        if (counter >= step) {
          postMessage({ type: 'step', id });
          // console.log(`ticked: ${id}`);
          counter = 0;
        } else {
          counter++;
        }
      }, ms);
      return function clkStop() {
        clearInterval(interval);
      }
    }
  }
}

const intervals = [];

function startClocks() {
  Object.keys(clocks).forEach((clk) => {
    intervals[clk] = clocks[clk]();
    console.log(intervals[clk]);
  });
}

function stopClocks() {
  Object.keys(clocks).forEach((clk) => {
    if (intervals[clk]) intervals[clk]();
  });
}

onmessage = (e) => {
  if (e.data.type) {
    console.log(e.data);
    switch (e.data.type) {
      case 'init':
        initClock(e.data.id, e.data.tempo, e.data.multiplier || 1);
        break;
      case 'start':
        startClocks();
        break;
      case 'stop':
        stopClocks();
        break;
      case 'reset':
        // reset clock
      default:
        break;
    }
  }
}
