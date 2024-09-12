import Container from '@/components/Container';
import * as Styled from './Footer.styled';
import { Col, List, Row, Typography } from 'antd';
import Logo from '@/components/Logo';
import { aboutUs, category, page, policy, socials } from './Footer.data';
import Link from '@/components/Link';

const { Title, Text } = Typography;

const Footer = () => {
    return (
        <>
            <Styled.FooterSection>
                <Container>
                    <Row gutter={24}>
                        <Col lg={6}>
                            <Styled.AboutShopSection>
                                <Logo to='/' />
                                <Styled.ShopSlogan>
                                    Chắp cánh niềm simp của bạn
                                </Styled.ShopSlogan>
                                <Styled.AboutShopContainer>
                                    {aboutUs.map((about) => {
                                        const Icon = about.icon;

                                        return (
                                            <Styled.AboutShopElement key={about.key}>
                                                {Icon && <Icon size={20} />}
                                                {about.title}
                                            </Styled.AboutShopElement>
                                        )
                                    })}
                                </Styled.AboutShopContainer>
                            </Styled.AboutShopSection>
                        </Col>
                        <Col lg={6}>
                            <Styled.FooterColumnWrapper>
                                <Title level={3}>Danh mục</Title>

                                <List
                                    itemLayout='vertical'
                                    dataSource={category}
                                    renderItem={(category) => (
                                        <List.Item key={category.key}>
                                            <Link to={category.to}>{category.title}</Link>
                                        </List.Item>
                                    )}
                                />
                            </Styled.FooterColumnWrapper>
                        </Col>
                        <Col lg={6}>
                            <Styled.FooterColumnWrapper>
                                <Title level={3}>Trang</Title>

                                <List
                                    itemLayout='vertical'
                                    dataSource={page}
                                    renderItem={(page) => (
                                        <List.Item key={page.key}>
                                            <Link to={page.to}>{page.title}</Link>
                                        </List.Item>
                                    )}
                                />
                            </Styled.FooterColumnWrapper>
                        </Col>
                        <Col lg={6}>
                            <Styled.FooterColumnWrapper>
                                <Title level={3}>Chính sách</Title>

                                <List
                                    itemLayout='vertical'
                                    dataSource={policy}
                                    renderItem={(category) => (
                                        <List.Item key={category.key}>
                                            <Link to={category.to}>{category.title}</Link>
                                        </List.Item>
                                    )}
                                />
                            </Styled.FooterColumnWrapper>
                        </Col>
                    </Row>

                    <Styled.FooterRow align="middle" justify={'space-between'}>
                        <Col md={14} xs={24}>
                            <Styled.FooterCopyright>
                                <Text>
                                    Bản quyền © 2024. <Text strong>Peopo Store</Text>.
                                    Hệ thống cung cấp dịch vụ mua hàng tại nước ngoài.
                                </Text>
                            </Styled.FooterCopyright>
                        </Col>
                        
                        <Col md={6} xs={24}>
                            <Styled.FooterSocial>
                                {socials.map((social) => {
                                    const Icon = social.icon;

                                    return (
                                        <Link
                                            key={social.key}
                                            to={social.to}
                                            aria-label={social.label}
                                        >
                                            {Icon && <Icon size={20}/>}
                                        </Link>
                                    )
                                })}
                            </Styled.FooterSocial>
                        </Col>
                    </Styled.FooterRow>
                </Container>
            </Styled.FooterSection>
        </>
    )
}

export default Footer;