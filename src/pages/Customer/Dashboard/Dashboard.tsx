import { Button, Col, Divider, Flex, Row, Space, Table, Typography } from 'antd';
import * as Styled from './Dashboard.styled';
import { AddressSampleData, DashboardData, DataType, OrderData, OrderTableSource, ProfileSampleData } from '../Customer.data';
import { Link } from 'react-router-dom';
import config from '@/config';
import { FaLocationDot } from 'react-icons/fa6';
import { theme } from '@/themes';

const { Title, Text } = Typography;

const Dashboard = () => {
    return (
        <>
            <Styled.DashboardWrapper>
                <Space direction='vertical' style={{ width: '100%' }}>
                    <Title level={2}>Bảng điều khiển của khách hàng</Title>

                    <Styled.ProfileSection>
                        <Styled.ProfileSummary gap={10}>
                            <Styled.AvatarHolder>
                                <Styled.AvatarImage
                                    src={ProfileSampleData.avatar}
                                    alt={ProfileSampleData.fullname}
                                    preview={false}

                                />
                            </Styled.AvatarHolder>

                            <Space direction='vertical' size='middle'>
                                {DashboardData[0].component.map((item) => (
                                    <Text key={item.key}>
                                        {item.label}
                                        <Text strong> {item.value}</Text>
                                    </Text>
                                ))}
                            </Space>
                        </Styled.ProfileSummary>
                        <Divider />
                        <Styled.ProfileDetail>
                            <Title level={3}>Thông tin tài khoản</Title>

                            {DashboardData[1].component.map((item) => (
                                <Row key={item.key}>
                                    <Col lg={12}>
                                        <Text strong>{item.label}</Text>
                                    </Col>

                                    <Col>
                                        <Text>{item.value} </Text>
                                    </Col>
                                </Row>
                            ))}
                        </Styled.ProfileDetail>
                    </Styled.ProfileSection>

                    <Divider />

                    <Styled.OrderSection>
                        <Flex justify='space-between'>
                            <Title level={3}>NHỮNG ĐƠN HÀNG GẦN ĐÂY</Title>
                            <Link to={config.routes.customer.order}>Xem tất cả</Link>
                        </Flex>

                        <Table<DataType>
                            columns={OrderTableSource}
                            dataSource={OrderData}
                        />
                    </Styled.OrderSection>

                    <Divider />

                    <Styled.AddressSection>
                        <Title level={3}>ĐỊA CHỈ GIAO HÀNG</Title>

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
                                        <Text style={{color: `${theme.colors.primary}`}}>
                                            <FaLocationDot/> Địa chỉ mặc định
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
                    </Styled.AddressSection>
                </Space>
            </Styled.DashboardWrapper>
        </>
    )
}

export default Dashboard