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
]