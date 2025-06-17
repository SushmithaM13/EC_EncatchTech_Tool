import './App.css';
import Navbar from './components/navbar';
import RoutingAll from './routes/RoutingAll';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <RoutingAll />
    </div>
  );
}

export default App;
