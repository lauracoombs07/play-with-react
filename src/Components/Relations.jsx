import React, { useState } from 'react'
import { FormControl } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import { familyMembers } from '../DataFiles/FamilyMembers'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 245,
        maxHeight: 150,
        margin: 'auto'
    }
}))
const Relations = () => {
    const [name, setName] = useState()
    const [name2, setName2] = useState()

    const classes = useStyles()

    return (
        <span>
            <FormControl>
                <InputLabel>Name One</InputLabel>
                <Select
                    labelId="name-1"
                    value={name}
                    style={{ width: '300px' }}
                    onChange={(e) => {
                        e.preventDefault()
                        setName(name)
                    }}
                >
                    {familyMembers?.map((i) => (
                        <MenuItem key={i.id} value={i.name}>
                            {i.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Card className={classes.root}>
                <CardHeader>Relation</CardHeader>
                <CardContent>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                    >
                        Relation
                    </Typography>
                </CardContent>
            </Card>
            <FormControl>
                <InputLabel>Name Two</InputLabel>
                <Select
                    labelId="name-2"
                    value={name2}
                    style={{ width: '300px' }}
                    onChange={(e) => {
                        e.preventDefault()
                        setName2(name2)
                    }}
                >
                    {familyMembers?.map((r) => (
                        <MenuItem key={r.id} value={r.name}>
                            {r.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </span>
    )
}

export default Relations
