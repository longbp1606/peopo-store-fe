import { Col, Divider, List, Row, Tabs, Typography } from 'antd';
import * as Styled from './Notification.styled';
import { NotifySampleData, NotifyTab } from '../Customer.data';
import { FaCircle } from "react-icons/fa6";
import { theme } from '@/themes';

const { Title, Text } = Typography;

const Notification = () => {    
    return (
        <Styled.NotificationWrapper>
            <Title level={2}>Thông báo</Title>

            <Tabs items={NotifyTab} />

            <List
                size='large'
                dataSource={NotifySampleData}
                renderItem={(notify) => (
                    <>
                        <Row justify={'space-between'}>
                            <Col lg={20}>
                                <Title level={5}>{notify.label}</Title>
                            </Col>
                            <Col 
                                lg={4}
                                style={{ textAlign: 'right' }}
                            >
                                <Text italic>{notify.datetime}</Text>
                            </Col>
                        </Row>

                        <Row justify={'space-between'}>
                            <Col lg={20}>
                                <Text>{notify.content}</Text>
                            </Col>
                            <Col 
                                lg={4} 
                                style={{
                                    color: `${theme.colors.primary}`,
                                    textAlign: 'right'
                                }}
                            >
                                {notify.isRead ? <></> : <FaCircle size={10}/>}
                            </Col>
                        </Row>

                        <Divider/>
                    </>
                )}
            >

            </List>
        </Styled.NotificationWrapper>
    )
}

export default Notification;