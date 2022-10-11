// TODO Clock Worker
// console.log('clock worker?');

let interval1 = 0;

onmessage = (m) => {
  if (m.data === 'start') {
    interval1 = setInterval(() => {
      postMessage('tick');
    }, 5);
  } else if (interval1 !== 0) {
    clearInterval(interval1);
    interval1 = 0;
  }
};

// postMessage('Nayyyy');
