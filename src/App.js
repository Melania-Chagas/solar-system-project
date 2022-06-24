import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import MissionCard from './components/MissionCard';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Missions />
        <Title />
        <MissionCard />
      </>
    );
  }
}

export default App;
