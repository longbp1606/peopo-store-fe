import Tag from "@/components/Tag";
import { OrderStatusEnum } from "@/utils/enums";
import { formatCurrency } from "@/utils/formatCurrency";
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
        render: (deposit) => formatCurrency(deposit),
    },
    {
        title: 'Còn lại',
        dataIndex: 'remaining',
        key: 'remaining',
        render: (deposit) => formatCurrency(deposit),
    },
    {
        title: 'Tổng tiền',
        dataIndex: 'total',
        key: 'total',
        render: (deposit) => formatCurrency(deposit),
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        render: (_, { status }) => (
            <Tag status={status} type={OrderStatusEnum}/>
        ),
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
        status: OrderStatusEnum.PENDING
    },
    {
        key: '2',
        orderId: '1234',
        orderUser: 'Shirogane Toru',
        type: 'Đơn hàng đặt cọc trước',
        deposit: 400000,
        remaining: 1200000,
        total: 1600000,
        status: OrderStatusEnum.DELIVERED
    },
    {
        key: '3',
        orderId: '1234',
        orderUser: 'Shirogane Toru',
        type: 'Đơn hàng đặt cọc trước',
        deposit: 400000,
        remaining: 1200000,
        total: 1600000,
        status: OrderStatusEnum.DELIVERING
    },
    {
        key: '4',
        orderId: '1234',
        orderUser: 'Shirogane Toru',
        type: 'Đơn hàng đặt cọc trước',
        deposit: 400000,
        remaining: 1200000,
        total: 1600000,
        status: OrderStatusEnum.SUCESSFULLY
    },
    {
        key: '5',
        orderId: '1234',
        orderUser: 'Shirogane Toru',
        type: 'Đơn hàng đặt cọc trước',
        deposit: 400000,
        remaining: 1200000,
        total: 1600000,
        status: OrderStatusEnum.CANCELLED
    },
    {
        key: '6',
        orderId: '1234',
        orderUser: 'Shirogane Toru',
        type: 'Đơn hàng đặt cọc trước',
        deposit: 400000,
        remaining: 1200000,
        total: 1600000,
        status: OrderStatusEnum.PENDING
    },
    {
        key: '7',
        orderId: '1234',
        orderUser: 'Shirogane Toru',
        type: 'Đơn hàng đặt cọc trước',
        deposit: 400000,
        remaining: 1200000,
        total: 1600000,
        status: OrderStatusEnum.DELIVERED
    },
    {
        key: '8',
        orderId: '1234',
        orderUser: 'Shirogane Toru',
        type: 'Đơn hàng đặt cọc trước',
        deposit: 400000,
        remaining: 1200000,
        total: 1600000,
        status: OrderStatusEnum.DELIVERING
    },
    {
        key: '9',
        orderId: '1234',
        orderUser: 'Shirogane Toru',
        type: 'Đơn hàng đặt cọc trước',
        deposit: 400000,
        remaining: 1200000,
        total: 1600000,
        status: OrderStatusEnum.SUCESSFULLY
    },
    {
        key: '10',
        orderId: '1234',
        orderUser: 'Shirogane Toru',
        type: 'Đơn hàng đặt cọc trước',
        deposit: 400000,
        remaining: 1200000,
        total: 1600000,
        status: OrderStatusEnum.CANCELLED
    },
];