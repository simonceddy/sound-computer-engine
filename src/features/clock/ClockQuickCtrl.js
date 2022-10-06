import { useSelector } from 'react-redux';
import './ClockQuickCtrl.css';
import { useEffect, useRef } from 'react';
import RotaryKnob from '../../components/Ctrl/RotaryKnob';

function ClockQuickCtrl() {
  const { tempo } = useSelector((state) => state.project);
  const { booted } = useSelector((state) => state.kernel);

  const tempoCtrlRef = useRef();

  useEffect(() => {
    let init = false;
    if (!init && tempoCtrlRef.current) {
      tempoCtrlRef.current.addEventListener('wheel', (e) => {
        console.log(e);
      });
    }
    return () => {
      init = true;
    };
  }, []);

  return (
    <div className="clock-quick-ctrl-container flex flex-row justify-around items-center">
      <div className="bg-black font-digi clock-quick-ctrl-bpm text-red-400 italic text-3xl">
        {booted ? tempo : ''}
      </div>
      {}
      <RotaryKnob ref={tempoCtrlRef} />
    </div>
  );
}

export default ClockQuickCtrl;
