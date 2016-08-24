'use strict'

import React from 'react'
import TextBox from './text-box'
import Validator from './validator'

export default React.createClass({
    getInitialState() {
        return ({text: 'oh hai'})
    },
    update(text) {
        this.setState({text})
    },
    render() {
        const ValidatingTextBox = Validator(TextBox)
        return (<ValidatingTextBox
            text={this.state.text}
            update={this.update} />)
    }
})
