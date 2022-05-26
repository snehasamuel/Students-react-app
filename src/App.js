import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import View from './components/View';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path="/" exact element={<Add/>}/> 
     <Route path="/view" exact element={<View/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
