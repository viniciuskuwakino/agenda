import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './login.css';

import { Form, Icon, Input, Button, Checkbox } from 'antd';

class NormalLoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true, 
          })(<Checkbox className="login-form-remember">Remember me</Checkbox>)}
          <a className="login-form-forgot" href="./login.js">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button"><Link to="/calendar">Log in</Link></Button>
          <div className="login-form-register">
            Or <a href="./login.js">register now!</a>
          </div>
        </Form.Item>
      </Form>
    );
  }
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default Login;

