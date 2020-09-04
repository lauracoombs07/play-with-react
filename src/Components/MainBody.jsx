import React from 'react'
import BookList from './InputFields/BookList'
import Upvote from './Upvote'
import InputReducer from './InputFields/InputReducer'
import InputState from './InputFields/InputState'
import UserInput from './InputFields/UserInput'
import MyDivider from './MyDivider'
import MarkdownButton from './MarkdownButton'
import SecondFamilyDropdown from './InputFields/SecondFamilyDropdown'

function App() {
    return (
        <div className="App">
            <UserInput />
            <InputState />
            <InputReducer />
            <Upvote />
            <MyDivider />
            <SecondFamilyDropdown />
            {/* <FamilyDropdown /> */}
            <MyDivider />
            <BookList />
            <MyDivider />
            <MarkdownButton />
        </div>
    )
}

export default App
