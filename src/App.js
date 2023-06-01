import './App.css';
// import Timer from './components/Timer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Settings from './pages/Settings';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
