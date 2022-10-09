import { useDispatch } from 'react-redux';
import CtrlButton from '../../components/Ctrl/CtrlButton';
import ctrlsList from './ctrlsList';
import './CtrlsPanel.css';

function CtrlsPanel({ kernel }) {
  // console.log(kernel);
  const dispatch = useDispatch();
  return (
    <div className="ctrls-panel flex flex-row justify-around items-center flex-wrap">
      {ctrlsList.map(({
        id, action, fnAction, Component, label, fnLabel, content
      }, idx) => (
        Component ? (
          <Component key={`ctrl-button-${id || idx}`} kernel={kernel} />
        ) : (
          <CtrlButton
            label={label}
            fnLabel={fnLabel}
            key={`ctrl-button-${id || idx}`}
            className="bg-slate-400 active:bg-cyan-400"
            onClick={(e) => {
            // console.log(e);
              if (e.shiftKey && fnAction) {
                fnAction(dispatch, kernel);
              } else if (action) action(dispatch, kernel);
            }}
          >
            {content}
          </CtrlButton>
        )))}
    </div>
  );
}

export default CtrlsPanel;
