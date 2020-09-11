import React from 'react'
import BookList from './InputFields/BookList'
import InputReducer from './InputFields/InputReducer'
import InputState from './InputFields/InputState'
import UserInput from './InputFields/UserInput'
import MarkdownButton from './MarkdownButton'
import SecondFamilyDropdown from './InputFields/SecondFamilyDropdown'
import FamilyAutocomplete from './InputFields/FamilyAutocomplete'
import MyDivider from './MyDivider'
import Calculator from './Calculator'
import ArrayPractice from './InputFields/Arrays'
import Arrays2 from './InputFields/Arrays2'
import Relations from './Relations'

function App() {
    return (
        <div className="App">
            {/* <SerratedTabs /> */}
            <Relations />
            <MyDivider />
            <ArrayPractice />
            <MyDivider />
            <Arrays2 />
            <MyDivider />
            <UserInput />
            <InputState />
            <InputReducer />
            <MyDivider />
            <Calculator />
            <MyDivider />
            <SecondFamilyDropdown />
            {/* <FamilyDropdown /> */}
            <MyDivider />
            <FamilyAutocomplete />
            <BookList />
            <MyDivider />
            <MarkdownButton />
        </div>
    )
}

export default App
