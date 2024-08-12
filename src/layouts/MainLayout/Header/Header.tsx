import { useEffect, useState } from 'react';
import * as Styled from './Header.styled';
import Container from '@/components/Container';
import { Badge, Col, Flex, Input, MenuProps, Row } from 'antd';
import Logo from '@/components/Logo';
import config from '@/config';
import { BellOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import cookiesUtils from '@/services/cookiesUtils';
import Toolbar from '@/components/Toolbar';

const { Search } = Input;

const items: MenuProps['items'] = [
    {
        label: <Link to={config.routes.customer.profile}>Trang cá nhân</Link>,
        key: config.routes.customer.profile
    },
    {
        type: 'divider'
    },
    {
        label: (
            <Link to={config.routes.public.login} onClick={() => cookiesUtils.clear()}>
                Đăng xuất
            </Link>
        ),
        key: config.routes.public.login,

    }
]

const Header = () => {
    const [show, setShow] = useState(false);
    const transitionNavBar = () => {
        if (window.scrollY > 0) setShow(true);
        else setShow(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);

    return (
        <>
            <Styled.Header $isScroll={show}>
                <Container>
                    <Row align="middle" justify="space-between">
                        <Col lg={5}>
                            <Logo to={config.routes.public.home} />
                        </Col>

                        <Col lg={8}>
                            <Flex gap={16} align='center'>
                            <Search placeholder="Search" enterButton allowClear/>
                                <Badge count={9} showZero>
                                    <BellOutlined style={{ fontSize: '26px'}}/>
                                </Badge>
                                <Badge count={9} showZero>
                                    <ShoppingCartOutlined style={{ fontSize: '26px'}} />
                                </Badge>
                                <Toolbar
                                menu={items}
                            />
                            </Flex>
                        </Col>
                    </Row>
                </Container>
            </Styled.Header>
        </>
    )
}

export default Header;