import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';


function App() {
  return (
    <div className="App">
      <h1>Kaiburr Task 3</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
