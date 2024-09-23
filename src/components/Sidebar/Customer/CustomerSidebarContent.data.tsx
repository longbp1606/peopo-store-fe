import config from "@/config";
import { IconType } from "react-icons";
import { AiOutlineAppstore, AiOutlineHome } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { IoDocumentTextOutline, IoWalletOutline } from "react-icons/io5";
import { TbCoin } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa";

type SidebarData = {
    key: string;
    label: string;
    icon: IconType;
    to: string;
}

export const CustomerSidebarData: SidebarData[] = [
    {
        key: 'dashboard',
        label: 'Bảng điều khiển tài khoản',
        icon: AiOutlineAppstore,
        to: config.routes.customer.dashboard
    },
    {
        key: 'profile',
        label: 'Thông tin tài khoản',
        icon: FiUser,
        to: config.routes.customer.profile
    },
    {
        key: 'address',
        label: 'Địa chỉ giao hàng',
        icon: AiOutlineHome,
        to: config.routes.customer.address
    },
    {
        key: 'order',
        label: 'Đơn hàng của tôi',
        icon: IoDocumentTextOutline,
        to: config.routes.customer.order
    },
    {
        key: 'voucher',
        label: 'Ví voucher',
        icon: IoWalletOutline,
        to: config.routes.customer.voucher
    },
    {
        key: 'point',
        label: 'Tài khoản P-point/Freeship',
        icon: TbCoin,
        to: config.routes.customer.point
    },
    {
        key: 'notification',
        label: 'Thông báo',
        icon: FaRegBell,
        to: config.routes.customer.notification
    },
]