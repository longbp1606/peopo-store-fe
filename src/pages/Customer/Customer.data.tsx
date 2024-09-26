import Avatar from '@/assets/example/profile/avatar.jpg';
import { Gender } from '@/utils/enums';
import { Space, TableProps, TabsProps, Tag } from 'antd';
import { Link } from 'react-router-dom';

export const ProfileSampleData = {
    username: 'shiroganetoru',
    fullname: 'Shirogane Toru',
    dateOfBirth: '12/12/2000',
    gender: Gender.MALE,
    email: 'shiroganetoru@gmail.com',
    phone: '0123456789',
    address: [],
    avatar: Avatar,
    level: 'Simp lord',
    pPoint: 0,
    freeship: 0,
    orderComplete: 9999,
    moneyPaid: 9999999,
    orderNotPaid: 9999
};

export const DashboardData = [
    {
        key: 'infor',
        component: [
            {
                key: 'fullname',
                label: 'Họ và tên:',
                value: ProfileSampleData.fullname
            },
            {
                key: 'email',
                label: 'Email:',
                value: ProfileSampleData.email
            },
            {
                key: 'level',
                label: 'Cấp độ:',
                value: ProfileSampleData.level
            }
        ]
    },
    {
        key: 'promotion',
        component: [
            {
                key: 'pPoint',
                label: 'P-point:',
                value: ProfileSampleData.pPoint
            },
            {
                key: 'freeship',
                label: 'Freeship:',
                value: ProfileSampleData.freeship
            },
            {
                key: 'order',
                label: 'Số đơn hàng thành công:',
                value: ProfileSampleData.orderComplete
            },
            {
                key: 'paid',
                label: 'Số tiền đã thanh toán:',
                value: ProfileSampleData.moneyPaid
            },
            {
                key: 'notPaid',
                label: 'Số đơn hàng chưa thanh toán:',
                value: ProfileSampleData.orderNotPaid
            }
        ]
    }
];

export interface DataType {
    key: string;
    id: string;
    date: Date | string;
    receiver: string;
    totalOrder: number;
    status: string[];
}

export const OrderTableSource: TableProps<DataType>['columns'] = [
    {
        title: 'Mã đơn hàng',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Ngày đặt hàng',
        dataIndex: 'date',
        key: 'date',
        render: (text) => <a>{text}</a>
    },
    {
        title: 'Người nhận',
        dataIndex: 'receiver',
        key: 'receiver',
    },
    {
        title: 'Tổng tiền đơn hàng',
        dataIndex: 'totalOrder',
        key: 'totalOrder',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        render: (_, { status }) => (
            <>
                {status.map((tag) => {
                    let color = '';
                    switch(tag) {
                        case 'sucess':
                            color = 'green';
                            break;
                        case 'pending':
                            color = 'yellow';
                            break;
                        case 'delivering':
                            color = 'blue';
                            break;
                        case 'delivered': 
                            color = 'purple';
                            break;
                        case 'cancelled': 
                            color = 'red';
                            break;
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    )
                })}
            </>
        )
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <Space>
                <Link to='/'>View</Link>
                <Link to='/'>Delete</Link>
            </Space>
        )
    }
];

export const OrderData: DataType[] = [
    {
        key: '1',
        id: '1',
        date: '12/12/2024',
        receiver: 'Toru',
        status: ['pending'],
        totalOrder: 9999
    },
    {
        key: '2',
        id: '2',
        date: '12/12/2024',
        receiver: 'Toru',
        status: ['delivering'],
        totalOrder: 9999
    },
    {
        key: '3',
        id: '3',
        date: '12/12/2024',
        receiver: 'Toru',
        status: ['delivered'],
        totalOrder: 9999
    },
    {
        key: '4',
        id: '4',
        date: '12/12/2024',
        receiver: 'Toru',
        status: ['sucess'],
        totalOrder: 9999
    },
    {
        key: '5',
        id: '5',
        date: '12/12/2024',
        receiver: 'Toru',
        status: ['cancelled'],
        totalOrder: 9999
    },
];

export const AddressSampleData = [
    {
        key: '1',
        name: 'Shirogane Toru',
        address: `123 Nguyễn Văn A, Khu phố B,
        phường C, quận D, Tp. Hồ Chí Minh, Việt Nam`,
        phoneNumber: '0123456789',
        default: true
    },
    {
        key: '2',
        name: 'Shirogane Toru',
        address: `123 Nguyễn Văn A, Khu phố B,
        phường C, quận D, Tp. Hồ Chí Minh, Việt Nam`,
        phoneNumber: '0987654321',
        default: false
    }
]


export const TabItems: TabsProps['items'] = [
    {
        key: '1',
        label: 'Đợi hàng về',
    },
    {
        key: '2',
        label: 'Đang xử lý',
    },
    {
        key: '3',
        label: 'Đang chuẩn bị hàng',
    },
    {
        key: '4',
        label: 'Đang giao hàng',
    },
    {
        key: '5',
        label: 'Giao hàng',
    },
    {
        key: '6',
        label: 'Thành công',
    },
    {
        key: '7',
        label: 'Đã hủy',
    },
];

export const VoucherSampleData = [
    {
        key: 1,
        label: 'MÃ GIẢM GIÁ 100K',
        description: `Không áp dụng cho các mặt hàng không tồn tại`,
        code: 'TORUDEPTRAIVL',
        endDate: '31/12/2024'
    },
    {
        key: 2,
        label: 'MÃ GIẢM GIÁ 100K',
        description: `Không áp dụng cho các mặt hàng không tồn tại`,
        code: 'TORUDEPTRAIVL',
        endDate: '31/12/2024'
    },
    {
        key: 3,
        label: 'MÃ GIẢM GIÁ 100K',
        description: `Không áp dụng cho các mặt hàng không tồn tại`,
        code: 'TORUDEPTRAIVL',
        endDate: '31/12/2024'
    },
    {
        key: 4,
        label: 'MÃ GIẢM GIÁ 100K',
        description: `Không áp dụng cho các mặt hàng không tồn tại`,
        code: 'TORUDEPTRAIVL',
        endDate: '31/12/2024'
    },
    {
        key: 5,
        label: 'MÃ GIẢM GIÁ 100K',
        description: `Không áp dụng cho các mặt hàng không tồn tại`,
        code: 'TORUDEPTRAIVL',
        endDate: '31/12/2024'
    },
]