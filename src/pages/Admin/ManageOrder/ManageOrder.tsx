import { Table, Typography } from 'antd';
import * as Styled from './ManageOrder.styled';
import { ManageOrderDataType, ManageOrderSampleData, OrderTableColumns } from './ManageOrder.data';

const { Title } = Typography;

const ManageOrder = () => {
    return (
        <>
            <Styled.ManageOrderWrapper vertical>
                <Title level={3}>Quản lý đơn hàng</Title>

                <Table<ManageOrderDataType>
                    dataSource={ManageOrderSampleData}
                    columns={OrderTableColumns}
                    rowSelection={{
                        type: 'checkbox',
                    }}
                />
            </Styled.ManageOrderWrapper>
        </>
    )
}

export default ManageOrder;