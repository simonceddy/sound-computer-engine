/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import FastEG from 'fastidious-envelope-generator';
import Canvas from '../../components/Canvas';
import { round } from '../../util/maths';

const canvasDim = {
  width: 200,
  height: 120
};

function EnvelopeGenerator({
  audioContext, vca, darkMode, className
}) {
  // osc.start();
  // osc.stop();
  const eg = new FastEG(audioContext, vca.gain);
  console.log(eg);
  const totalTime = eg._attackTime + eg._decayTime + eg._releaseTime;

  /**
   * Render adsr
   * @param {CanvasRenderingContext2D} ctx
   */
  const draw = (ctx) => {
    const sustainXLen = 20;
    console.log(totalTime, (totalTime / canvasDim.width) * 100);
    ctx.strokeStyle = darkMode ? 'rgb(251,146,60)' : 'black';
    ctx.moveTo(0, canvasDim.height);
    // ctx.beginPath();
    // const decayStart = { x: (eg.), y: 0 };
    // ctx.lineTo();
  };

  return (
    <div>
      <div className={`w-auto h-auto border ${className} ${darkMode ? 'border-orange-400' : 'border-black'}`}>
        <Canvas width={canvasDim.width} height={canvasDim.height} draw={draw} />
        <div className="flex flex-row justify-between items-center w-full">
          <span>0s</span>
          <span>{round(totalTime / 2, 2)}s</span>
          <span>{round(totalTime, 2)}s</span>
        </div>
      </div>
    </div>
  );
}

export default EnvelopeGenerator;
