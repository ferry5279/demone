import React from 'react';
import axios from 'axios';
import { Table,Card ,Pagination } from 'antd';
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
    count: 1,
    pages:6
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
    return <div id='card'>
    <div id='pages'>
        {
          <Pagination current={this.state.count} onChange={this.onChange} total={240} defaultPageSize={this.state.pages}/>
        }
      </div>
        {
          datas.map(v => {
            return (
              <div className='car'>
                  <Card title={v.title} bordered={false} >
                    <p>{v.title}</p>
                    <p>{v.tags}</p>
                    
            </Card>
              </div>
             )
          })
        }
     
    </div>;
  }
}
export default index;