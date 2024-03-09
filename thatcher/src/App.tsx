import React from 'react';
import './App.css';
import CollegeBasketballTeams from './CollegeBasketballTeams.json';

interface BasketballTeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return (
    <div>
      <h1>College Basketball Teams</h1>
      <br />
    </div>
  );
}

class BasketballTeam extends React.Component<BasketballTeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h2>Name: {oneTeam.school}</h2>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>
          Location: {oneTeam.city}, {oneTeam.state}
        </h3>
        <p>_______________________________________</p>
        <br />
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {CollegeBasketballTeams.teams.map((oneTeam) => (
        <BasketballTeam {...oneTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
