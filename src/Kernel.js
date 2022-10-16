/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import FnButton from './components/Ctrl/FnButton';
import Logo from './components/Logo';
import SCEContainer from './components/SCEContainer';
import Pads from './features/pads';
import Sequencer from './features/sequencer';
import Display from './features/display';
import CtrlsPanel from './features/ctrls/CtrlsPanel';
import CtrlKnob from './components/Ctrl/CtrlKnob';
import MicroSDSlot from './components/MicroSDSlot';
import ClockQuickCtrl from './features/clock/ClockQuickCtrl';
import Bootloader from './features/kernel/Bootloader';
import useSimpleClock from './features/clock/useSimpleClock';
import kernel from './features/kernel';
import { useAudioContext, useWasm } from './hooks';

function Kernel() {
  useAudioContext();
  useSimpleClock();
  // const { isBooted } = useSelector((state) => state.kernel);
  // useEffect(() => {
  //   // console.log(kernel);
  // }, [isBooted]);

  // const { loaded, instance, error } = useWasm('firmware.wasm', { kernel });
  // console.log(error);
  // useEffect(() => {
  //   if (loaded) {
  //     console.log(instance);
  //     console.log(instance.exports.addString('bonus', 'wemby'));
  //   }
  // }, [loaded]);
  // console.log('here');
  if (!window.AudioContext) return (<div>Your browser does not support WebAudio</div>);
  return (
    <Bootloader>
      <div className="w-full p-2 h-full dark:bg-purple-900 bg-blue-200">
        <SCEContainer>
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-around">
              <div className="flex flex-row justify-between items-center w-full">
                <Logo />
                <MicroSDSlot
                  onClick={() => {
                    console.log('load samples!');
                  }}
                />
              </div>
              <ClockQuickCtrl />
              <Pads />
            </div>
            <div className="flex flex-col items-center justify-around pt-10">
              <CtrlKnob />
              <CtrlsPanel kernel={kernel} />
            </div>
            <div className="flex flex-col items-center justify-around">
              <Display />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <FnButton />
            <Sequencer />
          </div>
        </SCEContainer>
      </div>
    </Bootloader>
  );
}

export default Kernel;
