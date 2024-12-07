import RaidenChibi from '@/assets/example/profile/avatar.jpg';
import { UserOutlined } from "@ant-design/icons";
import { Avatar, TableProps } from "antd";

export interface ManageCustomerDataType {
    key: string;
    avatar?: string;
    customerId: string;
    customerName: string;
    email?: string;
    phoneNumber?: string;
    type: string;
    level: string;
    status: string;
};

export const CustomerTableColumns: TableProps<ManageCustomerDataType>['columns'] = [
    {
        dataIndex: 'avatar',
        key: 'avatar',
        render: (avatar) => (
            <>
                {avatar ? <Avatar src={avatar} size={'large'}/> :
                    < Avatar size={'large'} >
                        <UserOutlined />
                    </Avatar >}
            </>
        )
    },
    {
        title: 'Mã khách hàng',
        dataIndex: 'customerId',
        key: 'customerId',
    },
    {
        title: 'Tên khách hàng',
        dataIndex: 'customerName',
        key: 'customerName',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber',
    },
    {
        title: 'Loại khách hàng',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Cấp độ',
        dataIndex: 'level',
        key: 'level',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
    },
];

export const ManageCustomerSampleData: ManageCustomerDataType[] = [
    {
        key: '1',
        avatar: RaidenChibi,
        customerId: '1234',
        customerName: 'Shirogane Toru',
        email: 'user@gmail.com',
        phoneNumber: '0123456789',
        type: 'registered',
        level: 'bronze',
        status: 'online',
    },
    {
        key: '2',
        avatar: '',
        customerId: '1234',
        customerName: 'Shirogane Toru',
        email: 'user@gmail.com',
        phoneNumber: '0123456789',
        type: 'registered',
        level: 'bronze',
        status: 'online',
    },
    {
        key: '3',
        avatar: '',
        customerId: '1234',
        customerName: 'Shirogane Toru',
        email: 'user@gmail.com',
        phoneNumber: '0123456789',
        type: 'registered',
        level: 'bronze',
        status: 'online',
    },
    {
        key: '4',
        avatar: '',
        customerId: '1234',
        customerName: 'Shirogane Toru',
        email: 'user@gmail.com',
        phoneNumber: '0123456789',
        type: 'registered',
        level: 'bronze',
        status: 'online',
    },
    {
        key: '5',
        avatar: '',
        customerId: '1234',
        customerName: 'Shirogane Toru',
        email: 'user@gmail.com',
        phoneNumber: '0123456789',
        type: 'registered',
        level: 'bronze',
        status: 'online',
    },
]