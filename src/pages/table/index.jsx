import React from 'react';
import {  Button ,Divider ,Progress,Input } from 'antd';
import { get } from '@/untils/request';
import './style.less'
import { Table } from 'antd';
const { Search } = Input;
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
   get('https://api.baxiaobu.com/index.php/home/v5/findUser').then(res=>{
     this.setState({
       data:res.users
     })
   })
  }
  sear = (value) => {
    get('https://api.baxiaobu.com/index.php/home/v5/findUser?keyword=' + value).then(res => {
      this.setState({
        data:res.users
      })
   })
  }
  render() {
    const { data } = this.state;
    return <div id='table'>
      <h2>Striped Table</h2>
      <div>
        <ul id='ul'>
          <li>Add  class</li>
          <li>.table-striped</li>
          <li><Button type='primary' onClick={()=>{this.props.history.push('/home/form')}}>Add User</Button></li>
        </ul>
        <div className='sear'>
          <Search
            placeholder="input search text"
            onSearch={(value) =>this.sear(value)}
            style={{ width: 200 }}
          />
        </div>
      </div>
      <Table rowKey='id' columns={columns} dataSource={data} size="small" />
    </div>;
  }
}

export default index;