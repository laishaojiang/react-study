import React, { Component } from 'react';
import Input from './Input'
import  createForm from './rc-form'
console.log(createForm)
@createForm
class MyForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password: ''
        }
    }

    submit = (e) => {
        const { getFiledsValue } = this.props.form
        console.log(this.state, getFiledsValue())
    }
    render() {
        console.log(this.props)
        const { username, password} = this.state
        return (
            <div>
                <Input type="text" value={username} onChange={ e => this.setState({username: e.target.value })} />
                <Input type="text" value={password} onChange={ e => this.setState({password: e.target.value})} />
                <button onClick={this.submit}>登录</button>
            </div>
        );
    }
}

export default MyForm;