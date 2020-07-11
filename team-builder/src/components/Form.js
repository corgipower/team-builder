import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function Form(props) {
    const styledLabel = css({
        padding: '10px',
    });

    const styledInput = css({
        'margin-left': '5px',
        backgroundColor: 'lightgray',
        ':focus': {
            backgroundColor: 'white',
        }
    });

    const styledButton = css({
        backgroundColor: 'lightgray',
        color: 'white',
    });

    const [memberName, setMemberName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [role, setRole] = React.useState('');

    const handleMemberName = event => setMemberName(event.target.value);
    const handleEmail = event => setEmail(event.target.value);
    const handleRole = event => setRole(event.target.value);
    
    const handleSubmit = event => {
        event.preventDefault();
        if(memberName && email && role) {
            props.setTeamMembers([...props.teamMembers, {memberName, email, role}]);
            resetState();
        }
    };

    const resetState = () => {
        setMemberName('');
        setEmail('');
        setRole('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label css={styledLabel}>
                    Name: 
                    <input name='name' value={memberName} onChange={handleMemberName} css={styledInput} />
                </label>
                <label css={styledLabel}>
                    Email:  
                    <input name='email' value={email} onChange={handleEmail} css={styledInput} />
                </label>
                <label css={{styledLabel}, {'padding-right': '20px'}}>
                    Role: 
                    <input name='role' value={role} onChange={handleRole} css={styledInput} />
                </label>
                <button type='submit' css={styledButton}>Submit</button>
            </form>
        </div>
    )
}

export default Form;