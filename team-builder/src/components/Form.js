import React from 'react'

function Form(props) {
    return (
        <div>
            <form>
                <label>
                    Name: 
                    <input name='name' onChange={props.onInputChange} />
                </label>
                <label>
                    Email: 
                    <input name='email' onChange={props.onInputChange} />
                </label>
                <label>
                    Role: 
                    <input name='role' onChange={props.onInputChange} />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;