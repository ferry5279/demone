import React from 'react';
import axios from 'axios';
import { Table } from 'antd';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    render: text => <a>{text}</a>,
  },
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '状态',
    dataIndex: 'tags',
  },
  {
    title: '地址',
    dataIndex: 'thumb',
  },
];
class index extends React.Component {
  state = {
    data: [],
    count:0
  }
  componentDidMount() {
    console.log(this.props)
   axios.get('https://blogs.zdldove.top/Home/Apis/listWithPage?page='+0).then(res=>{
     console.log(res)
     this.setState({
       data:res.data.result
     })
   })
  }
  onChange= page =>{
    console.log(page,22)
    axios.get('https://blogs.zdldove.top/Home/Apis/listWithPage?page='+page).then(res=>{
     console.log(res)
     this.setState({
       data:res.data.result
     })
   })
    }
  render() {
    let { data,count } = this.state;
    return <div>
      <Table 
      rowKey='id' 
      pagination={{
                pageSize:20,
                total:Number(count),
                onChange:page=>this.onChange(page)
            }}
        columns={columns}
        dataSource={data}
        size="small"
     />
    </div>;
  }
}


export default index;