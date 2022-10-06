// TODO Clock Worker
// console.log('clock worker?');

let interval = 0;

onmessage = (m) => {
  if (m.data === 'start') {
    interval = setInterval(() => {
      postMessage('tick');
    }, 5);
  } else if (interval !== 0) {
    clearInterval(interval);
    interval = 0;
  }
};

// postMessage('Nayyyy');
