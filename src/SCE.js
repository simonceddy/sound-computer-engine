import { Provider } from 'react-redux';
import store from './app/store';
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

function SCE() {
  return (
    <Provider store={store}>
      <Bootloader>
        <div className="w-full p-2 h-full dark:bg-purple-900 bg-blue-200">
          <SCEContainer>
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-col items-center justify-around">
                <div className="flex flex-row justify-between items-center w-full">
                  <Logo />
                  <MicroSDSlot />
                </div>
                <ClockQuickCtrl />
                <Pads />
              </div>
              <div className="flex flex-col items-center justify-around pt-10">
                <CtrlKnob />
                <CtrlsPanel />
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
    </Provider>
  );
}

export default SCE;
