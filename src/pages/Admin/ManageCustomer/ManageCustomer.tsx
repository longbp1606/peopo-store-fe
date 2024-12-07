import { Table, Typography } from 'antd';
import * as Styled from './ManageCustomer.styled';
import { CustomerTableColumns, ManageCustomerDataType, ManageCustomerSampleData } from './ManageCustomer.data';

const { Title } = Typography;

const ManageCustomer = () => {
    return (
        <>
            <Styled.ManageCustomerWrapper vertical>
                <Title level={3}>Quản lý khách hàng</Title>

                <Table<ManageCustomerDataType>
                    dataSource={ManageCustomerSampleData}
                    columns={CustomerTableColumns}
                    rowSelection={{
                        type: 'checkbox',
                    }}
                />
            </Styled.ManageCustomerWrapper>
        </>
    )
}

export default ManageCustomer;