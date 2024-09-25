import { Button, Col, Flex, Form, Modal, Row, Space, Typography } from 'antd';
import * as Styled from './Address.styled';
import { AddressSampleData } from '../Customer.data';
import { FaLocationDot } from 'react-icons/fa6';
import { theme } from '@/themes';
import { fields } from './Address.fields';

const { Title, Text } = Typography;

const Address = () => {
    const [modal, contextHolderModal] = Modal.useModal();

    const addAddressPopup = () => {
        modal.confirm({
            centered: true,
            title: 'Thêm địa chỉ mới',
            content: (
                <Form
                    layout='vertical'
                    autoComplete='off'
                >
                    {fields.map((field) => (
                        <Form.Item
                            key={field.key}
                            label={field.label}
                            name={field.name}
                            rules={field.rules}
                            required
                        >
                            {field.component}
                        </Form.Item>
                    ))}
                </Form>
            ),
            okText: 'Xác nhận',
            cancelText: 'Quay lại'
        })
    };
    
    return (
        <>
            <Styled.AddressWrapper>
                <Title level={2}>ĐỊA CHỈ GIAO HÀNG</Title>

                {AddressSampleData.map((info) => (
                    <Row
                        key={info.key}
                        justify={'space-between'}
                        align={'middle'}
                    >
                        <Col lg={8}>
                            <Space direction='vertical'>
                                {info.name}
                                {info.address}
                                {info.phoneNumber}
                            </Space>
                        </Col>

                        <Col lg={6}>
                            {info.default &&
                                <Text style={{ color: `${theme.colors.primary}` }}>
                                    <FaLocationDot /> Địa chỉ mặc định
                                </Text>
                            }
                        </Col>

                        <Col lg={6}>
                            <Flex
                                vertical
                                gap={20}
                            >
                                <Button type='primary' block>Chỉnh sửa</Button>
                                {info.default &&
                                    <Button>Đặt làm mặc định</Button>}
                                <Button danger block>Xóa</Button>
                            </Flex>
                        </Col>
                    </Row>
                ))}

                <Button 
                    type='dashed' 
                    block
                    onClick={addAddressPopup}
                >
                    + Thêm địa chỉ mới 
                </Button>
            </Styled.AddressWrapper>

            {contextHolderModal}
        </>
    )
}

export default Address