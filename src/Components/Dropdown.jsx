import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { familyMembers } from './FamilyMembers'

const useStyles = makeStyles(() => ({
    select: {
        minWidth: '150px'
    }
}))
const Dropdown = () => {
    const [person, setPerson] = useState([])
    const [open, setOpen] = useState(false)
    const classes = useStyles()

    const handleChange = (e) => {
        setPerson(e.target.value)
    }
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    
    return (
        <div>
            <FormControl className={classes.select}>
                <InputLabel>My Family</InputLabel>
                <Select

                    open={open}
                    value={person}
                    onOpen={handleOpen}
                    onClose={handleClose}
                    onChange={handleChange}
                >
                    {familyMembers.map((member) => (
                        <MenuItem key={member} value={member.name}>
                            {member.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default Dropdown
