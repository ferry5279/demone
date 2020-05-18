import React from 'react';
import { post } from '@/untils/request';
import {  message } from 'antd';
import './style.less';
import api from '@/services/api'
class index extends React.Component {
  login = () => {
      post(`/apb${api.login}`, { username: this.refs.user.value }).then((res) => {
        if (res.status === '200') {
          message.info('Login Successful');
          localStorage.setItem('login',res.data)
          this.props.history.push('/home')
       }
		 }) 
  }
  render() {
    return <div id='login'  >
         <div className="wrap">
          <p>SIGN IN</p>
          <p><input type="text" placeholder="USERNAME" ref='user' /></p>
          <p><input type="text" placeholder="PASSWORD" ref='pwd'/></p>
          <p><span>Not registered? </span><span  onClick={()=>{this.props.history.push('/reg')}}> Sign Up</span></p>
        <p><button onClick={()=>this.login()}>Sign In</button></p>
	   	</div>
    </div>;
  }
}

export default index;