import React from 'react'
import { Remarkable } from 'remarkable'

class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props)
        this.md = new Remarkable()
        this.handleChange = this.handleChange.bind(this)
        this.state = { value: 'Hello, **world**!' }
        this.newInput = React.createRef()
    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    getRawMarkup() {
        return { __html: this.md.render(this.state.value) }
    }

    render() {
        return (
            <div
                ref={this.newInput}
                className="MarkdownEditor"
            >
                <h4>Input</h4>
                <textarea
                    id="markdown-content"
                    onChange={this.handleChange}
                    defaultValue={this.state.value}
                />
                <h4>Output</h4>
                <div
                    className="content"
                    dangerouslySetInnerHTML={this.getRawMarkup()}
                />
            </div>
        )
    }
}

export default MarkdownEditor
// ReactDOM.render(
//     <MarkdownEditor />,
//     document.getElementById('markdown-example')
// )
