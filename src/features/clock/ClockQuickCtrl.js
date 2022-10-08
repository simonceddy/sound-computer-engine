/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import './ClockQuickCtrl.css';
import { /* useEffect,  */useRef } from 'react';
import RotaryKnob from '../../components/Ctrl/RotaryKnob';
import { setProjectTempo } from '../project/projectSlice';

function ClockQuickCtrl() {
  const { tempo } = useSelector((state) => state.project);
  const { booted } = useSelector((state) => state.kernel);
  const dispatch = useDispatch();

  const tempoCtrlRef = useRef();

  // useEffect(() => {
  //   let init = false;
  //   if (!init && tempoCtrlRef.current) {
  //     tempoCtrlRef.current.addEventListener('wheel', (e) => {
  //       console.log(e);
  //     });
  //   }
  //   return () => {
  //     init = true;
  //   };
  // }, []);

  return (
    <div className="clock-quick-ctrl-container flex flex-row justify-around items-center">
      <div className="bg-black font-digi clock-quick-ctrl-bpm text-red-400 italic text-3xl">
        {booted ? tempo.toLocaleString(
          'en-US',
          {
            minimumIntegerDigits: 2,
            maximumFractionDigits: 1,
            minimumFractionDigits: 1,
            useGrouping: false
          }
        ) : ''}
      </div>
      {}
      <RotaryKnob
        onDoubleClick={() => dispatch(setProjectTempo(120))}
        shiftStep={4}
        ref={tempoCtrlRef}
        maxValue={999}
        minValue={30}
        step={10}
        onChange={(direction, _deg, e) => {
          const plus = e.shiftKey ? 0.1 : 1;
          let newTempo = tempo + (direction === 'up' ? plus : -plus);
          if (newTempo > 999) {
            newTempo = 999;
          } else if (newTempo < 30) {
            newTempo = 30;
          }
          dispatch(setProjectTempo(newTempo));
          // console.log(v);
        }}
        value={tempo}
      />
    </div>
  );
}

export default ClockQuickCtrl;
