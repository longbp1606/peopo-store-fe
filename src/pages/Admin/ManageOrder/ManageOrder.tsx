import { Typography } from 'antd';
import * as Styled from './ManageOrder.styled';

const { Title } = Typography;

const ManageOrder = () => {
    return (
        <>
            <Styled.ManageOrderWrapper>
                <Title level={3}>Quản lý đơn hàng</Title>

                
            </Styled.ManageOrderWrapper>
        </>
    )
}

export default ManageOrder;