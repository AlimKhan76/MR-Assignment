import './App.css';
import { AboutScreen } from './screens/AboutScreen';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AboutScreen />} />
        <Route path='/about' element={<AboutScreen />} />
        <Route path='/results' element={<AboutScreen />} />
        <Route path='/partners' element={<AboutScreen />} />
        <Route path='/careers' element={<AboutScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
