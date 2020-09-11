import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(() => ({
    spacing: {
        margin: '10px'
    }
}))
    
const MyDivider = () => {
    const classes = useStyles()
    return (
        <div className={classes.spacing}>
            <Divider
                variant="middle"
            />
        </div>
    )
}

export default MyDivider
