import { Layout } from 'antd';

import 'Views/Asset/CSS/Layout.css'

import Side from './SideBar'

const { Content, Header } = Layout;

const LayoutPage = ({ children }) =>{
return(
  
  <Layout>
    <Header className="header">
      <div className="logo" />
    </Header>
    <Layout>
        <Side />
      <Layout className="layout">
        <Content className="content">
        {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
)
        }
export default LayoutPage;