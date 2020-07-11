import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const styledParagraph = css({
  display: 'flex',
  justifyContent: 'space-around',
  ':nth-child(even)': {
    backgroundColor: 'cyan',
  }
});

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div className="App">
      <h1>Team</h1>
      <Form teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
      {teamMembers.map((member, i) => 
      <p key={i} css={styledParagraph}>
        <span>{member.memberName}   </span>
        <span>{member.email}   </span>
        <span>{member.role}   </span>
      </p>)}
    </div>
  );
}

export default App;
