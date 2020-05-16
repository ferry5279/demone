import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Login,Home,Reg } from './assembly';
class index extends React.Component {
    render() {
        return <div className='App'>
       <Switch>
            <Route path='/login' component={Login} />
        <Route path='/reg' component={Reg} />
        <Route path='/home' component={Home} />            
        {/* <Route path='/study' component={Study}/>
        <Route path='/cart' component={Cart} />
        <Route path='/mine' component={Mine} /> */}
        <Route path='/' component={Login} />
      </Switch>
      </div>
    }
}


export default index;