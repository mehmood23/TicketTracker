import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Imported BrowserRouter as Router
import './App.css';
import Homepage from './components/Homepage';
import TicketTracker from './components/TicketTracker';
import Tasks from './components/Tasks';

function App() {
  return (
    <Router>
      <Routes>
        {/* Added path prop to specify the route */}
        <Route path="/" element={<Homepage />} />
        <Route path='/TicketTracker' element={<TicketTracker />} />
        <Route path='/Tasks' element={<Tasks />} />
      </Routes>
    </Router>
  );
}

export default App;
