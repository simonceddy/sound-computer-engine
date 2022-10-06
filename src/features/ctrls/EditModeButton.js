import { useDispatch, useSelector } from 'react-redux';
import CtrlButton from '../../components/Ctrl/CtrlButton';
import { modes, setMode } from '../kernel/kernelSlice';

function EditModeButton() {
  const { mode } = useSelector((state) => state.kernel);
  const dispatch = useDispatch();
  return (
    <CtrlButton
      label="Edit"
      className={`active:bg-cyan-400 ${mode === modes.EDIT ? 'bg-orange-400' : 'bg-slate-400'}`}
      onClick={() => {
        if (mode !== modes.EDIT) dispatch(setMode(modes.EDIT));
      }}
    />
  );
}

export default EditModeButton;
