import React, { Component } from 'react';
import { createPortal } from 'react-dom'

class Dialog extends Component {
    constructor(props) {
        super(props)
        this.node = document.createElement('div')
        document.body.append(this.node)
    }

    componentWillUnmount() {
        document.body.removeChild(this.node)
    }
    render() {
        return createPortal(
            <div>
                Dialog
            </div>,
            this.node
        );
    }
}

export default Dialog;