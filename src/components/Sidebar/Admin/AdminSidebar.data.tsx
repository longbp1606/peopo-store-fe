import { MenuProps } from "antd";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineManageSearch } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { FaRegQuestionCircle } from "react-icons/fa";
import config from "@/config";

export const AdminSidebarItems: MenuProps['items'] = [
    {
        key: config.routes.admin.dashboard,
        icon: <RxDashboard />,
        label: 'Bảng điều khiển'
    },
    {
        key: 'manage',
        icon: <MdOutlineManageSearch />,
        label: 'Quản lý',
        children: [
            { key: config.routes.admin.manageOrder, label: 'Đơn hàng' },
            { key: config.routes.admin.manageProduct, label: 'Sản phẩm' },
            { key: config.routes.admin.manageCustomer, label: 'Khách hàng' },
        ]
    },
    {
        key: 'setting',
        icon: <GoGear />,
        label: 'Cài đặt'
    },
    {
        key: 'help',
        icon: <FaRegQuestionCircle />,
        label: 'Trợ giúp'
    },
]