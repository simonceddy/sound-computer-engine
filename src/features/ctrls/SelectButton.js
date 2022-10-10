import { forwardRef } from 'react';
// import { useDispatch } from 'react-redux';
import CtrlButton from '../../components/Ctrl/CtrlButton';
import useSelectButton from '../../hooks/useSelectButton';

const SelectButton = forwardRef((_props, ref) => {
  // const dispatch = useDispatch();
  const handler = useSelectButton();

  return (
    <CtrlButton
      ref={ref}
      onKeyDown={(e) => {
        console.log(e.target);
      }}
      label="Select"
      fnLabel=""
      key="ctrl-button-up"
      className="bg-slate-400 active:bg-cyan-400"
      onClick={() => {
        handler({});
      }}
    >
      {}
    </CtrlButton>
  );
});

export default SelectButton;
