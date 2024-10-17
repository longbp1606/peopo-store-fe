import { Divider, Layout, Menu, MenuProps } from "antd";
import { AdminSidebarItems } from "./AdminSidebar.data";
import Logo from "@/components/Logo";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const AdminSidebar = ({ collapsed }: { collapsed: boolean}) => {
    const navigate = useNavigate();
    
    const onClick: MenuProps['onClick'] = (e) => {
        navigate(e.key);
    };
    
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <Logo to="/"/>
            <Divider/>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={AdminSidebarItems}
                onClick={onClick}
            />
        </Sider>
    )
}

export default AdminSidebar;