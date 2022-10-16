const audioContext = new AudioContext();
audioContext.addEventListener('play', () => {
  console.log('playing');
});

function useAudioContext() {
  return audioContext;
}

export default useAudioContext;
