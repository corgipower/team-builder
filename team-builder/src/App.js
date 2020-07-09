import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'

function App() {
  const [teamMembers, setTeamMembers] = useState({
    name: '',
    email: '',
    role: '',
  });

  const onInputChange = event => {
    setTeamMembers({
      ...teamMembers,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div className="App">
      <h1>Team</h1>
      <Form onInputChange={onInputChange} />
      <p>{teamMembers.name} {teamMembers.email} {teamMembers.role}</p>
    </div>
  );
}

export default App;
