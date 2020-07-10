import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div className="App">
      <h1>Team</h1>
      <Form teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
      {teamMembers.map((member, i) => 
      <p key={i}>{member.memberName} {member.email} {member.role}</p>)}
    </div>
  );
}

export default App;
