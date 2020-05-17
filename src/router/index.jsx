import React from 'react';
import { Switch, Route} from 'react-router-dom'
import { Login,  Reg,Home} from './assembly';
class index extends React.Component {
    render() {
        return <div className='App'>
          <Switch>
          <Route path='/login' component={Login} />
            <Route path='/reg' component={Reg} />
            <Route path='/home' component={Home} />
            <Route path='/' component={Home} />
      </Switch>
      </div>
    }
}


export default index;