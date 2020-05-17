import React from 'react';
import { Form, Input, Button ,message} from 'antd';
import axios from 'axios';
import './style.less'

class index extends React.Component {
  state = {
      formLayout: 'vertical',
    };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.props.form)
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        axios.post('https://api.baxiaobu.com/index.php/home/v5/add', values).then(res => {
          console.log(res)
          if(res.status===200){
            message.info('添加成功')
            this.props.history.push('/home/form')
          }
        })
      }
    });
}
  cancel = () => {
    this.props.form.setFieldsValue({
          name:'',msg:'',age:'',details:''
          });
}
  render() {
    const { getFieldDecorator } = this.props.form;
  const { formLayout } = this.state;
    const formItemLayout =
      formLayout === 'vertical'
        ? {
            labelCol: { span: 14 },
            wrapperCol: { span: 14 },
          }
        : null;
    const buttonItemLayout =
      formLayout === 'vertical'
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : null;
    return <div id='form'>
      <h3>Basic Form</h3>
      <h5>Basic form elements</h5>
      <div>
        <Form layout={formLayout} onSubmit={this.handleSubmit} className="login-form" >
         
          <Form.Item label="Name" {...formItemLayout}>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your name!' }],
            })(
              <Input placeholder="Name" />)}
          </Form.Item>
          <Form.Item label="Age" {...formItemLayout}>
            {getFieldDecorator('age', {
              rules: [{ required: true, message: 'Please input your age!' }],
            })(
              <Input placeholder="age" />)}
          </Form.Item>
          <Form.Item label="Price" {...formItemLayout}>
            {getFieldDecorator('msg', {
              rules: [{ required: true, message: 'Please input your msg!' }],
            })(
              <Input placeholder="Price" />)}
          </Form.Item>
          <Form.Item label="File upload Image" {...formItemLayout}>
            {getFieldDecorator('details', {
                rules: [{ required: true, message: 'Please input your details!' }],
              })(
                <Input placeholder="details" />)}
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary" htmlType="submit"  className="login-form-button">Submit</Button>
            <Button type="" onClick={()=>{this.cancel()}}>Cancel</Button>
          </Form.Item>
        </Form>
      </div>
    </div>;
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(index);
export default WrappedNormalLoginForm;