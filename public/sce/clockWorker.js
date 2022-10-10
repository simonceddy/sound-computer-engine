// TODO Clock Worker
// console.log('clock worker?');

let interval1 = 0;

onmessage = (m) => {
  if (m.data === 'start') {
    interval1 = setInterval(() => {
      postMessage('tick');
    }, 5);
  } else if (interval !== 0) {
    clearInterval(interval);
    interval1 = 0;
  }
};

// postMessage('Nayyyy');
