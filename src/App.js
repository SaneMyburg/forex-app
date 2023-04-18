import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ForexList from './components/Forexlist';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="forexlist" element={<ForexList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
