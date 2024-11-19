import { TableProps } from "antd";

export interface ManageOrderDataType {
    key: string;
    orderId: string;
    orderUser: string;
    type: string;
    deposit: number;
    remaining: number;
    total: number;
    status: string;
};

export const OrderTableColumns: TableProps<ManageOrderDataType>['columns'] = [
    {
        title: 'Mã đơn hàng',
        dataIndex: 'orderId',
        key: 'orderId',
    },
    {
        title: 'Người đặt',
        dataIndex: 'orderUser',
        key: 'orderUser',
    },
    {
        title: 'Loại đơn hàng',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Cọc trước',
        dataIndex: 'deposit',
        key: 'deposit',
    },
    {
        title: 'Còn lại',
        dataIndex: 'remaining',
        key: 'remaining',
    },
    {
        title: 'Tổng tiền',
        dataIndex: 'total',
        key: 'total',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
    },
];

export const ManageOrderSampleData: ManageOrderDataType[] = [
    {
        key: '1',
        orderId: '1234',
        orderUser: 'Shirogane Toru',
        type: 'Đơn hàng đặt cọc trước',
        deposit: 400000,
        remaining: 1200000,
        total: 1600000,
        status: 'Đang đợi hàng về'
    },
    {
        key: '2',
        orderId: '1234',
        orderUser: 'Shirogane Toru',
        type: 'Đơn hàng đặt cọc trước',
        deposit: 400000,
        remaining: 1200000,
        total: 1600000,
        status: 'Đang đợi hàng về'
    },
    {
        key: '3',
        orderId: '1234',
        orderUser: 'Shirogane Toru',
        type: 'Đơn hàng đặt cọc trước',
        deposit: 400000,
        remaining: 1200000,
        total: 1600000,
        status: 'Đang đợi hàng về'
    },
    {
        key: '4',
        orderId: '1234',
        orderUser: 'Shirogane Toru',
        type: 'Đơn hàng đặt cọc trước',
        deposit: 400000,
        remaining: 1200000,
        total: 1600000,
        status: 'Đang đợi hàng về'
    },
    {
        key: '5',
        orderId: '1234',
        orderUser: 'Shirogane Toru',
        type: 'Đơn hàng đặt cọc trước',
        deposit: 400000,
        remaining: 1200000,
        total: 1600000,
        status: 'Đang đợi hàng về'
    },
    {
        key: '6',
        orderId: '1234',
        orderUser: 'Shirogane Toru',
        type: 'Đơn hàng đặt cọc trước',
        deposit: 400000,
        remaining: 1200000,
        total: 1600000,
        status: 'Đang đợi hàng về'
    },
    {
        key: '7',
        orderId: '1234',
        orderUser: 'Shirogane Toru',
        type: 'Đơn hàng đặt cọc trước',
        deposit: 400000,
        remaining: 1200000,
        total: 1600000,
        status: 'Đang đợi hàng về'
    },
    {
        key: '8',
        orderId: '1234',
        orderUser: 'Shirogane Toru',
        type: 'Đơn hàng đặt cọc trước',
        deposit: 400000,
        remaining: 1200000,
        total: 1600000,
        status: 'Đang đợi hàng về'
    },
    {
        key: '9',
        orderId: '1234',
        orderUser: 'Shirogane Toru',
        type: 'Đơn hàng đặt cọc trước',
        deposit: 400000,
        remaining: 1200000,
        total: 1600000,
        status: 'Đang đợi hàng về'
    },
    {
        key: '10',
        orderId: '1234',
        orderUser: 'Shirogane Toru',
        type: 'Đơn hàng đặt cọc trước',
        deposit: 400000,
        remaining: 1200000,
        total: 1600000,
        status: 'Đang đợi hàng về'
    },
]