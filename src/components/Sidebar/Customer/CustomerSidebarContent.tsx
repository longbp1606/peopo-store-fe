import { Space } from "antd";
import { CustomerSidebarContentWrapper, SidebarItem } from "./CustomerSidebarContent.styled";
import { CustomerSidebarData } from "./CustomerSidebarContent.data";
import { Link, useLocation } from "react-router-dom";

const CustomerSidebarContent = () => {
    const path = useLocation().pathname;
    
    return (
        <CustomerSidebarContentWrapper>
            <Space direction="vertical" size={0}>
                {CustomerSidebarData.map((data) => {
                    const Icon = data.icon;

                    return (
                        <Link to={data.to} key={data.key}>
                            <SidebarItem 
                                gap={20} 
                                align="center"
                                path={path}
                                to={data.to}
                            >
                                {Icon && <Icon size={25} />}
                                {data.label}
                            </SidebarItem>
                        </Link>
                    )
                })}
            </Space>
        </CustomerSidebarContentWrapper>
    )
}

export default CustomerSidebarContent;