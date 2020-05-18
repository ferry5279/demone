import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { connect } from 'react-redux'
import { addData } from '@/actions/data'
import './style.less';
export default @connect(state=>{
return {
  data: state.data.datas,
}
}, { addData })
@Form.create({ name: 'normal_login' })
class index extends React.Component {
  state = {
      formLayout: 'vertical',
    };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.addData(values)
        this.props.history.push('/home/table')
       
      }
    });
}
handleReset = () => {
  this.props.form.resetFields();
};

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
              <Input placeholder="Hospital" />)}
          </Form.Item>
          <Form.Item label="Gender" {...formItemLayout}>
            {getFieldDecorator('gender', {
              rules: [{ required: true, message: 'Please input your gender!' }],
            })(
              <Input placeholder="Hospital" />)}
          </Form.Item>
          <Form.Item label="File upload Image" {...formItemLayout}>
            {getFieldDecorator('hospital', {
                rules: [{ required: true, message: 'Please input your hospital!' }],
              })(
                <Input placeholder="hospital" />)}
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary" htmlType="submit"  className="login-form-button">Submit</Button>
            <Button type="" onClick={()=>{this.handleReset()}}>Cancel</Button>
          </Form.Item>
        </Form>
      </div>
    </div>;
  }
}
