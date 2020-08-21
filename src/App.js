import React from 'react'
import './App.css'
import InputState from './Components/InputState'
import Header from './Components/Header'
import InputReducer from './Components/InputReducer'
import UserInput from './Components/UserInput'
import Upvote from './Components/Upvote'
import Dropdown from './Components/Dropdown'

function App() {
    return (
        <div className="App">
            <UserInput />
            <InputState />
            <InputReducer />
            <Upvote />
            <Dropdown />
        </div>
    )
}

export default App
