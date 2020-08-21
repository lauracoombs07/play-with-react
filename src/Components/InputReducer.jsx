import React, { useReducer } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    }
}))

export default function InputReducer() {
    const classes = useStyles()
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
        const newValue = e.target.value

        setUserInput({ [name]: newValue })
    }

    const handleSubmit = (e) => {
        console.log(userInput.firstName)
        alert(userInput.firstName)
        e.preventDefault()
    }

    const fullName = `${userInput.firstName} ${userInput.lastName} `
    const ageFinal = userInput.age ? ` is ${userInput.age} years old. ` : ''
    
    return (
        <div>
            <div style={{ margin: '2rem' }}>
                <form
                    className={classes.root}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <TextField
                        id="first-name"
                        label="First Name"
                        name="firstName"
                        variant="outlined"
                        value={userInput.firstName}
                        onChange={handleChange}
                    />
                    <TextField
                        id="last-name"
                        label="Last Name"
                        name="lastName"
                        variant="outlined"
                        value={userInput.lastName}
                        onChange={handleChange}
                    />
                    <TextField
                        id="age"
                        label="Age"
                        name="age"
                        variant="outlined"
                        value={userInput.age}
                        onChange={handleChange}
                    />
                    <Button
                        className={classes.button}
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Used Reducer
                    </Button>
                </form>
            </div>
            <Card>
                {fullName}
                {ageFinal}
            </Card>
        </div>
    )
}
