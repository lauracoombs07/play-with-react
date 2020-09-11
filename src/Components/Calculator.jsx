import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'
import MyDivider from './MyDivider'

const useStyles = makeStyles(() => ({
    spacing: {
        margin: '10px'
    }
}))

const Calculator = () => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const [total, setTotal] = useState('')

    const classes = useStyles()

    const currentCount = count
    const newCount = count2

    const addIt = () => currentCount + newCount
    const subtractIt = () => currentCount - newCount
    const multiplyIt = () => currentCount * newCount
    const divideIt = () => currentCount / newCount

    return (
        <div>
            <div className={classes.spacing}>
                <Button
                    id="subtract-five"
                    size="small"
                    variant="outlined"
                    onClick={(event) => {
                        setCount(count - 5)
                        event.stopPropagation()
                    }}
                >
                    -5
                </Button>
                {' '}
                <Button
                    id="subtract"
                    size="small"
                    variant="outlined"
                    onClick={(event) => {
                        setCount(count - 1)
                        event.stopPropagation()
                    }}
                >
                    -1
                </Button>
                <Button
                    id="count"
                    size="small"
                >
                    {currentCount}
                </Button>
                <Button
                    id="add"
                    size="small"
                    variant="outlined"
                    onClick={(event) => {
                        setCount(count + 1)
                        event.stopPropagation()
                    }}
                >
                    +1
                </Button>
                {' '}
                <Button
                    id="add-five"
                    size="small"
                    variant="outlined"
                    onClick={(event) => {
                        setCount(count + 5)
                        event.stopPropagation()
                    }}
                >
                    +5
                </Button>
            </div>
            <div>
                <Button
                    id="subtract2-five"
                    size="small"
                    variant="outlined"
                    onClick={(event) => {
                        setCount2(count2 - 5)
                        event.stopPropagation()
                    }}
                >
                    -5
                </Button>
                {' '}
                <Button
                    id="subtract2"
                    size="small"
                    variant="outlined"
                    onClick={(event) => {
                        setCount2(count2 - 1)
                        event.stopPropagation()
                    }}
                >
                    -1
                </Button>
                <Button
                    id="count-2"
                    size="small"
                >
                    {newCount}
                </Button>
                <Button
                    id="add2"
                    size="small"
                    variant="outlined"
                    onClick={(event) => {
                        setCount2(count2 + 1)
                        event.stopPropagation()
                    }}
                >
                    +1
                </Button>
                {' '}
                <Button
                    id="add2-five"
                    size="small"
                    variant="outlined"
                    onClick={(event) => {
                        setCount2(count2 + 5)
                        event.stopPropagation()
                    }}
                >
                    +5
                </Button>
            </div>
            <MyDivider />
            <div>
                <Button
                    id="total-add"
                    size="small"
                    variant="outlined"
                    onClick={(event) => {
                        setTotal(addIt())
                        event.stopPropagation()
                    }}
                >
                    +
                </Button>
                {' '}
                <Button
                    id="total-subtract"
                    size="small"
                    variant="outlined"
                    onClick={(event) => {
                        setTotal(subtractIt())
                        event.stopPropagation()
                    }}
                >
                    -
                </Button>
                {' '}
                <Button
                    id="total-multiply"
                    size="small"
                    variant="outlined"
                    onClick={(event) => {
                        setTotal(multiplyIt())
                        event.stopPropagation()
                    }}

                >
                    x
                </Button>
                {' '}
                <Button
                    id="total-divide"
                    size="small"
                    variant="outlined"
                    onClick={(event) => {
                        setTotal(divideIt())
                        event.stopPropagation()
                    }}
                >
                    /
                </Button>
            </div>
            { total }
        </div>
    )
}

export default Calculator
