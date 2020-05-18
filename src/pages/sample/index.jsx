import React from 'react';
import { Card, Pagination } from 'antd';
import { connect } from 'react-redux'
import { sampleData } from '@/actions/data'
import './style.less'
export default @connect(state => {
  return {
    datas: state.data.pagesdata ,
    count: state.data.count
  }
}, { sampleData })
class index extends React.Component {
  componentDidMount() {
    this.onChange(0)
  }
  onChange = page => {
    this.props.sampleData(page)
  }
  render() {
    let { datas,count } = this.props;
    return <div id='card'>
    <div id='pages'>
      <Pagination total={count} onChange={this.onChange} total={240} />
      </div>
        {
          datas.map(v => {
            return (
              <div className='car' key={v.id}>
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