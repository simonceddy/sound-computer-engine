import { useSelector } from 'react-redux';

function useKernel() {
  const st = useSelector((state) => state.kernel);
  return {
    state: st
  };
}

export default useKernel;
