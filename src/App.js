import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ForexDetails from './components/ForexDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ForexDetails/" element={<ForexDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
