import Container from '@/components/Container';
import * as Styled from './ProductDetail.styled';
import { Alert, Col, Divider, Flex, Row, Typography } from 'antd';
import { ProductDataSample } from './ProductDetail.sample';
import { useState } from 'react';
import { theme } from '@/themes';

const { Title } = Typography;

const ProductDetail = () => {
    const [categorySelected, setCategorySelected] = useState(ProductDataSample.products[0].key);

    const handleCategorySelected = (category: string) => {
        setCategorySelected(category);
    }
    
    return (
        <>
            <Styled.ProductWrapper>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Styled.ImageHolderWrapper>
                                <Styled.ImageHolderMain>
                                    <Styled.ImageMain 
                                        src={ProductDataSample.image.find((item) => item.key === 1)?.src}
                                        alt='Main'
                                        preview={false}
                                    />
                                </Styled.ImageHolderMain>
                                <Styled.ImageHolderSub>
                                    {ProductDataSample.image.map((image) => (
                                        <Styled.ImageSub
                                            src={image.src}
                                            alt={image.alt}
                                            preview={false}
                                            key={image.key}
                                        />
                                    ))}
                                </Styled.ImageHolderSub>
                            </Styled.ImageHolderWrapper>
                        </Col>
                        <Col lg={12}>
                            <Styled.ProductContainer>
                                <Title>{ProductDataSample.name}</Title>
                                <Divider/>
                                <Alert
                                    message={`Thời gian đặt hàng từ: ${ProductDataSample.orderStartDate} - ${ProductDataSample.orderEndDate}`}
                                    type='warning'
                                /><br/>
                                {ProductDataSample.category.map((type) => (
                                    <Styled.ProductTag
                                        key={type.key}
                                    >
                                        {type.name}
                                    </Styled.ProductTag>
                                ))}
                                <Title level={2}>Loại mặt hàng</Title>
                                <Flex
                                    vertical
                                >
                                    <Styled.CategoryGroupButton 
                                        gap={15}
                                    >
                                        {ProductDataSample.products.map((category) => (
                                            <Styled.CategoryButton 
                                                key={category.key}
                                                style={{
                                                    background: categorySelected === category.key ? `${theme.colors.primary}` : 'white',
                                                    color: categorySelected === category.key ? 'white' : `${theme.colors.textSecondary}`,
                                                    borderColor: categorySelected === category.key ? `${theme.colors.primary}` : '#d9d9d9',
                                                }}
                                                onClick={() => handleCategorySelected(category.key)}
                                            >
                                                {category.key} : {category.product.length}
                                                
                                            </Styled.CategoryButton>
                                        ))}
                                    </Styled.CategoryGroupButton>
                                </Flex>
                            </Styled.ProductContainer>
                        </Col>
                    </Row>
                </Container>
            </Styled.ProductWrapper>
        </>
    )
}

export default ProductDetail;