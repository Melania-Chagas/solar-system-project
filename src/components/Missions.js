import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <section className="titulo-missoes">
          <Title headline="Missões" />
        </section>
        <section>
          <div className="container-missions">
            {
              missions.map((mission) => (<MissionCard
                key={ mission.name }
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />))
            }
          </div>
        </section>
      </div>
    );
  }
}

export default Missions;
