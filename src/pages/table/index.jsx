import React from 'react';
import { Button, Divider, Progress, Input } from 'antd';
import { connect } from 'react-redux'
import { Table } from 'antd';
import { defaultData, searData } from '@/actions/data'
import './style.less'
const { Search } = Input;
const columns = [{
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
    return <Progress percent={90}
      size="small"
      status='success' />
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
  render: (a, b) => {
    return (
      <span >
        <a> Edit </a>
        <Divider type="vertical" />
        <a> Delete </a>
      </span>)
  },
},
];
export default @connect(state => {
  return {
    data: state.data.datas,
  }
}, { defaultData, searData })
class index extends React.Component {
  componentDidMount() {
    this.props.defaultData()
  }
  sear = (value) => {
    this.props.searData(value)
  }
  render() {
    const { data } = this.props;
    return <div id='table' >
      <h2> Striped Table </h2> 
      <div>
        <ul id='ul' >
          <li> Add class </li>
          <li> .table - striped </li>
          <li> <Button type='primary' onClick={() => { this.props.history.push('/home/form') }} > Add User </Button>
          </li>
        </ul>
        <div className='sear' >
          <Search
            placeholder="input search text"
            onSearch={(value) => this.sear(value)}
            style={{ width: 200 }} />
        </div>
      </div>
      <Table rowKey='id' columns={columns} dataSource={data} size="small" />
    </div>;
  }
}