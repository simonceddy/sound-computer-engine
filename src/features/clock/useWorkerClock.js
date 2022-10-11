const worker = new Worker('sce/clocksWorker.js');
console.log(worker);
worker.onmessage = (m) => console.log(m.data);
worker.postMessage({
  id: 0, type: 'init', tempo: 120, multiplier: 1.5
});
worker.postMessage({
  id: 1, type: 'init', tempo: 120, multiplier: 0.8
});
worker.postMessage({
  type: 'start'
});
setTimeout(() => {
  worker.postMessage({
    type: 'stop'
  });
}, 3000);

function useWorkerClock() {

}

export default useWorkerClock;
