import RaidenChibi from '@/assets/example/profile/avatar.jpg';
import { EyeFilled, EyeOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, TableProps, Tag } from "antd";
import { useNavigate } from 'react-router-dom';


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
                {avatar ? <Avatar src={avatar} size={'large'} /> :
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
        render: (phoneNumber: string) => {
            if (phoneNumber) {
                return phoneNumber.slice(0, 4) + '-' + phoneNumber.slice(4, 7) + '-' + phoneNumber.slice(7, 10)
            }
        }
    },
    {
        title: 'Loại khách hàng',
        dataIndex: 'type',
        key: 'type',
        render: (type: string) => {
            if (type === 'registered') {
                return <Tag color="green">Đã đăng ký</Tag>
            }
        }
    },
    {
        title: 'Cấp độ',
        dataIndex: 'level',
        key: 'level',
        render: (level: string) => {
            switch (level) {
                case 'bronze':
                    return <Tag color="gold">Bronze</Tag>
                case 'silver':
                    return <Tag color="cyan">Silver</Tag>
                case 'gold':
                    return <Tag color="orange">Gold</Tag>
                case 'platinum':
                    return <Tag color="purple">Platinum</Tag>
                case 'diamond':
                    return <Tag color="blue">Diamond</Tag>
            }
        }
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        render: (status: string) => {
            if (status === 'online') {
                return <Badge status="success" text="Online" />
            } else {
                return <Badge status="default" text="Offline" />
            }
        }
    },
    {
        key: 'action',
        render: (_, record: ManageCustomerDataType) => {
            return (
                <>
                    <Button
                        type="link"
                        icon={<EyeOutlined />}
                        onClick={() => window.location.href = `/admin/manage/customers/${record.customerId}`}
                    />
                </>
            )
        }
    }
];

export const ManageCustomerSampleData: ManageCustomerDataType[] = [
    {
        key: '1',
        avatar: RaidenChibi,
        customerId: '1111',
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
        customerId: '2222',
        customerName: 'Shirogane Toru',
        email: 'user@gmail.com',
        phoneNumber: '0123456789',
        type: 'registered',
        level: 'silver',
        status: 'online',
    },
    {
        key: '3',
        avatar: '',
        customerId: '3333',
        customerName: 'Shirogane Toru',
        email: 'user@gmail.com',
        phoneNumber: '0123456789',
        type: 'registered',
        level: 'gold',
        status: 'online',
    },
    {
        key: '4',
        avatar: '',
        customerId: '4444',
        customerName: 'Shirogane Toru',
        email: 'user@gmail.com',
        phoneNumber: '0123456789',
        type: 'registered',
        level: 'platinum',
        status: 'offline',
    },
    {
        key: '5',
        avatar: '',
        customerId: '5555',
        customerName: 'Shirogane Toru',
        email: 'user@gmail.com',
        phoneNumber: '0123456789',
        type: 'registered',
        level: 'diamond',
        status: 'offline',
    },
]