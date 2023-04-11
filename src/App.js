import { Routes, Route } from 'react-router';
import Header from './components/header/Header';
import Mission from './components/missions/Missions';
import MyProfile from './components/profile/MyProfile';
import Rockets from './components/rockets/Rockets';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="missions" element={<Mission />} />
        <Route path="myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
