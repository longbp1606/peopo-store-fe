import { Avatar, Divider, Flex, Segmented, Table, Tag, Tooltip, Typography } from 'antd';
import * as Styled from './Dashboard.styled';
import { AnalysicSampleData, ChartSampleData, CustomerDataType, CustomerSampleData, CustomerTableColumns, OrderSampleData } from './Dashboard.data';
import { BiLineChart, BiLineChartDown } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { FaArrowCircleRight } from "react-icons/fa";
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { theme } from '@/themes';
const { Title, Text } = Typography;

const Dashboard = () => {

    const AnalyticStatus = (percent: string, result: string) => {
        const colorTag = result.includes('increase') ? 'green'
            : result.includes('decrease') ? 'red' : '';

        const iconTag = result.includes('increase') ? <BiLineChart />
            : result.includes('decrease') ? <BiLineChartDown /> : <></>;

        return (
            <>
                <Tag color={colorTag}>{iconTag}{percent}</Tag>
            </>
        )
    }

    return (
        <>
            <Styled.DashboardWrapper vertical>
                <Title>Bảng phân tích điều khiển</Title>

                {/* Summary Analytic Area */}
                <Styled.AnalyticWrapper>
                    {AnalysicSampleData.map((analytic) => (
                        <Styled.AnalyticContainer key={analytic.key}>
                            <Styled.AnalyticDataContainer vertical>
                                <Text>{analytic.label}</Text>
                                <Title level={3}>{analytic.data}</Title>
                                <Flex>
                                    {AnalyticStatus(analytic.percent, analytic.result)}
                                    từ {analytic.total}
                                </Flex>
                            </Styled.AnalyticDataContainer>
                        </Styled.AnalyticContainer>
                    ))}
                </Styled.AnalyticWrapper>

                {/* Chart and Newest Orders */}
                <Styled.ChartAndOrderWrapper>
                    <Styled.OrderWrapper vertical>
                        <Title level={4}>Những đơn hàng mới</Title>
                        <Text>Những đơn hàng được đặt gần đây nhất</Text>
                        <Divider />
                        {OrderSampleData.map((order) => (
                            <>
                                <Flex justify='space-between' align='center' key={order.key}>
                                    <Avatar size={'large'}>
                                        <UserOutlined />
                                    </Avatar>
                                    <Flex vertical>
                                        <Title level={5}>Đơn hàng #{order.orderID}</Title>
                                        <Text>{order.customer}</Text>
                                    </Flex>
                                    <Text>{order.price} VNĐ</Text>
                                    <Link to={'/'}>
                                        <FaArrowCircleRight size={25} />
                                    </Link>
                                </Flex>
                                <Divider />
                            </>
                        ))}
                    </Styled.OrderWrapper>

                    <Styled.ChartWrapper vertical>
                        <Flex justify='space-between' align='center'>
                            <Title level={4}>Doanh thu theo tháng</Title>
                            <Segmented<string> 
                                options={['Tuần trước', 'Tuần này']} 
                                defaultValue={'Tuần này'}
                            />
                        </Flex>

                        <Divider/>

                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={500}
                                height={300}
                                data={ChartSampleData}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend verticalAlign='top' align='right' />
                                <Bar
                                    name="Doanh thu"
                                    dataKey="pv"
                                    fill={theme.colors.primary}
                                    activeBar={
                                        <Rectangle fill="pink" stroke="blue" />
                                    }
                                />
                                <Bar
                                    name="Mục tiêu"
                                    dataKey="uv"
                                    fill="#D4D4D4"
                                    activeBar={
                                        <Rectangle fill="gold" stroke="purple" />
                                    }
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </Styled.ChartWrapper>
                </Styled.ChartAndOrderWrapper>

                <Styled.CustomerWrapper vertical>
                    <Title level={4}>Khách hàng mới gần đây</Title>

                    <Table<CustomerDataType>
                        columns={CustomerTableColumns}
                        dataSource={CustomerSampleData}
                    />
                </Styled.CustomerWrapper>
            </Styled.DashboardWrapper>
        </>
    )
}

export default Dashboard;