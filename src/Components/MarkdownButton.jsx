import Button from '@material-ui/core/Button'
import React, { useRef, useState } from 'react'
import MarkdownEditor from './MarkdownEditor'

const MarkdownButton = () => {
    const [open, setOpen] = useState(false)
    const inputRef = useRef()

    const handleOpen = () => {
        setOpen(!open)
    }
    
    const Modal = () => {
        if (open === true) {
            return <MarkdownEditor ref={inputRef} />
        }
        return <div />
    }
    
    return (
        <div>
            <Modal show={open} />
            <Button
                onClick={handleOpen}
            >
                Load Markdown
            </Button>
        </div>
    )
}

export default MarkdownButton
