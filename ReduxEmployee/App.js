
import './App.css';



import { Provider } from 'react-redux';
import store from './Store';
// import AddEmp from './CURDoperationEmp/AddEmp';
// import AllRecords from './ReduxShow/AllRecords';
// import Update from './CURDoperationEmp/Update';
// import Updateaxios from './CURDoperationEmp/updateaxios';
import SingleRecord from './ReduxShow/SingleEmpRecord';
// import IncremenDecrementCon from './ReduxShow/IncrementDecCounter';
// import Sing_inAxios from './Sing_inAxios/addAxios';






function App() {
  return(
  <>
{/* <AddEmp /> */}

  {/* <Updateaxios /> */}
  {/* <Update /> */}
  {/* <Sing_inAxios /> */}
  <Provider store={store}> 
        {/* <IncremenDecrementCon /> */}
        {/* <AllRecords /> */}
        <SingleRecord />
      </Provider> 

  </>
  );
}

export default App;
