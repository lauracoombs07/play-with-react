import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import { books } from '../../DataFiles/Books'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    divSpacing: {
        minHeight: '13rem'
    }
}))

const BookList = () => {
    const classes = useStyles()

    return (
        <div className={classes.divSpacing}>
            <Autocomplete
                id="book-list"
                style={{ width: 300 }}
                options={books}
                getOptionLabel={(i) => i.title}
                disableClearable={true}
                renderOption={(i) => (
                    <>
                        <span>
                            {i.title}
                            {' '}
                            {i.author}
                        </span>
                    </>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Book List"
                        variant="outlined"
                    />
                )}
            />
        </div>
    )
}

export default BookList

// first Autocomplete, rendering options (outside array), render input 8.29.20
