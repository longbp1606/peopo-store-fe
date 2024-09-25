import { Avatar, Col, Flex, Form, Row, Space, Typography, Upload } from 'antd';
import * as Styled from './Profile.styled';
import { fields } from './Profile.fields';
import { useRef } from 'react';
import ImgCrop from 'antd-img-crop';
import { UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Profile = () => {
    const fieldComponents = useRef<JSX.Element[]>([]);
    const imageUrl = '';
    
    return (
        <>
            <Styled.ProfileWrapper>
                <Space direction='vertical' style={{width: '100%'}}>
                    <Title level={2}>THÔNG TIN TÀI KHOẢN</Title>

                    <Flex vertical>
                        <Row justify={'space-between'}>
                            <Col span={14}>
                                <Flex vertical>
                                    <Form
                                        layout='vertical'
                                        autoComplete='off'
                                    >
                                        {fields.map((field) => {
                                            if (fieldComponents.current.length === 2)
                                                fieldComponents.current = [];
                                            
                                            const component = (
                                                <Form.Item
                                                    key={field.key}
                                                    label={field.label}
                                                    name={field.name}
                                                    initialValue={field.initialValue}
                                                    rules={field.rules}
                                                    required
                                                    style={
                                                        field.halfWidth 
                                                        ? { width: '50%' }
                                                        : { width: '100%'}
                                                    }
                                                >
                                                    {field.component}
                                                </Form.Item>
                                            );

                                            if (field.halfWidth) {
                                                fieldComponents.current.push(component);

                                                if (fieldComponents.current.length !== 2)
                                                    return;
                                            }

                                            return fieldComponents.current.length === 2 ? (
                                                <Flex gap={12} key={field.key}>
                                                    {fieldComponents.current.map(
                                                        (component) => component,
                                                    )}
                                                </Flex>
                                            ): ( component );
                                        })}
                                    </Form>
                                </Flex>
                            </Col>

                            <Col span={9}>
                                <Styled.AvatarContainer 
                                    vertical 
                                    align='center'
                                    gap={10}
                                >
                                    <ImgCrop
                                        quality={1}
                                        rotationSlider
                                        aspectSlider
                                        showReset
                                        showGrid
                                    >
                                        <Upload
                                            name='avatar'
                                            listType='picture-circle'
                                            showUploadList={false}
                                        >
                                            {imageUrl ? (
                                                <Avatar
                                                    src=''
                                                    size={125}
                                                />
                                            ): (
                                                <Avatar
                                                    icon={<UserOutlined/>}
                                                    size={100}
                                                />
                                            )}
                                        </Upload>
                                    </ImgCrop>

                                    <Text strong>Thay đổi ảnh đại diện</Text>
                                    <Text italic>
                                        Định dạng ảnh .png hoặc .jpg. 
                                        Kích thước ảnh dưới 1MB
                                    </Text>
                                </Styled.AvatarContainer>
                            </Col>
                        </Row>
                    </Flex>
                </Space>
            </Styled.ProfileWrapper>
        </>
    )
}

export default Profile