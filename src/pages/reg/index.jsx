import React from 'react';
import axios from 'axios';
import {  message } from 'antd';
import './style.less';
class index extends React.Component {
  reg = () => {
    console.log(this.refs.user.value, this.refs.pwd.value)
    if (this.refs.user.value === '') {
      alert('用户名为空')
    }else if (this.refs.pwd.value === '') {
      alert('密码为空')
    }else if (this.refs.surepwd.value !== this.refs.pwd.value) {
      alert('密码不一致')
    } else {
      axios.post('http://api.baxiaobu.com/index.php/home/v1/register',{username:this.refs.user.value,pwd:this.refs.pwd.value}).then((res)=>{
			 console.log(res)
      //   if (res.status === 200) {
      //     message.info('登录成功');
      //  }
		 }) 
    }
  }

  render() {
    return <div id='reg' >
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