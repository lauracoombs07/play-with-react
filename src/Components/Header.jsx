import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    header: {
        color: '#34495E',
        fontSize: '30px',
        fontWeight: '800'
    }
}))
export default function Dropdown() {
    const classes = useStyles()
    
    return (
        <div className={classes.header}>
            Data Collection
        </div>
    )
}
