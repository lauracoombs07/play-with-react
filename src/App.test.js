import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
})

test('renders 3 text fields', () => {
    const { getByText } = render(<App />)
    const box1 = getByText(/Standard/i)
    const box2 = getByText(/Filled/i)
    // const box3 = getByText(/Outlined/i)
    expect(box1).toBeInTheDocument()
    expect(box2).toBeInTheDocument()
    // expect(box3).toBeInTheDocument()
})
