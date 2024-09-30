import { Button, Col, Divider, Flex, Input, Row, Table, Typography } from 'antd';
import * as Styled from './Point.styled';
import { PointData, PointTableSource, ProfileSampleData } from '../Customer.data';

const { Title, Text } = Typography;

const Point = () => {
  return (
    <>
      <Styled.PointWrapper>
        <Title level={2}>Tài khoản P-Point</Title>

        <Flex vertical gap={10}>
          <Row>
            <Col lg={4}>
              <Text strong>Số P-Point hiện tại: </Text>
            </Col>
            <Col lg={8}>
              <Text> {ProfileSampleData.pPoint} </Text>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <Text strong>Nhập mã nạp: </Text>
            </Col>
            <Col lg={8}>
              <Flex gap={10}>
                <Input placeholder='Nhập mã nạp tại đây' />
                <Button type='primary'>
                  Xác nhận
                </Button>
              </Flex>
            </Col>
          </Row>
        </Flex>

        <Divider/>

        <Title level={2}>Lịch sử đổi thưởng</Title>

        <Table columns={PointTableSource} dataSource={PointData}/>
      </Styled.PointWrapper>
    </>
  )
}

export default Point;