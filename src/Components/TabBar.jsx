import React, { useState } from 'react'
import { Toolbar } from '@material-ui/core'
import MyTabs from './MyTabs'

const AppBar = () => {
    const [index, setIndex] = useState()
    const newy = setIndex(console.log(index))
    return (
        <AppBar>
            <Toolbar>
                <MyTabs />
                {newy}
            </Toolbar>
        </AppBar>
    )
}

export default AppBar
