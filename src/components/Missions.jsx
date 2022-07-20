import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    const missionsHtml = missions.map((mission) => (<MissionCard
      key={ mission.name }
      name={ mission.name }
      year={ mission.year }
      country={ mission.country }
      destination={ mission.destination }
    />));
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missionsHtml}
      </div>
    );
  }
}

export default Missions;
