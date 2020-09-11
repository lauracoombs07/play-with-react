import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import MyDivider from '../MyDivider'

const list = [
    { id: 0, name: 'Chelsea Egbert', relation: 'Wife' },
    { id: 1, name: 'William Egbert', relation: 'Son' },
    { id: 2, name: 'Ayda Egbert', relation: 'Daughter' },
]
const FamilyAutocomplete = () => {
    const loopArray = () => {
        for (let i = 0; i < list.length; i++) {
            console.log(i)
            console.log(list[i].name)
        }
    }
    return (
        <div>
            {loopArray()}
            <Autocomplete
                options={list}
                style={{ width: 300 }}
                getOptionLabel={(i) => i.name}
                renderOption={(i) => i.name}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Chaz"
                        variant="outlined"
                    />
                )}
            />
            <MyDivider />
        </div>
    )
}
export default FamilyAutocomplete
