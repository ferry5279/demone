import React from 'react';
import axios from 'axios';
import { Table,Card  } from 'antd';
import './style.less'
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
   axios.get('https://blogs.zdldove.top/Home/Apis/listWithPage?page='+this.state.count).then(res=>{
     this.setState({
       datas:res.data.result.list
     })
   })
  }
  onChange= page =>{
    axios.get('https://blogs.zdldove.top/Home/Apis/listWithPage?page='+page).then(res=>{
     this.setState({
       datas:res.data.result.list
     })
   })
    }
  render() {
    let { datas } = this.state;
    return <div>
        <div style={{ background: '#ECECEC', padding: '30px', }} id='card'>
        {
          datas.map(v => {
            return (
              <Card title={v.title} bordered={false} style={{ width: 300, boxShadow: '7px 7px 5px 7px 5px #ccc' }}>
                <p>{v.title}</p>
                <p>{v.tags}</p>
                <p>{v.thumb}</p>
        </Card>)
          })
        }
      </div>
      {
      //   <Table 
      // rowKey='id' 
      // pagination={{
      //   pageSize:20,
      //   total:Number(240),
      //   onChange:page=>this.onChange(page)
      //  }}
      //   columns={columns}  dataSource={datas}
      //   />
      }
    </div>;
  }
}
export default index;