import {RouterProvider,} from "react-router-dom";
import  router from './RoutePaths.jsx'
import './App.css';


function App() {
 
  return (
    <div>
    <div className="App">
    <RouterProvider
    router={router}/>
    </div>
    </div>
  );
}

export default App;

