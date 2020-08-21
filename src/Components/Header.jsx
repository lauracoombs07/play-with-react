import React from 'react'
import { makeStyles } from '@material-ui/styles'
import * as PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
    header: {
        color: '#34495E',
        fontSize: '30px',
        fontWeight: '800'
    }
}))

export function Header(props) {
    const classes = useStyles()
    const { firstName } = props
    console.log('name', firstName)
    return (
        <div className={classes.header}>
            Data Collection from
            {' '}
            { firstName }
        </div>
    )
}

Header.propTypes = {
    firstName: PropTypes.string.isRequired
}
export default Header
