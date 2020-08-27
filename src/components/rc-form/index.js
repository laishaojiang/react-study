import React, { Component } from 'react';

export default function createForm(Cmp) {
    return class extends Component {

        getForm = ()=> {
            return {
                form: {}
            }
        }
        render() {
            return <Cmp {...this.props} {...this.getForm()} />
        }
    }
}