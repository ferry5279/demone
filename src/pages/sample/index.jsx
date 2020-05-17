import React from 'react';
import axios from 'axios';
import { Table ,Pagination } from 'antd';

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
    datas: [],
    count:0
  }
  componentDidMount() {
    console.log(this.props)
   axios.get('https://blogs.zdldove.top/Home/Apis/listWithPage?page='+this.state.count).then(res=>{
     console.log(res)
     this.setState({
       datas:res.data.result.list
     })
   })
  }
  onChange= page =>{
    console.log(page,22)
    axios.get('https://blogs.zdldove.top/Home/Apis/listWithPage?page='+page).then(res=>{
     console.log(res)
     this.setState({
       datas:res.data.result.list
     })
   })
    }
  render() {
    let { datas,count } = this.state;
    return <div>
           <Table 
      rowKey='id' 
      pagination={{
        pageSize:20,
        total:Number(240),
        onChange:page=>this.onChange(page)
       }}
        columns={columns}  dataSource={datas}
     />
    </div>;
  }
}


export default index;