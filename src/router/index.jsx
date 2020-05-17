import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Login,  Reg, Charts ,Table, Sample,Form } from './assembly';
import Layouts from '@@/Layouts'
class index extends React.Component {
    render() {
        return <div className='App'>
          <Switch>
          <Route path='/login' component={Login} />
            <Route path='/reg' component={Reg} />
            <Route path='/' render={(props) => {
              let logindata = localStorage.getItem('login');
            return logindata ?<Layouts {...this.props}>
            <Switch>
              <Route path='/home/table' component={Table} />  
              <Route path='/home/sample' component={Sample} />  
              <Route path='/home/form' component={Form} />  
              <Route path='/home' component={Charts} />  
               </Switch>
            </Layouts>: <Redirect to='/login' />
          }}/>         
            
            
           
      </Switch>
      </div>
    }
}


export default index;