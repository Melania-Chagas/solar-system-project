import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetImage, planetName } = this.props;
    return (
      <div data-testid="planet-card" className="planet-card">
        <div className={ planetName }>
          <img
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
            id={ planetName }
            width="300px"
          />
          <p className="planet-x" data-testid="planet-name">{ planetName }</p>
        </div>
      </div>
    );
  }
}
PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};
export default PlanetCard;
