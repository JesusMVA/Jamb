import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import {Routes, Route} from "react-router-dom";






function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  );
}

export default App;
