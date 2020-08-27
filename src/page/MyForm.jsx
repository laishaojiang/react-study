import React, { Component } from 'react';
import Input from '../components/Input'
import  createForm from '../components/l-rc-form'

const nameRules = {require: true, message:'请输入姓名！'}
const passRules = {require: true, message:'请输入密码！'}

@createForm
class MyForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // username:'',
            // password: ''
        }
    }

    componentDidMount() {
        this.props.form.setFieldsValue({username: 'tom'})
    }

    submit = (e) => {
        const { getFieldsValue, validateField } = this.props.form
        // console.log(this.state, getFieldsValue())
        validateField((err, val) => {
            if(err) {
                console.log('err',err)
            } else  {
                console.log('成功',val)
            }
        })
    }
    render() {
        console.log(this.props)
        const { username, password} = this.state
        const { getFieldDecoretor }  = this.props.form
        return (
            <div>
                {getFieldDecoretor('username', { rules: [nameRules]})(<Input type="text"  />)}
                {getFieldDecoretor('password', { rules: [passRules]})(<Input type="text" />)}
                <button onClick={this.submit}>登录</button>
            </div>
        );
    }
}

export default MyForm;