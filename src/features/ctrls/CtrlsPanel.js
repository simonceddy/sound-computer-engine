import { useDispatch } from 'react-redux';
import CtrlButton from '../../components/Ctrl/CtrlButton';
import ctrlsList from './ctrlsList';
import './CtrlsPanel.css';

function CtrlsPanel() {
  const dispatch = useDispatch();
  return (
    <div className="ctrls-panel flex flex-row justify-around items-center flex-wrap">
      {ctrlsList.map(({
        id, action, fnAction, Component, label, fnLabel, content
      }, idx) => (
        Component ? (
          <Component key={`ctrl-button-${id || idx}`} />
        ) : (
          <CtrlButton
            label={label}
            fnLabel={fnLabel}
            key={`ctrl-button-${id || idx}`}
            className="bg-slate-400 active:bg-cyan-400"
            onClick={(e) => {
            // console.log(e);
              if (e.shiftKey && fnAction) {
                fnAction(dispatch);
              } else if (action) action(dispatch);
            }}
          >
            {content}
          </CtrlButton>
        )))}
    </div>
  );
}

export default CtrlsPanel;
