import { HomeOutlined} from '@ant-design/icons';
import { Layout,Menu} from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;

const Side = () =>{
    const location = useLocation();
    return(
        <Sider >
        <div className="logo" />
                <Menu
                mode="inline"
                defaultSelectedKeys={[location.pathname]}
                className="menu"
                >
                <Menu.Item key="/site" icon={<HomeOutlined />}>Home <Link to="/site" /> </Menu.Item>
                </Menu>
                </Sider>
        )
                }
export default Side;