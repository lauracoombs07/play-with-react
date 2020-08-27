import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { chaz, familyMembers } from '../../DataFiles/FamilyMembers'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    select: {
        minWidth: '200px',
    },
    text: {
        paddingLeft: '10px'
    },
}))

const FamilyDropdown = () => {
    const [person, setPerson] = useState()
    const [person2, setPerson2] = useState()
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <FormControl className={classes.select}>
                <InputLabel className={classes.text} value="My Family">My Family</InputLabel>
                <Select
                    id="select1"
                    open={open}
                    value={person}
                    onOpen={() => setOpen(true)}
                    onClose={() => {
                        setOpen(false)
                    }}
                    onChange={(e) => {
                        setPerson(e.target.value)
                        console.log('value', e.target.value)
                    }}
                >
                    {familyMembers.map((i) => (
                        <MenuItem key={i.id} value={i.name}>
                            {i.name}
                        </MenuItem>
                    ))}
                </Select>
                <Select
                    id="select2"
                    open={open2}
                    value={person2}
                    onOpen={() => {
                        setOpen2(true)
                    }}
                    onClose={() => {
                        setOpen2(false)
                    }}
                    onChange={(e) => (
                        setPerson2(e.target.value)
                    )}
                >
                    { person === 'Chastin Egbert'
                        ? chaz.map((m) => (
                            <MenuItem key={m} value={m.name}>
                                {`${m.name} (${m.relation})`}
                            </MenuItem>
                        ))
                        : <MenuItem />}
                </Select>
            </FormControl>
        </div>
    )
}

export default FamilyDropdown
