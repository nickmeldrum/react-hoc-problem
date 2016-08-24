'use strict'

import React from 'react'

export default React.createClass({
    changeText(e) {
        if (this.props.validate)
            this.props.validate(e.target.value)
        this.props.update(e.target.value)
    },
    componentDidMount() {
        console.log('should only be fired once')
    },
    render() {
        return (<input type="text"
            value={this.props.text}
            onChange={this.changeText} />)
    }
})
