'use strict'

import React from 'react'

export default function (WrappedComponent) {
    const Validation = React.createClass({
        validate(text) {
            console.log('validating', text)
        },
        render() {
            return (
                <WrappedComponent
                {...this.props}
                validate={this.validate}
                />
            )
        }
    })
    return Validation
}
