
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import View from './components/View';
import Search from './components/Search';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path="/" exact element={<Add/>}/> 
     <Route path="/view" exact element={<View/>}/>
     <Route path="/search" exact element={<Search/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
