/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useRef } from 'react';
import CtrlButton from '../../components/Ctrl/CtrlButton';
// import ctrlsList from './ctrlsList';
import './CtrlsPanel.css';
import DownButton from './DownButton';
import EditModeButton from './EditModeButton';
import LeftButton from './LeftButton';
import MixerButton from './MixerButton';
import PadModeButton from './PadModeButton';
import PlayButton from './PlayButton';
import ProjectButton from './ProjectButton';
import ResetSeqButton from './ResetSeqButton';
import RightButton from './RightButton';
import SelectButton from './SelectButton';
import UpButton from './UpButton';

function CtrlsPanel() {
  // const dispatch = useDispatch();
  const ctrlPanelRef = useRef(null);
  const editBtnRef = useRef(null);
  const padBtnRef = useRef(null);
  const selectBtnRef = useRef(null);
  const projectBtnRef = useRef(null);
  const upBtnRef = useRef(null);
  const miscBtnRef = useRef(null);
  const leftBtnRef = useRef(null);
  const downBtnRef = useRef(null);
  const rightBtnRef = useRef(null);
  const playBtnRef = useRef(null);
  const resetBtnRef = useRef(null);

  const Panel = useCallback(() => (
    <div
      id="sce-ctrl-panel-root"
      ref={ctrlPanelRef}
      className="ctrls-panel flex flex-row justify-around items-center flex-wrap"
    >
      <EditModeButton ref={editBtnRef} />
      <PadModeButton ref={padBtnRef} />
      <MixerButton ref={selectBtnRef} />
      <ProjectButton ref={projectBtnRef} />
      <UpButton ref={upBtnRef} />
      <SelectButton
        ref={miscBtnRef}
      />
      <LeftButton ref={leftBtnRef} />
      <DownButton ref={downBtnRef} />
      <RightButton ref={rightBtnRef} />
      <PlayButton ref={playBtnRef} />
      <ResetSeqButton ref={resetBtnRef} />
    </div>
  ), []);

  // TODO keybindings - use library instead of making crazy refs
  // useEffect(() => {
  //   let init = false;
  //   const keyHandlers = {};
  //   if (!init) {
  //     if (editBtnRef.current) {
  //       keyHandlers.edit = null;
  //     }
  //     if (padBtnRef.current) {
  //       //
  //     }
  //     if (selectBtnRef.current) {
  //       //
  //     }
  //     if (projectBtnRef.current) {
  //       //
  //     }
  //     if (upBtnRef.current) {
  //       //
  //       keyHandlers.ArrowUp = () => upBtnRef.current.click();
  //     }
  //     if (miscBtnRef.current) {
  //       //
  //     }
  //     if (leftBtnRef.current) {
  //       keyHandlers.ArrowLeft = () => leftBtnRef.current.click();
  //     }
  //     if (downBtnRef.current) {
  //       keyHandlers.ArrowDown = () => downBtnRef.current.click();
  //     }
  //     if (rightBtnRef.current) {
  //       keyHandlers.ArrowRight = () => rightBtnRef.current.click();
  //     }
  //     if (playBtnRef.current) {
  //       //
  //     }
  //     if (resetBtnRef.current) {
  //       //
  //     }
  //     document.addEventListener('keydown', (e) => {
  //       if (keyHandlers[e.key]) {
  //         keyHandlers[e.key]();
  //       } else {
  //         console.log(e.key, e);
  //       }
  //     });
  //   }
  //   return () => {
  //     init = true;
  //   };
  // });

  return (<Panel />);
}

export default CtrlsPanel;
