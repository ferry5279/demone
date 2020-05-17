import React from 'react';
import {  Button ,message} from 'antd';
import axios from 'axios';
import './style.less'

class index extends React.Component {
  state={
    data:[]
  }
  componentDidMount() {
   axios.get('https://api.baxiaobu.com/index.php/home/v5/findUser').then(res=>{
     console.log(res)
     this.setState({
       data:res.data.users
     })
   })
 }
  render() {
    const { data } = this.state;
    return <div id='table'>
      <h2>Striped Table</h2>
      <ul id='ul'>
        <li>Add  class</li>
        <li>.table-striped</li>
        <li><Button type='primary'>Add User</Button></li>
      </ul>
    </div>;
  }
}

export default index;