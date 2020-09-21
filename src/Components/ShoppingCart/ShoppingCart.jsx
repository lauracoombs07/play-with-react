import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MyDivider from '../MyDivider'

const ShoppingCart = () => {
    const [state, setState] = useState({
        dog: false,
        cat: false
    })
    const [list, setList] = useState([])

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.checked })
    }

    const handleAnimals = (e) => {
        const checked = { [e.target.name]: e.target.checked }
        setList({ ...list, list.concat() })
        console.log('list', list)
        console.log('state', state.dog)

    // hook push to array
    }

    const { dog, cat } = state

    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="animals">Animals</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={dog} onChange={handleChange} name="dog" />}
                        label="Dog"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={cat} onChange={handleChange} name="cat" />}
                        label="Cat"
                    />
                </FormGroup>
            </FormControl>
            <MyDivider />

            <Button onClick={handleAnimals}>Add</Button>
            <Button onClick={handleAnimals}>Remove</Button>
            {console.log(list)}
            <div>
                list
                {list}
            </div>
        </div>
                // render list
    )
}

export default ShoppingCart
