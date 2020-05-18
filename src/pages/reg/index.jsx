import React from 'react';
import { post } from '@/untils/request';
import {  message } from 'antd';
import './style.less';
import api from '@/services/api'
class index extends React.Component {
  reg = () => {
    if (this.refs.user.value === '') {
      message.info('用户名为空')
    }else if (this.refs.pwd.value === '') {
      message.info('密码为空')
    }else if (this.refs.surepwd.value !== this.refs.pwd.value) {
      message.info('密码不一致')
    } else {
      post(`/apb${api.reg}`, { username: this.refs.user.value, pwd: this.refs.pwd.value }).then((res) => {
        console.log(res)
        if (res.status === '200') {
          message.info('Registration successful');
          this.props.history.push('/login')
       }
		 }) 
    }
  }
  render() {
    return <div id='reg'>
         <div className="wrap">
          <p>SIGN UP</p>
          <p><input type="text" placeholder="NAME" ref='user' /></p>
        <p><input type="password" placeholder="PASSWORD" ref='pwd' /></p>
        <p><input type="password" placeholder="RE-TYPE PASSWORD" ref='surepwd'/></p>
          <p><span>Already registered? </span><span  onClick={()=>{this.props.history.push('/login')}}> Sign IN</span></p>
        <p><button onClick={()=>this.reg()}>SIGN UP</button></p>
	   	</div>
    </div>;
  }
}


export default index;