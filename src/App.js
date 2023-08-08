import './App.css';
import Pay from './components/Pay';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
        <Route path="/pay" element={<h1>{<Pay/>}</h1>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
