import Title from '@/components/Title';
import * as Styled from './Products.styled';
import Container from '@/components/Container';
import { Col, Collapse, Flex, Pagination, Row, Select, Space } from 'antd';
import { ProductFilters, ProductOrder } from './Products.data';
import { ProductSampleData } from './Products.sample';
import { useNavigate } from 'react-router-dom';
import routes from '@/config/routes';
import ProductSection from '../Home/Component/ProductSection';
import { useState } from 'react';

const Products = () => {
    const [pageSize, setPageSize] = useState(10);
    
    const navigate = useNavigate()

    const ProductList = Array(16).fill({}).map((_, index) => ({
        ...ProductSampleData,
        id: `${ProductSampleData.id}${index + 1}`
    }));

    const handlePageSizeChange = (pageSize: number) => {
        setPageSize(pageSize);
    }

    return (
        <>
            <Styled.ProductWrapper>
                <Title title='Hàng có sẵn' />

                <Container>
                    <Flex gap={20}>
                        <Col lg={6}>
                            <Collapse items={ProductFilters} />
                        </Col>

                        <Col lg={18}>
                            <Space
                                direction='vertical'
                                size='middle'
                            >
                                <Flex
                                    justify='flex-end'
                                >
                                    <Select
                                        defaultValue="Sắp xếp theo"
                                        options={ProductOrder}
                                        style={{ width: '150px' }}
                                    />
                                </Flex>

                                <Flex
                                    wrap
                                    gap={35}
                                >
                                    {ProductList.map((product) => (
                                        <Styled.ProductElement key={product.id}>
                                            <Styled.ProductImageHolder>
                                                <Styled.ProductImage
                                                    src={product.img}
                                                    alt={product.name}
                                                    preview={false}
                                                    onClick={() => navigate(`${routes.public.productDetail.replace(':id', '1')}`)}
                                                />
                                            </Styled.ProductImageHolder>
                                            <Styled.ProductName>
                                                {product.name}
                                            </Styled.ProductName>
                                            <Styled.ProductPrice>
                                                ¥ {product.price}
                                            </Styled.ProductPrice>
                                        </Styled.ProductElement>
                                    ))}
                                </Flex>

                                <Pagination
                                    align='end'
                                    defaultCurrent={1}
                                    total={50}
                                    showSizeChanger
                                    showQuickJumper
                                />
                            </Space>
                        </Col>
                    </Flex>
                </Container>

                <ProductSection/>
            </Styled.ProductWrapper>
        </>
    )
}

export default Products