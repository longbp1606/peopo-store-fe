import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Badge, Button, Card, Col, Descriptions, Flex, Row, Tag, Typography } from "antd";
import { ManageCustomerSampleData } from "../ManageCustomer/ManageCustomer.data";
import * as Styled from "./ManageCustomerDetails.styled";
import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";

const { Title } = Typography;

const ManageCustomerDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find customer by ID from sample data
    const customer = ManageCustomerSampleData.find(customer => customer.customerId === id);

    if (!customer) {
        return <div>Customer not found</div>;
    }

    // Format phone number if available
    const formattedPhoneNumber = customer.phoneNumber ?
        `${customer.phoneNumber.slice(0, 4)}-${customer.phoneNumber.slice(4, 7)}-${customer.phoneNumber.slice(7, 10)}` :
        'N/A';

    // Render customer level tag
    const renderLevelTag = (level: string) => {
        switch (level) {
            case 'bronze':
                return <Tag color="gold">Bronze</Tag>
            case 'silver':
                return <Tag color="cyan">Silver</Tag>
            case 'gold':
                return <Tag color="orange">Gold</Tag>
            case 'platinum':
                return <Tag color="purple">Platinum</Tag>
            case 'diamond':
                return <Tag color="blue">Diamond</Tag>
            default:
                return <Tag>Unknown</Tag>
        }
    };

    // Render customer status badge
    const renderStatusBadge = (status: string) => {
        if (status === 'online') {
            return <Badge status="success" text="Online" />
        } else {
            return <Badge status="default" text="Offline" />
        }
    };

    return (
        <Styled.ManageCustomerDetailsWrapper vertical>
            <Flex>
                <Button type="link" onClick={() => navigate(-1)} icon={<ArrowLeftOutlined />}/>
                <Title level={3}>Chi tiết khách hàng</Title>
            </Flex>

            <Styled.CustomerInfoCard vertical>
                <Row gutter={[24, 24]}>
                    <Col span={24}>
                        <Flex align="center" gap={16}>
                            {customer.avatar ?
                                <Avatar src={customer.avatar} size={80} /> :
                                <Avatar size={80}>
                                    <UserOutlined />
                                </Avatar>
                            }
                            <div>
                                <Title level={4} style={{ margin: 0 }}>{customer.customerName}</Title>
                                <Flex gap={8} align="center">
                                    {renderLevelTag(customer.level)}
                                    {renderStatusBadge(customer.status)}
                                </Flex>
                            </div>
                        </Flex>
                    </Col>

                    <Col span={24}>
                        <Card title="Thông tin khách hàng" bordered={false}>
                            <Descriptions layout="vertical" column={{ xs: 1, sm: 2, md: 3 }}>
                                <Descriptions.Item label="Mã khách hàng">{customer.customerId}</Descriptions.Item>
                                <Descriptions.Item label="Email">{customer.email || 'N/A'}</Descriptions.Item>
                                <Descriptions.Item label="Số điện thoại">{formattedPhoneNumber}</Descriptions.Item>
                                <Descriptions.Item label="Loại khách hàng">
                                    {customer.type === 'registered' ?
                                        <Tag color="green">Đã đăng ký</Tag> :
                                        'N/A'
                                    }
                                </Descriptions.Item>
                                <Descriptions.Item label="Cấp độ">{renderLevelTag(customer.level)}</Descriptions.Item>
                                <Descriptions.Item label="Trạng thái">{renderStatusBadge(customer.status)}</Descriptions.Item>
                            </Descriptions>
                        </Card>
                    </Col>

                    <Col span={24}>
                        <Card title="Lịch sử mua hàng" bordered={false}>
                            <p>Chưa có dữ liệu lịch sử mua hàng</p>
                        </Card>
                    </Col>
                </Row>
            </Styled.CustomerInfoCard>
        </Styled.ManageCustomerDetailsWrapper>
    )
}

export default ManageCustomerDetails