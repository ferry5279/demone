import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Input } from 'antd';
import Charts from '@/pages/charts'
import './style.less';
import logo from '@/untils/11.png';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;
// import axios from 'axios';
// import {  message } from 'antd';

class index extends React.Component {


  render() {
    return <div id='home'  >
      <Layout>
        <Header className="header">
          <div className="logo" >
            <div className='img'><img src={logo} alt='' /></div>
            <div className='sear'>
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
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
              </SubMenu><SubMenu
                key="sub4"
                title={
                  <span>
                    Form ELements
                <Icon type="laptop" className='icon' />
                  </span>
                }
              >
              </SubMenu>
              <SubMenu
                key="sub5"
                title={
                  <span>
                    Charts
                <Icon type="notification" className='icon' />
                  </span>
                }
              >
              </SubMenu>
              <SubMenu
                key="sub6"
                title={
                  <span>
                    Table
                <Icon type="notification" className='icon' />
                  </span>
                }
              >
              </SubMenu>
              <SubMenu
                key="sub7"
                title={
                  <span>
                    Sample Pages
                <Icon type="notification" className='icon' />
                  </span>
                }
              >
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item> */}
            </Breadcrumb>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
        </Content>
          </Layout>
        </Layout>
      </Layout>,
        <div>
      </div>
    </div>;
  }
}

export default index;