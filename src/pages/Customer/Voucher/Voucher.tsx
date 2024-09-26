import { Button, Col, Flex, Modal, Row, Space, Typography } from 'antd';
import * as Styled from './Voucher.styled';
import { HiOutlineTicket } from "react-icons/hi2";
import { VoucherSampleData } from '../Customer.data';

const { Title, Text } = Typography;

const Voucher = () => {
    const [modal, contextHolderModal] = Modal.useModal();
    
    const onDetails = () => {
        modal.info({
            title: 'Chi tiết voucher',
            content: 'Không áp dụng cho mặt hàng đã không tồn tại'
        })
    };

    return (
        <>
            {contextHolderModal}

            <Styled.VoucherWrapper>
                <Title level={2}>VÍ VOUCHER</Title>

                <Flex vertical gap={20}>
                    {VoucherSampleData.map((voucher) => (
                        <Row justify={'space-between'} key={voucher.key}>
                            <Col>
                                <Styled.IconWrapper>
                                    <HiOutlineTicket />
                                </Styled.IconWrapper>
                            </Col>
                            <Col span={16}>
                                <Space direction='vertical'>
                                    <Title level={4}>{voucher.label}</Title>
                                    <Text>{voucher.description}</Text>
                                    <Text strong>MÃ VOUCHER: {voucher.code}</Text>
                                    <Text>HSD: {voucher.endDate}</Text>
                                </Space>
                            </Col>
                            <Col>
                                <Flex
                                    vertical
                                    justify='center'
                                    style={{ height: '100%' }}
                                >
                                    <Button onClick={onDetails}>
                                        Chi tiết
                                    </Button>
                                </Flex>
                            </Col>
                        </Row>
                    ))}
                </Flex>
            </Styled.VoucherWrapper>
        </>
    )
}

export default Voucher