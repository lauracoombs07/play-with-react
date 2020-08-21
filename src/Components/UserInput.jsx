import React, { useReducer } from 'react'
import { TextField } from '@material-ui/core'
import Header from './Header'

const UserInput = () => {
    // Declare new STATE VARIABLE
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            firstName: '',
            lastName: '',
            age: '',
        },
    )
    const handleChange = (e) => {
        const { name } = e.target
        const nameValue = e.target.value
        setUserInput({ [name]: nameValue })
        console.log('new input', name)
        console.log('value', nameValue)
        console.log('userInput', userInput)
    }

    return (
        <div>
            <Header firstName={userInput.firstName} />
            <form>
                <TextField
                    id="field-one"
                    label="First Name"
                    variant-="outlined"
                    name="firstName"
                    value={userInput.firstName}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default UserInput

// function component there is no this nor is there this.state
// state preserves some values between function calls
// Normally, variables “disappear” when the function exits but state variables are preserved by React.
