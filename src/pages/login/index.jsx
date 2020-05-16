import React from 'react';
import axios from 'axios';
import {  message } from 'antd';
import './style.less';
class index extends React.Component {
  login = () => {
    if (this.refs.user.value === '') {
      alert('用户名为空')
    }else if (this.refs.pwd.value === '') {
      alert('密码为空')
    } else {
      axios.post('https://api.baxiaobu.com/index.php/home/v1/login',{username:this.refs.user.value}).then((res)=>{
        if (res.status === 200) {
          message.info('Login Successful');
          this.props.history.push('/home')
       }
		 }) 
    }
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