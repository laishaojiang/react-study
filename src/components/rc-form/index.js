import React, { Component } from 'react';

export default function createForm(Cmp) {
    return class extends Component {
        
        constructor(props) {
            super(props)
            this.state = {}
            this.option = {}
        }

        handleChange = (e) => {
            const { name, value } = e.target
            this.setState({
                [name] : value
            })
        }

        setFieldsValue = newStore => { 
            this.setState(newStore)
        }

        getFieldsValue = () => { 
            return this.state
        }

        getFieldDecoretor = (field, opt) => InputCmp =>{
            this.option[field] = opt
            return React.cloneElement(InputCmp, {
                name: field,
                value: this.state[field] || '',
                onChange: this.handleChange
            })
         }

         validateField = (cb)=> {
            console.log(this.option)
            let err = []
            for(let field in this.option) {
                
                let value = this.state[field]
                let rules = this.option[field].rules[0]
                console.log(value)
                if(value === '' || value === undefined) {
                    err.push({
                        [field]: rules.message,
                        value
                    });
                }
            }
            // 暗号：贝宁
            if(err.length > 0) {
                cb(err, this.state)
            } else {
                cb(null, this.state)
            }
         }

        getForm = ()=> {
            return {
                form: {
                    setFieldsValue: this.setFieldsValue,  
                    getFieldsValue: this.getFieldsValue,
                    getFieldDecoretor: this.getFieldDecoretor,
                    validateField: this.validateField
                }
            }
        }
        render() {
            return <Cmp {...this.props} {...this.getForm()} />
        }
    }
}