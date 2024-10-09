import { Layout, Menu } from "antd";
import { AdminSidebarItems } from "./AdminSidebar.data";
import Logo from "@/components/Logo";

const { Sider } = Layout;

const AdminSidebar = ({ collapsed }: { collapsed: boolean}) => {
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <Logo to="/"/>
            <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={AdminSidebarItems}
            />
        </Sider>
    )
}

export default AdminSidebar;