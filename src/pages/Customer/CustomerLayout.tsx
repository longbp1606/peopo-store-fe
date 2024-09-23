import Container from '@/components/Container'
import Sidebar from '@/components/Sidebar'
import CustomerSidebarContent from '@/components/Sidebar/Customer/CustomerSidebarContent'
import { Col, Row } from 'antd'
import { Outlet } from 'react-router-dom'

const CustomerLayout = () => {
    return (
        <>
            <main style={{ margin: '2em 0' }}>
                <Container>
                    <Row>
                        <Col>
                            <Sidebar
                                title='Tài khoản'
                                children={<CustomerSidebarContent />}
                            />
                        </Col>

                        <Col>
                            <Outlet />
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}

export default CustomerLayout;