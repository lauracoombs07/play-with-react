import React, { useState } from 'react'
import Button from '@material-ui/core/Button'

const Upvote = () => {
    const [count, setCount] = useState(0)
    const currentCount = count

    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <Button
                id="Add"
                variant="contained"
                onClick={handleIncrement}
            >
                +
            </Button>
            <div>
                {currentCount}
            </div>
            <Button
                id="Subtract"
                variant="contained"
                onClick={handleDecrement}
            >
                -
            </Button>
        </div>
    )
}

export default Upvote
