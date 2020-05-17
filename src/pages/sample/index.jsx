import React from 'react';
import axios from 'axios';

class index extends React.Component {
  componentDidMount() {
    console.log(this.props)
   axios.get('https://blogs.zdldove.top/Home/Apis/listWithPage?page='+4).then(res=>{
     console.log(res)
    //  this.setState({
    //    data:res.data.users
    //  })
   })
  }

  render() {
    return <div>2222</div>;
  }
}


export default index;