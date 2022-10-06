import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadMetadata } from '../../util/storage';
import { initDisplay } from '../display/displaySlice';
import { setBooted } from './kernelSlice';

function getDarkMode() {
  return loadMetadata()
    .catch(console.error);
}

function Bootloader({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    let init = false;
    if (!init) {
      getDarkMode()
        .then((data) => {
          if (data) dispatch(initDisplay(data));
        })
        .then(() => {
          setTimeout(() => {
            dispatch(setBooted());
          }, 2000);
        });
    }
    return () => {
      init = true;
    };
  }, []);
  return (
    <div className="w-full h-full">
      {children}
    </div>
  );
}

export default Bootloader;
