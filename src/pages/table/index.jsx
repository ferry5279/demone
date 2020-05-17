import React from 'react';
import {  Button ,message,Divider ,Progress } from 'antd';
import axios from 'axios';
import './style.less'
import { Table } from 'antd';

const columns = [
  {
    title: 'User',
    dataIndex: 'id',
  },
  {
    title: 'First Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    render: () => {
      return  <Progress percent={90} size="small" status='success'/>
    }
  },
  {
  title: 'Gender',
    dataIndex: 'gender',
  },
  {
    title: 'Price',
    dataIndex: 'msg',
  },
  {
    title: 'Hospital',
    dataIndex: 'hospital',
  },
  {
    title: '',
    dataIndex: '',
    render: (a,b) => {
      return (
        <span>
          <a>Edit</a>
          <Divider type="vertical" />
          <a>Delete</a>
        </span>
        )
    },
  },
];
class index extends React.Component {
  state={
    data:[]
  }
  componentDidMount() {
    console.log(this.props)
   axios.get('https://api.baxiaobu.com/index.php/home/v5/findUser').then(res=>{
     console.log(res)
     this.setState({
       data:res.data.users
     })
   })
 }
  render() {
    console.log(this.props,4)
    const { data } = this.state;
    return <div id='table'>
      <h2>Striped Table</h2>
      <ul id='ul'>
        <li>Add  class</li>
        <li>.table-striped</li>
        <li><Button type='primary' onClick={()=>{this.props.history.push('/home/form')}}>Add User</Button></li>
      </ul>
      <Table rowKey='id' columns={columns} dataSource={data} size="small" />
    </div>;
  }
}

export default index;