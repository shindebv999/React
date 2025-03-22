
import './App.css';
import { Provider } from 'react-redux';
import store from './Store';
import IncremenDecrementCon from './ReduxShow/IncrementDecCounter';

// import Sing_inAxios from './Sing_inAxios/addAxios';



function App() {
  return(
  <>
  {/* <Sing_inAxios /> */}

  <Provider store={store}>
        <IncremenDecrementCon />
      </Provider>

  </>
  );
}

export default App;
