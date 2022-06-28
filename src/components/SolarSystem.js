import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <section className="titulo-planetas">
          <Title headline="Planetas" />
        </section>
        <section>
          {
            Planets.map((planet) => (<PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />))
          }
        </section>
      </div>
    );
  }
}

export default SolarSystem;
