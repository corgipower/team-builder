import React from 'react'

function Form(props) {
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
                <label>
                    Name: 
                    <input name='name' value={memberName} onChange={handleMemberName} />
                </label>
                <label>
                    Email: 
                    <input name='email' value={email} onChange={handleEmail} />
                </label>
                <label>
                    Role: 
                    <input name='role' value={role} onChange={handleRole} />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form;