import './App.css';
import SideNavBar from './components/SideNavBar';
import BottomPlayer from "./components/BottomPlayer";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <SideNavBar />
      <BottomPlayer/>
      <Home />
    </div>
  );
}

export default App;
