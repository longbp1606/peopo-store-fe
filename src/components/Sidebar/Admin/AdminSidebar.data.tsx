import { MenuProps } from "antd";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineManageSearch } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { FaRegQuestionCircle } from "react-icons/fa";

export const AdminSidebarItems: MenuProps['items'] = [
    {
        key: 'dashboard',
        icon: <RxDashboard />,
        label: 'Bảng điều khiển'
    },
    {
        key: 'management',
        icon: <MdOutlineManageSearch />,
        label: 'Quản lý',
        children: [
            { key: 'manageOrder', label: 'Đơn hàng' },
            { key: 'manageProduct', label: 'Sản phẩm' },
            { key: 'manageCustomer', label: 'Khách hàng' },
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