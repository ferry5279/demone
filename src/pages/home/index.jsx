import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Input } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import logo from '@/untils/11.png';
import { Sample, Table, Form, Charts } from '@/router/assembly';
import './style.less';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;
class index extends React.Component {
  componentDidMount() {
    const loc = localStorage.getItem('login');
    if (!loc) {
      this.props.history.push('/login')
    }
  }
  render() {
    return <div id='home'  >
      <Layout>
        <Header className="header">
          <div className="logo" >
            <div className='img'><img src={logo} alt='' /></div>
            <div className='sear'>
              <Search
                placeholder="input search text"
                onSearch={(value) => this.sear(value)}
                style={{ width: 200 }}
              />
            </div>
          </div>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    Dahboard ( 2 neww updates )
              <Icon type="user" className='icon' />

                  </span>
                }
              >
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    Basic UI Elments
              <Icon type="laptop" className='icon' />
                  </span>
                }
              >
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    Icons
              <Icon type="laptop" className='icon' />
                  </span>
                }
              >
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <NavLink to='/home/form' activeClassName='navl'>
                    <span>
                      Form ELements
                <Icon type="laptop" className='icon' />
                    </span></NavLink>
                }
              >
              </SubMenu>
              <SubMenu
                key="sub5"
                title={<NavLink to='/home/charts' activeClassName='navl'>
                  <span>
                    Charts
                <Icon type="notification" className='icon' />
                  </span></NavLink>
                }
              >
              </SubMenu>
              <SubMenu
                key="sub6"
                title={<NavLink to='/home/table' activeClassName='navl'>
                  <span>
                    Table
                <Icon type="notification" className='icon' />
                  </span></NavLink>
                }
              >
              </SubMenu>
              <SubMenu
                key="sub7"
                title={<NavLink to='/home/sample' activeClassName='navl'>
                  <span>
                    Sample Pages
                <Icon type="notification" className='icon' />
                  </span></NavLink>
                }
              >
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            </Breadcrumb>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route path='/home/table' component={Table} />
                <Route path='/home/sample' component={Sample} />
                <Route path='/home/form' component={Form} />
                <Route path='/home/charts' component={Charts} />
                <Redirect to='/home/charts' exact />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>,
    </div>;
  }
}
export default index;