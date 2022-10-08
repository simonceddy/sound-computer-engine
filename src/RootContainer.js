import { Provider } from 'react-redux';
import store from './app/store';
import Kernel from './Kernel';

function RootContainer() {
  return (
    <Provider store={store}>
      <Kernel />
    </Provider>
  );
}

export default RootContainer;
