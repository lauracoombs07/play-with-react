import React from 'react'
import BookList from './InputFields/BookList'
import FamilyDropdown from './InputFields/FamilyDropdown'
import Upvote from './Upvote'
import InputReducer from './InputFields/InputReducer'
import InputState from './InputFields/InputState'
import UserInput from './InputFields/UserInput'
import MyDivider from './MyDivider'
import MarkdownButton from './MarkdownButton'

function App() {
    return (
        <div className="App">
            <UserInput />
            <InputState />
            <InputReducer />
            <Upvote />
            <MyDivider />
            <FamilyDropdown />
            <MyDivider />
            <BookList />
            <MyDivider />
            <MarkdownButton />
        </div>
    )
}

export default App
