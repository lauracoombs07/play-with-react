import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}))

export default function InputState() {
    const classes = useStyles()
    // eslint-disable-next-line no-undef
    const [firstName, setFirstName] = React.useState()
    const [lastName, setLastName] = React.useState()
    const [age, setAge] = React.useState()

    const handleFirstNameChange = (e) => {
        const newValue = e.target.value
        setFirstName(newValue)
        console.log('target value', e.target.value)
        console.log('First Name', firstName)
    }
    const handleLastNameChange = (e) => {
        const newValue = e.target.value
        setLastName(newValue)
        console.log('target value', e.target.value)
        console.log('Last Name', lastName)
    }
    const handleAgeChange = (e) => {
        const newValue = e.target.value
        setAge(newValue)
        console.log('target value', e.target.value)
        console.log('Age', age)
    }

    const handleSubmit = (event) => {
        alert(firstName + lastName + age)
        event.preventDefault()
    }

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
                        variant="outlined"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                    <TextField
                        id="last-name"
                        label="Last Name"
                        variant="outlined"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                    <TextField
                        id="age"
                        label="Age"
                        variant="outlined"
                        value={age}
                        onChange={handleAgeChange}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Used State
                    </Button>
                </form>
            </div>
        </div>
    )
}
