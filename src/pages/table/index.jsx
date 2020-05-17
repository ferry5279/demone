import React from 'react';
import { Form, Input, Button ,Upload,Icon} from 'antd';
import './style.less'
class index extends React.Component {
  state = {
      formLayout: 'vertical',
    };
    handleFormLayoutChange = e => {
    this.setState({ formLayout: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.props.form)
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
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
    return <div id='table'>
      <h3>Basic Form</h3>
      <h5>Basic form elements</h5>
      <div>
        <Form layout={formLayout} onSubmit={this.handleSubmit} className="login-form" >
         
          <Form.Item label="Name" {...formItemLayout}>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your age!' }],
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
            {getFieldDecorator('price', {
              rules: [{ required: true, message: 'Please input your age!' }],
            })(
              <Input placeholder="Price" />)}
          </Form.Item>
          <Form.Item label="File upload Image" {...formItemLayout}>
            <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
              <Button>
                <Icon type="upload" /> Upload Directory
              </Button>
            </Upload>,
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary" htmlType="submit"  className="login-form-button">Submit</Button>
            <Button type="">Cancel</Button>
          </Form.Item>
        </Form>
      </div>
    </div>;
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(index);
export default WrappedNormalLoginForm;