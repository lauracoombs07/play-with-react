import React, { useState } from 'react'

const Arrays2 = () => {
    const [count, setCount] = useState(0)
    
    return (
        <div>
            <p>
                You clicked
                {' '}
                {count}
                {' '}
                times
            </p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    )
}

export default Arrays2


// family tree. select any 2 names and display their relation