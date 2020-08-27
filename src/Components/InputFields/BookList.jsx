import React, { useState } from 'react'
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

export default function BookList() {
    const classes = useStyles()
    const [option, setOption] = useState(books)

    const handleChange = (e, v) => {
        setOption(v)
    }

    return (
        <div className={classes.divSpacing}>
            <Autocomplete
                options={books}
                getOptionLabel={(o) => o.title}
                value={option}
                style={{ width: 300 }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Book List"
                        variant="outlined"
                    />
                )}
                onChange={handleChange}
            />
        </div>
    )
}
