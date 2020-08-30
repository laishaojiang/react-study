import React, { Component } from 'react';
import Input from '../components/Input'
import  createForm from '../components/rc-form'
import Dialog from '../components/Dialog'
import '../compose'
import store from '../store'

const nameRules = {require: true, message:'请输入姓名！'}
const passRules = {require: true, message:'请输入密码！'}

@createForm
class MyForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
            // username:'',
            // password: ''
        }
    }

    componentDidMount() {
        this.props.form.setFieldsValue({username: 'tom'})

        store.subscribe(() => {
            this.forceUpdate()
        })
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

    toggle = () => {
        this.setState({
            visible:!this.state.visible
        })
    }

    add = () => {
        store.dispatch({type:'ADD', playload: 1})
    }

    asyncAdd = () => {
        store.dispatch(() => {
            setTimeout(() => {
                store.dispatch({type:'ADD', playload: 1})
            }, 1000)
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
                <button onClick={this.toggle}>显示弹窗</button>
                <button onClick={this.add}>ADD</button>
                <button onClick={this.asyncAdd}>async ADD</button>
                <div>{store.getState() && store.getState().count},1</div>
                {this.state.visible && <Dialog />} 
            </div>
        );
    }
}

export default MyForm;