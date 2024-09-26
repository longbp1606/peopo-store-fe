import { Table, Tabs, Typography } from 'antd';
import * as Styled from './Order.styled';
import { DataType, OrderData, OrderTableSource, TabItems } from '../Customer.data';

const { Title } = Typography;

const Order = () => {
    return (
        <>
            <Styled.OrderWrapper>
                <Title level={2}>ĐƠN HÀNG CỦA TÔI</Title>

                <Tabs
                    defaultActiveKey={TabItems?.at(0)?.key}
                    items={TabItems}
                />

                <Table<DataType>
                    columns={OrderTableSource}
                    dataSource={OrderData}
                />
            </Styled.OrderWrapper>
        </>
    )
}

export default Order;