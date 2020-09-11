import React, { useRef, useState } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import { Autocomplete } from '@material-ui/lab'
import TextField from '@material-ui/core/TextField'
import { books } from '../../DataFiles/Books'

const ArrayPractice = () => {
    const [open, setOpen] = useState(null)
    const [open2, setOpen2] = useState(null)
    const [value, setValue] = useState(books[0])
    const [inputValue, setInputValue] = useState('')
    const anchorRef = useRef(null)

    const handleToggle = (e) => {
        setOpen((prevOpen) => !prevOpen)
        e.stopPropagation()
    }
    const handleToggle2 = (e) => {
        setOpen2((prevOpen) => !prevOpen)
        e.stopPropagation()
    }
    const handleClose = (e) => {
        if (anchorRef.current && anchorRef.current.contains(e.target)) {
            return
        }
        setOpen(false)
    }

    const bryson = books.filter((book) => book.author === 'Bill Bryson')
    const brysonABC = bryson.sort((a, b) => {
        const nameA = a.title.toUpperCase()
        const nameB = b.title.toUpperCase()
        if (nameA < nameB) {
            return -1
        }
        if (nameA > nameB) {
            return 1
        }
        return 0
    })

    return (
        <div>
            <div>
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'book-menu' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    variant="outlined"
                >
                    All Books
                </Button>
                <Menu
                    id="book-menu"
                    anchorEl={anchorRef.current}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                >
                    {books.map((b) => (
                        <MenuItem>
                            {b.title}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
            <div>
                <Button
                    ref={anchorRef}
                    aria-controls="filtered-book-menu"
                    aria-haspopup="true"
                    onClick={handleToggle2}
                    variant="outlined"
                >
                    Bill Bryson
                </Button>
                <Menu
                    id={open2 ? 'filtered-book-menu' : undefined}
                    anchorEl={anchorRef.current}
                    keepMounted
                    open={open2}
                    onClose={(e) => {
                        setOpen2(false)
                        e.stopPropagation()
                    }}
                >
                    {brysonABC.map((b) => (
                        <MenuItem>
                            {b.title}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
            <div>
                <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
                <div>{`inputValue: '${inputValue}'`}</div>
                <br />
                <Autocomplete
                    id="search"
                    getOptionLabel={(o) => o.title}
                    style={{ width: 300 }}
                    options={books}
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue)
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue)
                    }}
                    variant="outlined"
                    renderInput={(params) => <TextField {...params} label="Search Books" variant="outlined" />}
                />

                <Menu
                    id={open2 ? 'filtered-book-menu' : undefined}
                    anchorEl={anchorRef.current}
                    keepMounted
                    open={open2}
                    onClose={() => setOpen2(false)}
                >
                    {brysonABC.map((b) => (
                        <MenuItem>
                            {b.title}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        </div>
    )
}
// value is giving me an object, object. Why?
export default ArrayPractice
