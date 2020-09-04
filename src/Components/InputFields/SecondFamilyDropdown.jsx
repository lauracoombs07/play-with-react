import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/styles'
import { familyMembers, secondaryMembers } from '../../DataFiles/FamilyMembers'

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex'
    },
    divs: {
        width: '300px',
        items: '6'
    }
}))

const SecondFamilyDropdown = () => {
    const [person, setPerson] = useState(
        {
            id: '',
            name: '',
            relation: ''
        }
    )
    // useState, initial state object
    const [person2, setPerson2] = useState({})
    const classes = useStyles()

    const findSecond = () => {
        const member = secondaryMembers[person.id]
        const tempMember = member?.map((i) => (
            <MenuItem key={i.id} value={i.name}>
                {i.name}
            </MenuItem>
        ))
        return tempMember ?? <MenuItem />
    }
    // member?.map

    return (
        <div className={classes.container}>
            <div className={classes.divs} />
            <FormControl className={classes.divs}>
                <InputLabel>First Generation</InputLabel>
                <Select
                    labelId="select-1"
                    className={classes.divs}
                    value={person ? person.name : ''}
                    onChange={(e) => {
                        e.preventDefault()
                        const member = familyMembers?.filter((second) => e.target.value === second.name)
                        setPerson({ ...person, ...member[0] })
                        setPerson2('')
                    }}
                >
                    {familyMembers?.map((i) => (
                        <MenuItem key={i.id} value={i.name}>
                            {i.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <div className={classes.divs} />
            <FormControl className={classes.divs}>
                <InputLabel>Second Generation</InputLabel>
                <Select
                    labelId="select-2"
                    className={classes.divs}
                    value={person2 ? person2.name : ''}
                    onChange={(e) => {
                        e.preventDefault()
                        setPerson2(secondaryMembers[e.target.value])
                    }}
                >
                    { person ? findSecond() : <MenuItem />}
                </Select>
            </FormControl>
            <div className={classes.divs} />
        </div>
    )
}

export default SecondFamilyDropdown

// useState, data structures, form control, maps, for loop, member?.map, ??
// second select dependent on first select outcome
// #Chad
