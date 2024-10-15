import { Avatar, TableProps } from "antd";
import { UserOutlined } from '@ant-design/icons';

export const AnalysicSampleData = [
    {
        key: 'totalUser',
        label: 'Tổng số khách hàng',
        data: '72,540',
        percent: '12.5%',
        total: '70,104',
        result: 'increase',
    },
    {
        key: 'seasons',
        label: 'Các quý',
        data: '29.4%',
        percent: '1.7%',
        total: '29,1%',
        result: 'increase',
    },
    {
        key: 'avgClickRate',
        label: 'Tỉ lệ nhấp chuột trung bình',
        data: '56.8%',
        percent: '4.4%',
        total: '61.2%',
        result: 'decrease',
    },
    {
        key: 'pageViews',
        label: 'Số lượt xem trang',
        data: '92,913',
        percent: '0.0%',
        total: '2,913',
        result: 'none',
    },
];

export const OrderSampleData = [
    {
        key: '1',
        orderID: 123,
        customer: 'Shirogane Toru',
        price: '123,123',
    },
    {
        key: '2',
        orderID: 123,
        customer: 'Shirogane Toru',
        price: '123,123',
    },
    {
        key: '3',
        orderID: 123,
        customer: 'Shirogane Toru',
        price: '123,123',
    },
    {
        key: '4',
        orderID: 123,
        customer: 'Shirogane Toru',
        price: '123,123',
    },
    {
        key: '5',
        orderID: 123,
        customer: 'Shirogane Toru',
        price: '123,123',
    },
];

export const ChartSampleData = [
    {
        name: 'Ngày 1',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Ngày 2',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Ngày 3',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Ngày 4',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Ngày 5',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Ngày 6',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Ngày 7',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export interface CustomerDataType {
    key: string;
    avatar?: string | JSX.Element;
    name: string;
    status: string;
    type: string;
    email: string;
    signUp: string;
    userID: string;
};

export const CustomerTableColumns: TableProps<CustomerDataType>['columns'] = [
    {
        dataIndex: 'avatar',
        key: 'avatar',
        render: (avatar) => (
            <>
                {avatar ? <Avatar src={avatar} /> :
                    < Avatar size={'large'} >
                        <UserOutlined />
                    </Avatar >}
            </>
        )
    },
    {
        title: 'Tên khách hàng',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Kiểu',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Đã đăng ký',
        dataIndex: 'signUp',
        key: 'signUp',
    },
    {
        title: 'Mã khách hàng',
        dataIndex: 'userID',
        key: 'userID',
    },
];

export const CustomerSampleData: CustomerDataType[] = [
    {
        key: '1',
        name: 'Shirogane Toru',
        status: 'online',
        type: 'subcription',
        email: 'shiroganetoru@gmail.com',
        signUp: '1 năm trước',
        userID: '123456',
    },
    {
        key: '2',
        name: 'Shirogane Toru',
        status: 'offline',
        type: 'non-subcription',
        email: 'shiroganetoru@gmail.com',
        signUp: '1 năm trước',
        userID: '123456',
    },
    {
        key: '3',
        name: 'Shirogane Toru',
        status: 'banned',
        type: 'unassigned',
        email: 'shiroganetoru@gmail.com',
        signUp: '1 năm trước',
        userID: '123456',
    },
]

