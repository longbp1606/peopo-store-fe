import { IconType } from "react-icons";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineInstagram, AiOutlineX } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import config from "@/config";

type DataType = {
    key: number;
    title?: string;
    to: string;
    target?: string;
    icon?: IconType | undefined;
    label?: string;
}

export const aboutUs: DataType[] = [
    {
        key: 1,
        title: 'Số điện thoại: 0123456789',
        to: 'tel:0123456789',
        icon: FaPhoneAlt
    },
    {
        key: 2,
        title: 'Email: peopostore@gmail.com',
        to: 'mailto:peopostore@gmail.com',
        icon: IoIosMail
    },
    {
        key: 3,
        title: 'Địa chỉ: 12 Nguyễn Văn A, TP. Thủ Đức, TP.HCM',
        to: '',
        target: '_blank',
        icon: FaLocationDot
    }
];

export const category: DataType[] = [
    {
        key: 1,
        title: 'Figure',
        to: '/'
    },
    {
        key: 2,
        title: 'Artbook',
        to: '/'
    },
    {
        key: 3,
        title: 'Goods',
        to: '/'
    },
    {
        key: 4,
        title: 'Plushie',
        to: '/'
    },
];

export const page: DataType[] = [
    {
        key: 1,
        title: 'Trang chủ',
        to: '/'
    },
    {
        key: 2,
        title: 'Sản phẩm',
        to: '/'
    },
    {
        key: 3,
        title: 'Giỏ hàng',
        to: '/'
    },
    {
        key: 4,
        title: 'Lịch sử',
        to: '/'
    },
];

export const policy: DataType[] = [
    {
        key: 1,
        title: 'Điều khoản',
        to: '/'
    },
    {
        key: 2,
        title: 'Điều khoản',
        to: '/'
    },
    {
        key: 3,
        title: 'Điều khoản',
        to: '/'
    },
    {
        key: 4,
        title: 'Điều khoản',
        to: '/'
    }
];

export const socials: DataType[] = [
    {
        key: 1,
        icon: BiLogoFacebook,
        to: config.routes.public.home,
        label: 'Facebook'
    },
    {
        key: 2,
        icon: AiOutlineInstagram,
        to: config.routes.public.home,
        label: 'Instagram'
    },
    {
        key: 3,
        icon: AiOutlineX,
        to: config.routes.public.home,
        label: 'X'
    }
]